import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ProductCard from './components/productCard';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Welcome to Hati's Sticker Shop!</Text>
      <Image source={{
          uri: 'https://ih1.redbubble.net/image.4082778939.3621/st,small,507x507-pad,600x600,f8f8f8.jpg'
      }}
      style={{ width: 50, height: 50 }}
      />
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <StatusBar style="auto" />
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
