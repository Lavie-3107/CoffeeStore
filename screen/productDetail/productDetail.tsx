import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TypeProductDetail } from "./interface"
import Icon from 'react-native-vector-icons/Ionicons'
import Iconn from 'react-native-vector-icons/AntDesign'
const ProductDetail:React.FC<TypeProductDetail>=({

})=>{
  return(
    <SafeAreaView>
      <View style={{position:"relative"}}>
        <Image source={{uri:"https://vcdn1-dulich.vnecdn.net/2021/09/10/caphe-3391-1631291456.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=hBCk64sCNamz5Ha8DDig0Q"}} style={{height:400,width:"100%",resizeMode:"cover",borderRadius:40}}/>
        <View style={styles.wrapinfoProduct}>
          <View style={styles.backGroundBlur} />
          <View>
            
          </View>
          <View style={{zIndex:5,paddingHorizontal:27,paddingVertical:25}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>

              <View>
                <Text style={styles.textName}>Espresso</Text>
                <Text style={styles.textSubname}>with chocolate</Text>
              </View>
              
              <View>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                <Icon name="water" size={25} color="#ffffff"/>
                  <Text style={ styles.ingredient}>Coffee</Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection:"row",gap:5,marginTop:21}}>
               <Iconn name="star" color="#D17842" size={16} />
                <Text style={ styles.numberStar}>4.6</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapinfoProduct: {
    width:"100%",
    position:"absolute",
    bottom:0,
    zIndex:3,
  },
  backGroundBlur: {
    backgroundColor: "#333333",
    width: "100%",
    zIndex: 5,
    height: "100%",
    position: "absolute",
    bottom: 0,
    opacity: 0.8,
    borderRadius:40
  },
  textName: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 24,
    color:"#ffffff"
  },
  textSubname: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    color:"#ffffff"
  },
  ingredient: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    color:"#ffffff"
  },
  numberStar: {
     fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#ffffff"
  }
})
export default ProductDetail