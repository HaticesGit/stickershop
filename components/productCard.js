import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ title, subtitle, price, image, onPress, isInWishlist, onToggleWishlist}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onToggleWishlist} style={styles.wishlist}>
                <Ionicons
                    name={isInWishlist ? 'heart' : 'heart-outline'}
                    size={24}
                    color={isInWishlist ? 'red' : 'gray'}
                />
            </TouchableOpacity>

            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{subtitle}</Text>
            <Text style={styles.price}>${price}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View Product</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    button: {
        backgroundColor: '#FC55BE',
        padding: 8,
        borderRadius: 4,
        marginTop: 8,
        alignItems: 'center',
    },
    wishlist: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
});

export default ProductCard;