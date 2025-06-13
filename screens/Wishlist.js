import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, image } from 'react-native';

const Wishlist = ({ route }) => {
  const { products = [], wishlist = [] } = route.params || {};

const favoriteProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading2}>My Favorite Stickers</Text>
      {favoriteProducts.length === 0 ? (
        <Text style={styles.noFavorites}>No favorites yet!</Text>
      ) : (
        favoriteProducts.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subheading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  heading2: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 12,
  },
  noFavorites: {
    fontSize: 16,
    color: '#aaa',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    color: '#FC55BE',
    fontWeight: 'bold',
  },
});

 export default Wishlist;