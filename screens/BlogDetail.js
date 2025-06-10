import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, image } from 'react-native';

const BlogDetail = ({ route }) => {
    const { blog } = route.params;
    const { title, intro, text, image } = blog;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.intro}>{intro}</Text>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text}>{text}</Text>
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        marginBottom: 8,
        width: 300,
      },
      price: {
        fontSize: 20,
        color: '#FC55BE',
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        width: 300,
        height: 300,
        borderRadius: 8,
      },
    });
 export default BlogDetail;