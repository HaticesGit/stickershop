import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ProductCard from '../components/productCard';

const categoryNames = {
  "680132e9b2dd979cfd780d18": "Agent",
  "680132fab9f7d71485f07ba9": "Animal",
  "68013319ec6880aba2533134": "Others",
};

const ProductOverview = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('price-asc');
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/67b37ffe11b0a9ee2a8fb54f/products', {
      headers: {
        Authorization: 'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData['main-image']?.url },
            category: categoryNames[item.product.fieldData.category[0]] || 'Unknown',
          }))
        );
      })
      .catch(console.error);
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === '' || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    if (sortOption === 'name-asc') return a.title.localeCompare(b.title);
    if (sortOption === 'name-desc') return b.title.localeCompare(a.title);
  });

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>All Stickers</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerContainer}>
        <Picker 
        selectedValue={selectedCategory} 
        onValueChange={setSelectedCategory}>
          <Picker.Item label="All categories" value="" />
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker selectedValue={sortOption} onValueChange={setSortOption}>
          <Picker.Item label="Price (low to high)" value="price-asc" />
          <Picker.Item label="Price (high to low)" value="price-desc" />
          <Picker.Item label="Name (A-Z)" value="name-asc" />
          <Picker.Item label="Name (Z-A)" value="name-desc" />
        </Picker>
      </View>

      <View style={styles.productGrid}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            isInWishlist={wishlist.includes(product.id)}
            onToggleWishlist={() => toggleWishlist(product.id)}
            onPress={() => navigation.navigate('Details', product)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
    pickerContainer: {
    backgroundColor: '#fffefc', // off-white
    borderRadius: 8,
    marginBottom: 16,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
   searchInput: {
    backgroundColor: '#fffefc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productGrid: {
    flexDirection: 'column',
    gap: 12,
  },
});

export default ProductOverview;
