import { WishListType } from "./interface"
import { SafeAreaView,Text,View,TouchableHighlight, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions} from "react-native"
import { useEffect, useState } from 'react';
import ProductsWishlist from "../../src/components/productWishlist";
import { useSelector,useDispatch } from "react-redux";
import { useMemo } from 'react';
import { pushDataProductsDetail } from "../../redux/productsDetail/productsDetailSlice";
import Modal from "../../src/components/modal/modal";
import Icon from 'react-native-vector-icons/AntDesign'
import {handleRemoveMulti} from "../../redux/wishList/wishListSlice"
 const WishList:React.FC<WishListType>=({
  navigation
 })=>{
  let ScreenHeight = Dimensions.get("window").height - 160;
   const dispatch=useDispatch()
   const dataWishlist=useSelector((state:any)=>state.WishList.wishList)
   const [choiseProduct,setChoiseProduct]=useState<any>([])
   const [showModal,setShowModal]=useState<boolean>(false)
   const [showModalNoti,setShowModalNoti]=useState<boolean>(false)
   const handleRedirectProDetaill = (items:any) => {
    dispatch(pushDataProductsDetail(items))
    navigation.navigate("ProductDetail")
  }
   const handleCheckbox=(id:string)=>{
    const index = choiseProduct.findIndex((el:any)=>el === id) 
      if(index >= 0){
        setChoiseProduct(choiseProduct.filter((el:any)=>el !== id))
      }else{
        const newchoiseProduct=[...choiseProduct,id]
        setChoiseProduct(newchoiseProduct)
      }
   }
   const showModalDelete=()=>{
      if(choiseProduct.length < 1){
        setShowModalNoti(true)
      }else{
        setShowModal(true)
      }
   }
   const handleRemoveWishlist = () => {
     dispatch(handleRemoveMulti(choiseProduct))
     setShowModal(false)
     setChoiseProduct([])
   }
   const renderProductsWishlist = useMemo(() => {
     if(dataWishlist.length > 0){
     return(
      <FlatList
      contentContainerStyle={{ flexDirection: "column",gap:10,marginTop:19,paddingBottom:30,paddingHorizontal:20}}
      data={dataWishlist}
      renderItem={({item,index})=>{
          return <ProductsWishlist chekbox={choiseProduct} handleCheckbox={handleCheckbox} handleRedirectProDetail={handleRedirectProDetaill} items={item} key={index}/>
      }}
      >
      </FlatList>
     )
     }else{
      return  <SafeAreaView style={{height:ScreenHeight,flexDirection:"column",justifyContent:"center",alignItems:"center",paddingHorizontal:20,alignSelf:"center"}}>
                <Text style={{textAlign:"center",fontWeight:"700",fontSize:20,lineHeight:26}}>Chưa có sản phẩm nào trong danh sách yêu thích vui lòng thêm sản phẩm yêu thích</Text>
              </SafeAreaView>
     }
   },[dataWishlist,choiseProduct])
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
    <SafeAreaView style={styles.wrapWishlistScreen}>
      <Text style={styles.textSumItem}>Item({dataWishlist.length})</Text>
      <ScrollView>
      {renderProductsWishlist}
      </ScrollView>
      {showModal && <Modal title="Bạn có chắc muốn xóa sản phẩm chứ" description="Những sản phẩm mà bạn tích chọn sẽ được xóa" handelCancel={()=>setShowModal(false)} handelOk={handleRemoveWishlist}/>}
      {showModalNoti && <Modal title="Tích chọn vào sản phẩm" description="Chưa có sản phẩm nào được tích chọn vui lòng tích chọn sản phẩm" handelOk={()=>setShowModalNoti(false)} type="modalNoti"/>}
  </SafeAreaView>
  )
 }
 const styles=StyleSheet.create({
  wrapWishlistScreen:{
    paddingTop:10,
    minHeight:"100%"
  },
  textSumItem:{
    fontFamily:"SF Pro Text",
    fontStyle:"normal",
    fontWeight:"600",
    fontSize:16,
    lineHeight:22,
    color:"#000000",
    paddingHorizontal:20
  },
 }) 
 export default WishList