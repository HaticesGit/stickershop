import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from '../components/productCard.js';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text>Welcome to Hati's Sticker Shop!</Text>
          <Image source={{
              uri: 'https://ih1.redbubble.net/image.4082778939.3621/st,small,507x507-pad,600x600,f8f8f8.jpg'
          }}
          style={{ width: 50, height: 50 }}
          />
    
    
          <TouchableOpacity
          style = {styles.button}
            onPress = {() => navigation.navigate('Details')}
          ><Text>Buy</Text>
        </TouchableOpacity>

          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
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
    });
    
    export default HomeScreen;