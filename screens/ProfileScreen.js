import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, image } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { products = [], wishlist = [] } = route.params || {};

const favoriteProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hatice</Text>
      <Text style={styles.subheading}>I love stickers</Text>

      <Text style={styles.sectionTitle}>My Favorite Stickers:</Text>
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 12,
  },
  noFavorites: {
    fontStyle: 'italic',
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

 export default ProfileScreen;