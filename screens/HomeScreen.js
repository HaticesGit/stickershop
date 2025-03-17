import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from '../components/productCard.js';

import aintMyTime from "../images/Ain27t_My_Time_Spray.webp"
import jett from "../images/jett.webp"
import bunnyHop from "../images/bunnyHop.png"

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/67b37ffe11b0a9ee2a8fb54f/products', {
      headers: {
        Authorization:
          'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
      },
      }
    )
    .then((res) => res.json())
      .then((data) => 
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: product.item.product.fieldData.name,
            subtitle: product.item.product.fieldData.description,
            price: ( item.skus[0]?.fieldData.price.value || 0) / 100,
            image: {uri: item.skus[0]?.fieldData["main-image"]?.url },
          }))
        )
      )
      .catch((err) => console.error('error:', err));
}, []);
   
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Hati's Sticker Shop!</Text>
        <Image source={{uri: 'https://ih1.redbubble.net/image.4082778939.3621/st,small,507x507-pad,600x600,f8f8f8.jpg'}} style={{ width: 50, height: 50 }}/>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.row}>
            <Text style={styles.heading2}>Our stickers</Text>
            {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price.toString()}
              image={product.image}
              onPress={() =>
                navigation.navigate('Details',product)}
            />
          ))}
            <StatusBar style="auto" />
          </View>
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
      }
    });
    
    export default HomeScreen;