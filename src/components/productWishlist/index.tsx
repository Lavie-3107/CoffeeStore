import { ProductsWishlistType } from "./interface"
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {styles} from "./styles"
const ProductsWishlist:React.FC<ProductsWishlistType>=({
   items,
   handleCheckbox,
   chekbox,
   handleRedirectProDetail
})=>{
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
              <Icon name="heart" size={20} color="#C94C4C"/>
            </View>
            <View style={{flexDirection:"row",alignItems: "center",gap: 5}}>
            <Icon name="star" color="#D17842" size={16} />
            <Text>{items.vote}</Text>             
            </View>
            <Text style={styles.priceProduct}>US ${items.price}</Text>
           </View>
        </SafeAreaView>
  )
}
export default ProductsWishlist