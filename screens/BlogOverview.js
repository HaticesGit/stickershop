import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import BlogCard from '../components/blogCard';
import { StatusBar } from 'expo-status-bar';

const BlogOverview = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://api.webflow.com/v2/collections/67bcbd8c6a3689f1d8664016/items', {
      headers: {
        Authorization:
          'Bearer fd36ac8098bf610c135f3a51ba5645043d5183f55118a3fa8d649575ed5081ef',
      },
    })
    .then((res) => res.json())
    .then((data) => {
      setBlogs(
        data.items.map((item) => ({
          id: item.id,
          title: item.fieldData.name,
          subtitle: item.fieldData.intro,
          image: { uri: item.fieldData["thumbnail-image"]?.url },
          text: item.fieldData.text,
        }))
      );
    })
    .catch(console.error);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>All Blogs</Text>
      <View style={styles.row}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            intro={blog.subtitle}
            image={blog.image}
            onPress={() => navigation.navigate('BlogDetail', { blog })}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'column',
    gap: 12,
  },
});

export default BlogOverview;
