import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import ProductCard from '../components/productCard.js';
import BlogCard from '../components/blogCard.js';

import { Picker } from '@react-native-picker/picker';

import aintMyTime from "../images/Ain27t_My_Time_Spray.webp"
import jett from "../images/jett.webp"
import bunnyHop from "../images/bunnyHop.png"

const categoryNames = {
"680132e9b2dd979cfd780d18": "Agent",
"680132fab9f7d71485f07ba9": "Animal",
"68013319ec6880aba2533134": "Others",
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption , setSortOption] = useState("price-asc");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/67b37ffe11b0a9ee2a8fb54f/products', {
      headers: {
        Authorization:
          'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
      },
      }
    )
    .then((res) => res.json())
      .then((data) => {
        console.log
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: ( item.skus[0]?.fieldData.price.value || 0) / 100,
            image: {uri: item.skus[0]?.fieldData["main-image"]?.url },
            category: 
              categoryNames[item.product.fieldData.category[0]] || 'Unknown',
          }))
        );
  })
      .catch(console.error);
}, []);

useEffect(() => {
    fetch('https://api.webflow.com/v2/collections/67bcbd8c6a3689f1d8664016/items', {
      headers: {
        Authorization:
          'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
      },
      }
    )
    .then((res) => res.json())
      .then((data) => {
        console.log
        setBlogs(
          data.items.map((item) => ({
            id: item.id,
            title: item.fieldData.name,
            subtitle: item.fieldData.intro,
            image: { uri: item.fieldData["Thumbnail Image"]?.url },
            text: item.fieldData.text,
          }))
        );
  })
      .catch(console.error);
}, []);

const filteredProducts = products.filter(
  (p) =>
  (selectedCategory === "" || p.category === selectedCategory) &&
  p.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sortOption === "price-asc") return a.price - b.price;
  if (sortOption === "price-desc") return b.price - a.price;
  if (sortOption === "name-asc") return a.title.localeCompare(b.title);
  if (sortOption === "name-desc") return b.title.localeCompare(a.title);
  });
   
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Hati's Sticker Shop!</Text>
        <Image source={{uri: 'https://ih1.redbubble.net/image.4082778939.3621/st,small,507x507-pad,600x600,f8f8f8.jpg'}} style={{ width: 50, height: 50 }}/>

        <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor={"#999"}
        value={searchQuery}
        onChangeText={setSearchQuery}
        />
        
        <View style={styles.pickerContainer}>
          <Picker 
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.picker}
          >
          <Picker.Item label="All categories" value="" />
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.picker}
        >
          <Picker.Item label="Price (low to high)" value="price-asc" />
          <Picker.Item label="Price (high to low)" value="price-desc" />
          <Picker.Item label="Name (A-Z)" value="name-asc" />
          <Picker.Item label="Name (Z-A)" value="name-desc" />
        </Picker>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.heading2}>Our stickers</Text>

          <View style={styles.row}>
            {sortedProducts.map((product) => (
              <ProductCard
              key={product.id}
              {...product}
              onPress={() =>
                navigation.navigate('Details',product)}
            />
          ))}
            <StatusBar style="auto" />
          </View>

          <Text style={styles.heading2}>Our Blogs</Text>
            <View style={styles.row}>
              {blogs && blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                intro={blog.subtitle}
                image={blog.image}
              />
            ))}
          </View>
          <StatusBar style="auto" />
        </ScrollView>
        </View>
      );
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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
        marginBottom: 20,
      },
      searchInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
        color: '#000',
      },
      cardContainer: {
        width: '100%',
        paddingHorizontal: 24,
      },
      row: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      },
    });
    
    export default HomeScreen;