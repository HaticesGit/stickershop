import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const blogCard = ({ title, intro, text, image, onPress}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{intro}</Text>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View blog</Text>
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
});

export default blogCard;