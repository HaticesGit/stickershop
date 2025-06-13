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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Contact') iconName = 'call-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
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
