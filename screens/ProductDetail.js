import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, image } from 'react-native';

const ProductDetail = ({ route }) => {
  const {title, subtitle, price, image} = route.params;
  const [quantity, setQuantity] =useState(1); 
  const [wishlist, setWishlist] = useState([]);
  const increaseQuantity = () => setQuantity(quantity + 1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Image style={styles.image} source={image}/>
          <Text style={styles.price}>${price}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>

            <Text style={styles.totalPrice}>Total: ${price * quantity}</Text>
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
      quantityText: {
        fontSize: 18,
        marginHorizontal: 50,
      },
    });
    
    export default ProductDetail;