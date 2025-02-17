import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const ProductCard = () => {
    return (
        <View style={styles.card}>
            <Image 
                source={require("../images/bunnyHop.png")}
                style={styles.image}
            />
            <Text style={styles.title}>Bunny Hop</Text>
            <Text style={styles.description}>A cute hopping bunny</Text>
            <Button title="Buy" color="#FC55BE"/>
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
});

export default ProductCard;