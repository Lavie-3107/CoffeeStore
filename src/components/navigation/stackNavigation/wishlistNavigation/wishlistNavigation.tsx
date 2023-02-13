import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import WishList from '../../../../../screen/wishList/wishList';
import ProductDetail from '../../../../../screen/productDetail/productDetail';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
export default function WishlistNavigation({navigation}:any) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Wishlist'>
    <Stack.Screen name="Wishlist" component={WishList}
     options={({navigation,route})=>({
      headerTitle:"Wishlist",
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
