import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, image } from 'react-native';

const ContactScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Contact us!</Text>
          <Text style={styles.intro}>We would love to answer any questions you have, and are open to receiving feedback!</Text>
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

export default ContactScreen;