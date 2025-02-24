import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const ProductDetail = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Welcome to the details</Text>
          <Text>Bunny Hop</Text>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
    export default ProductDetail;