import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, image } from 'react-native';

const BlogDetail = ({ route }) => {
    const { blog } = route.params;
    const { title, intro, text, image } = blog;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.intro}>{intro}</Text>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text}>{text}</Text>
    </ScrollView>
  );
}

    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      heading2: {
        fontSize: 20,
        marginBottom: 8,
        width: 300,
      },
      price: {
        fontSize: 20,
        color: '#FC55BE',
      },
      quantityContainer: {
        flexDirection: 'row',
        marginVertical: 16,
      },
      button: {
        backgroundColor: '#FC55BE',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        margin: 4,
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 8,
      },
      text: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'justify',
      },
    });
 export default BlogDetail;