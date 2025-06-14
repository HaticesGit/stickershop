import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import ProductCard from '../components/productCard.js';
import BlogCard from '../components/blogCard.js';
import SearchFilterCard from '../components/searchFilterCard.js';
import Poppins from 'expo-font';


const categoryNames = {
  '680132e9b2dd979cfd780d18': 'Agent',
  '680132fab9f7d71485f07ba9': 'Animal',
  '68013319ec6880aba2533134': 'Others',
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('price-asc');
  const [blogs, setBlogs] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.webflow.com/v2/sites/67b37ffe11b0a9ee2a8fb54f/products',
      {
        headers: {
          Authorization:
            'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.description,
          price:
            (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: {
            uri: item.skus[0]?.fieldData['main-image']?.url,
          },
          category:
            categoryNames[item.product.fieldData.category[0]] ||
            'Unknown',
        }))
      );
    })
    .catch(console.error);
  }, []);

  useEffect(() => {
    fetch(
      'https://api.webflow.com/v2/collections/67bcbd8c6a3689f1d8664016/items',
      {
        headers: {
          Authorization:
            'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      setBlogs(
        data.items.map((item) => ({
          id: item.id,
          title: item.fieldData.name,
          subtitle: item.fieldData.intro,
          image: {
            uri: item.fieldData['thumbnail-image']?.url,
          },
          text: item.fieldData.text,
        }))
      );
    })
    .catch(console.error);
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === '' ||
        p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    if (sortOption === 'name-asc')
      return a.title.localeCompare(b.title);
    if (sortOption === 'name-desc')
      return b.title.localeCompare(a.title);
  });

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Welcome to Hati's Sticker Shop!</Text>
        <Image
          source={{
            uri: 'https://ih1.redbubble.net/image.4082778939.3621/st,small,507x507-pad,600x600,f8f8f8.jpg',
          }}
          style={styles.logo}
        />
      </View>

      <SearchFilterCard
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
        categories={[...new Set(products.map((p) => p.category))]}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.heading2}>Our stickers</Text>

        <View style={styles.column}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isInWishlist={wishlist.includes(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
              onPress={() => navigation.navigate('Details', product)}
            />
          ))}
          <StatusBar style="auto" />
        </View>

        <Text style={styles.heading2}>Our Blogs</Text>
        <View style={styles.column}>
          {blogs &&
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                intro={blog.subtitle}
                image={blog.image}
                onPress={() =>
                  navigation.navigate('BlogDetail', { blog })
                }
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
            <Text>Wishlist</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 4,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 20,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginBottom: 0,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 4,
    fontSize: 16,
    marginBottom: 4,
    color: '#000',
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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

export default HomeScreen;
