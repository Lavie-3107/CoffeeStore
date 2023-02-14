import { ProductsWishlistType } from "./interface"
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {styles} from "./styles"
import { renderIce,renderSugar } from "../../../screen/cart/functionHelper/functionHelper";
import Quantity from "../quantity/quantity";
import {useEffect, useState} from "react"
import { plusQuantity } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
const ProductsCart:React.FC<ProductsWishlistType>=({
   items,
   handleCheckbox,
   chekbox,
   handleRedirectProDetail
})=>{
  const [quantity,setQuantity]=useState<number>(items.quantity)
  const dispatch = useDispatch()
  const handleMinusQuantity=()=>{
    dispatch(plusQuantity(items))
  }
  const handlePlusQuantity=()=>{
    dispatch(plusQuantity(items))
  }
  return(
    <SafeAreaView style={styles.wrapItemWishlist}>
           <TouchableOpacity onPress={()=>handleCheckbox(items.id)} style={{height:"100%",flexDirection:"column",justifyContent:"center"}}>
           <View style={[styles.checkbox,chekbox.includes(items.id) && styles.active]}>
           <Icon name="check" size={19} color="#ffffff"/>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>handleRedirectProDetail(items)}>
           <Image source={{uri:`${items.url}`}} style={{height:80,width:80,resizeMode:"cover",marginLeft:10}}/>
           </TouchableOpacity>
           <View style={{flex:1}}>
            <View style={{flexDirection:"row",gap:15,width:"100%",justifyContent:"space-between"}}>
              <TouchableOpacity onPress={()=>handleRedirectProDetail(items)}>
              <Text style={styles.nameProduct}>{`${items.name} ${items.subname}`}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",gap:5,marginBottom:5}}>
              {items.size && <Text>Size {items.size} ,</Text>}
              {items.chooseIce && <Text>Ice {renderIce(items.chooseIce)} ,</Text>}
              {items.chooseSugar && <Text>Sugar {renderSugar(items.chooseSugar)} </Text>}
            </View>
            <View>
            <Text style={styles.priceProduct}>US ${items.price}</Text>
            <Quantity quantity={quantity} handleMinus={handleMinusQuantity} handlePlus={handlePlusQuantity}/>
            </View>
           </View>
        </SafeAreaView>
  )
}
export default ProductsCart