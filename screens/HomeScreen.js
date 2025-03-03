import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from '../components/productCard.js';

import aintMyTime from "../images/Ain27t_My_Time_Spray.webp"
import jett from "../images/jett.webp"
import bunnyHop from "../images/bunnyHop.png"

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Hati's Sticker Shop!</Text>
        <Image source={{uri: 'https://ih1.redbubble.net/image.4082778939.3621/st,small,507x507-pad,600x600,f8f8f8.jpg'}} style={{ width: 50, height: 50 }}/>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.row}>
            <Text style={styles.heading2}>Our stickers</Text>
            <ProductCard
              title="Ain't My Time"
              subtitle="Brimstone is just a chill dude after all"
              price="3"
              image={aintMyTime}
              onPress={() =>
                navigation.navigate('Details', {
                  title: "Ain't My Time",
                  subtitle: "Brimstone is just a chill dude after all",
                  price: "3",
                  image: aintMyTime,
                })
              }
            />
            <ProductCard
              title="Embarassing!"
              subtitle="That shot was embarassing! Let's not talk about it, shall we..."
              price="3"
              image={jett}
              onPress={() =>
                navigation.navigate('Details', {
                  title: "Embarassing!",
                  subtitle: "That shot was embarassing! Let's not talk about it, shall we...",
                  price: "3",
                  image: jett,
                })
              }
            />

            <ProductCard
              title="Bunny hop"
              subtitle="A cute little  hopping bunny, now turned into a sticker!"
              price="3"
              image={bunnyHop}
              onPress={() =>
                navigation.navigate('Details', {
                  title: "Bunny hop",
                  subtitle: "A cute little  hopping bunny, now turned into a sticker!",
                  price: "3",
                  image: bunnyHop,
                })
              }
            />
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