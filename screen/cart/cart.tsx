import { CartType } from "./interface"
import { SafeAreaView,Text,View
 } from "react-native"
import { useSelector } from "react-redux"
import ProductsCart from "../../src/components/productCart"
import { useState } from "react"
 const Cart:React.FC<CartType>=({

 })=>{
  const dataCart=useSelector((state:any)=>state.Cart.cart)
  const [choiseProduct,setChoiseProduct]=useState<any>([])
  console.log("🚀 ~ file: cart.tsx:9 ~ dataCart", dataCart)
  return (
    <>
    {dataCart.map((el:any,index:number)=>
    <ProductsCart chekbox={choiseProduct} items={el}/>  
    )}
    </>
  )
 }
 export default Cart