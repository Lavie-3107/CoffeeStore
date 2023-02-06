import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../../screen/home/homeScreen';
import Cart from '../../../../screen/cart/cart';
import WishList from "../../../../screen/wishList/wishList"
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
export default function TabBottom() {
  const Tab = createBottomTabNavigator();
  return (
   <NavigationContainer>
     <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarInactiveTintColor:"#967259",
        tabBarActiveTintColor:"#8FBC8F",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
   </NavigationContainer>
  )
}
