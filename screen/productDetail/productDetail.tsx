import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TypeProductDetail } from "./interface"
import  Icon  from 'react-native-vector-icons/Ionicons'
const ProductDetail:React.FC<TypeProductDetail>=({

})=>{
  return(
    <SafeAreaView>
      <View style={{position:"relative"}}>
        <Image source={{uri:"https://img.meta.com.vn/Data/image/2019/07/31/capuchino-la-gi-cach-uong-capuchino-2.jpg"}} style={{height:400,width:"100%",resizeMode:"cover",borderRadius:40}}/>
        <View style={styles.wrapinfoProduct}>
          <View style={{backgroundColor:"#444444",width:"100%",zIndex:5}}/>
          <View style={{flexDirection:"row",width:"100%",backgroundColor:"#ffffff"}}>
            <View>
              <View>
                <Text>Espresso</Text>
                <Text>with chocolate</Text>
              </View>
              <View>
                <View>
                <Icon name="water" size={25} color="#ffffff"/>
                <Text>Coffee</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapinfoProduct:{
    position:"absolute",
    bottom:0,
    zIndex:3,
    backgroundColor:"#ffffff"
  }
})
export default ProductDetail