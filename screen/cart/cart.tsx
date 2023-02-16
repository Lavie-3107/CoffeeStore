import { CartType } from "./interface"
import { SafeAreaView,ScrollView,StyleSheet,Text,TouchableOpacity,View
 } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import ProductsCart from "../../src/components/productCart"
import { useEffect, useMemo, useState } from "react"
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from '../../src/components/modal/modal';
import { removeProductOnCart } from "../../redux/cart/cartSlice"
import { pushDataProductsDetail } from "../../redux/productsDetail/productsDetailSlice"
 const Cart:React.FC<CartType>=({
 navigation
 })=>{
  const dataCart=useSelector((state:any)=>state.Cart.cart)
  console.log("🚀 ~ file: cart.tsx:15 ~ dataCart", dataCart)
  const [choiseProduct,setChoiseProduct]=useState<any>([])
  console.log("🚀 ~ file: cart.tsx:16 ~ choiseProduct", choiseProduct)
  const [showModal,setShowModal]=useState<boolean>(false)
  const [showModalNoti,setShowModalNoti]=useState<boolean>(false)
  const dispatch = useDispatch()
  const calculateTotal=useMemo(()=>{
     let sum=0;
     dataCart.forEach((element:any) => {
      sum += element.quantity * element.items.price
     });
     return sum
  },[dataCart])
  const showModalDelete=()=>{
    if(choiseProduct.length < 1){
      setShowModalNoti(true)
    }else{
      setShowModal(true)
    }
 }
 const handleRemoveCart = () => {
  dispatch(removeProductOnCart(choiseProduct))
  setShowModal(false)
  setChoiseProduct([])
}
const handleRedirectProDetaill = (items:any) => {
  dispatch(pushDataProductsDetail(items.items)) 
  navigation.navigate("ProductDetail")
}
const handleCheckbox=(items:any)=>{
  console.log(items);
  console.log(choiseProduct);
  
  const index = choiseProduct.findIndex((el:any)=>el.items.id === items.items.id && el.size === items.size && el.chooseIce === items.chooseIce && el.chooseSugar === items.chooseSugar) 
    if(index >= 0){
      setChoiseProduct(choiseProduct.splice(index,1))
    }else{
      const newchoiseProduct=[...choiseProduct,items]
      setChoiseProduct(newchoiseProduct)
    }
 }
  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={()=>showModalDelete()}>
         <Icon name="delete" size={28} color="#000000"/>
        </TouchableOpacity>
      ),
    });
  }, [navigation,choiseProduct]);
  return (
    <SafeAreaView>
     <SafeAreaView style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={styles.sumProduct}>Item : {dataCart.length}</Text>
      <View style={{flexDirection:"row",alignItems:"center",alignSelf:"flex-end",paddingHorizontal:20}}>
    <Text style={styles.sumPrice}>Total : </Text>
    <Text style={styles.price}>${calculateTotal}</Text>
    </View>
     </SafeAreaView>
      <ScrollView>
    <SafeAreaView style={{flexDirection:"column",gap:10,marginTop:10,paddingBottom:50,paddingHorizontal:20}}>
    {dataCart.map((el:any,index:number)=>
    <ProductsCart chekbox={choiseProduct} items={el} key={index} handleRedirectProDetail={handleRedirectProDetaill} handleCheckbox={handleCheckbox}/>  
    )}
    </SafeAreaView>
    </ScrollView>
    {showModal && <Modal title="Bạn có chắc muốn xóa sản phẩm chứ" description="Những sản phẩm mà bạn tích chọn sẽ được xóa" handelCancel={()=>setShowModal(false)} handelOk={handleRemoveCart}/>}
      {showModalNoti && <Modal title="Tích chọn vào sản phẩm" description="Chưa có sản phẩm nào được tích chọn vui lòng tích chọn sản phẩm" handelOk={()=>setShowModalNoti(false)} type="modalNoti"/>}
    </SafeAreaView>
  )
 }
 const styles=StyleSheet.create({
  sumPrice:{
      fontSize:20,
      fontWeight:"700"
  },
  sumProduct:{
      fontSize:18,
      paddingHorizontal:20,
      marginTop:10,
      fontWeight:"600"
  },
  price:{
    fontSize:20,
    fontWeight:"600"
  }
 })
 export default Cart