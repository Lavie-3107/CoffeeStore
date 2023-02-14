import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../../screen/home/homeScreen';
import Cart from '../../../../screen/cart/cart';
import WishList from "../../../../screen/wishList/wishList"
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
import StackNavigation from '../stackNavigation/HomeNavigation/stackNavigation';
import WishlistNavigation from '../stackNavigation/wishlistNavigation/wishlistNavigation';
import CartNavigation from '../stackNavigation/cartNavigation/cartNavigation';
export default function TabBottom() {
  const Tab = createBottomTabNavigator();
  return (
   <NavigationContainer>
     <Tab.Navigator
      initialRouteName="StackNavigation"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarInactiveTintColor:"#967259",
        tabBarActiveTintColor: "#8FBC8F",
        tabBarHideOnKeyboard:true
      }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
        tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishlistNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigation}
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
