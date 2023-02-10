import { SafeAreaView, StyleSheet, Text, View } from "react-native"

type Interface={
  price:any
}
const PriceProduct:React.FC<Interface>=({
 price
})=>{
  return (
    <SafeAreaView>
    <Text style={styles.textChoice}>Price</Text>
    <View style={{flexDirection:"row",gap:5,marginTop:5}}>
    <Text style={{color:"#967259",fontSize:16,lineHeight:18}}>$</Text>
    <Text style={styles.textChoice}>{price}</Text>
    </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  textChoice:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#000000",
  },
})
export default PriceProduct