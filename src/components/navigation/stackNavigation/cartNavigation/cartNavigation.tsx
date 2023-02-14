import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import ProductDetail from '../../../../../screen/productDetail/productDetail';
import Cart from "../../../../../screen/cart/cart";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
export default function CartNavigation({navigation}:any) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Cart">
    <Stack.Screen name="Cart" component={Cart}
     options={({navigation,route})=>({
      headerTitle:"Cart",
      headerTitleAlign:"center",
      headerLeft: () => (
         <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={28} color="#000000"/>
         </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity >
         <Icon name="delete" size={28} color="#000000"/>
        </TouchableOpacity>
     ),
     })} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
        headerTitle:""
    }} />
</Stack.Navigator>
  )
}
