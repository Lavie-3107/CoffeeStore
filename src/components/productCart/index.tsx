import { ProductsWishlistType } from "./interface"
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {styles} from "./styles"
import { renderIce,renderSugar } from "../../../screen/cart/functionHelper/functionHelper";
import Quantity from "../quantity/quantity";
import {useEffect, useMemo, useState} from "react"
import { minusQuantity, plusQuantity } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
const ProductsCart:React.FC<ProductsWishlistType>=({
   items,
   handleCheckbox,
   chekbox,
   handleRedirectProDetail
})=>{
  const dispatch = useDispatch()
  const handleMinusQuantity=()=>{
    dispatch(minusQuantity(items))
  }
  const handlePlusQuantity=()=>{
    dispatch(plusQuantity(items))
  }
  const renderCheckbox=useMemo(()=>{
    const index=chekbox.findIndex((el:any)=>el.id === items.id && el.size === items.size && el.chooseIce === items.chooseIce && el.chooseSugar === items.chooseSugar)
    if(index >= 0){
      return true
    }else{
      return false
    }
  },[chekbox])
  return(
    <SafeAreaView style={styles.wrapItemWishlist}>
           <TouchableOpacity onPress={()=>handleCheckbox(items)} style={{height:"100%",flexDirection:"column",justifyContent:"center"}}>
           <View style={[styles.checkbox,renderCheckbox && styles.active]}>
           <Icon name="check" size={19} color="#ffffff"/>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>handleRedirectProDetail(items)}>
           <Image source={{uri:`${items.items.url}`}} style={{height:80,width:80,resizeMode:"cover",marginLeft:10}}/>
           </TouchableOpacity>
           <View style={{flex:1}}>
            <View style={{flexDirection:"row",gap:15,width:"100%",justifyContent:"space-between"}}>
              <TouchableOpacity onPress={()=>handleRedirectProDetail(items)}>
              <Text style={styles.nameProduct}>{`${items.items.name} ${items.items.subname}`}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",gap:5,marginBottom:5}}>
              <Text>{items.size !== "" && <Text>Size {items.size} ,</Text>}</Text>
              <Text>{items.chooseIce !== 0 && <Text>Ice {renderIce(items.chooseIce)} ,</Text>}</Text>
              <Text>{items.chooseSugar !==0 && <Text>Sugar {renderSugar(items.chooseSugar)} </Text>}</Text>
            </View>
            <View>
            <Text style={styles.priceProduct}>US ${items.items.price * items.quantity}</Text>
            <Quantity quantity={items.quantity} handleMinus={handleMinusQuantity} handlePlus={handlePlusQuantity}/>
            </View>
           </View>
        </SafeAreaView>
  )
}
export default ProductsCart