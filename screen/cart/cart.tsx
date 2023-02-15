import { CartType } from "./interface"
import { SafeAreaView,ScrollView,StyleSheet,Text,View
 } from "react-native"
import { useSelector } from "react-redux"
import ProductsCart from "../../src/components/productCart"
import { useMemo, useState } from "react"
 const Cart:React.FC<CartType>=({
 navigation
 })=>{
  const dataCart=useSelector((state:any)=>state.Cart.cart)
  const [choiseProduct,setChoiseProduct]=useState<any>([])
  const calculateTotal=useMemo(()=>{
     let sum=0;
     dataCart.forEach((element:any) => {
      sum += element.quantity * element.price
     });
     return sum
  },[dataCart])
  return (
    <SafeAreaView>
      {/* <Text style={styles.sumProduct}>Item : {dataCart.length}</Text> */}
      <ScrollView>
    <SafeAreaView style={{flexDirection:"column",gap:10,marginTop:10,paddingBottom:30,paddingHorizontal:20}}>
    {dataCart.map((el:any,index:number)=>
    <ProductsCart chekbox={choiseProduct} items={el} key={index}/>  
    )}
    </SafeAreaView>
    <View style={{flexDirection:"row",alignItems:"center",alignSelf:"flex-end",paddingHorizontal:20}}>
    <Text style={styles.sumPrice}>Total : </Text>
    <Text style={styles.price}>${calculateTotal}</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
 }
 const styles=StyleSheet.create({
  sumPrice:{
      fontSize:25,
      fontWeight:"700"
  },
  sumProduct:{
      fontSize:18,
      paddingHorizontal:20,
      marginTop:10
  },
  price:{
    fontSize:20,
    fontWeight:"600"
  }
 })
 export default Cart