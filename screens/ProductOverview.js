import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchFilterCard from '../components/searchFilterCard';
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

      <SearchFilterCard
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
        categories={[...new Set(products.map((p) => p.category))]}
      />

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
      <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate('Wishlist', {
                      wishlist: wishlist,
                      products: products,
                    })
                  }
                >
                  <Text style={styles.heading2}>Wishlist</Text>
                </TouchableOpacity>
              </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  productGrid: {
    flexDirection: 'column',
    gap: 12,
  },
  button: {
    fontFamily: 'Poppins_600SemiBold',
    backgroundColor: '#FC55BE',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
});

export default ProductOverview;
