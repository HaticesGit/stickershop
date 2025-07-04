import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen.js';
import ProductDetail from './screens/ProductDetail.js';
import BlogDetail from './screens/BlogDetail.js';
import ContactScreen from './screens/ContactScreen.js';
import Wishlist from './screens/Wishlist.js';
import ProductOverview from './screens/ProductOverview.js';
import BlogOverview from './screens/BlogOverview.js';
import ProfilePafe from './screens/ProfilePage.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FC55BE',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Contact') iconName = 'call-outline';
          else if (route.name === 'Stickers') iconName = 'happy-outline';
          else if (route.name === 'Blogs') iconName = 'book-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Stickers" component={ProductOverview} />
      <Tab.Screen name="Blogs" component={BlogOverview} />
      <Tab.Screen name="Profile" component={ProfilePafe} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs}/>
        <Stack.Screen name="Details" component={ProductDetail} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
