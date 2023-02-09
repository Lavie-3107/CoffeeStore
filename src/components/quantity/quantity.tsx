import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
type Interface={
   quantity:number,
   handlePlus:any,
   handleMinus:any
}
const Quantity:React.FC<Interface>=({
   quantity,
   handlePlus,
   handleMinus
})=>{
   return(
    <View style={{flexDirection:"row",alignItems:"center",gap:27,marginTop:15}}>
                    <TouchableOpacity style={styles.btnPlus} onPress={()=>handlePlus()}>
                      <Icon name="add" size={20} color="#ffffff"/>
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity style={[styles.btnMinus,quantity === 1 && styles.disabled]} onPress={()=>handleMinus()} disabled={quantity === 1 ?true : false}>
                      <Icon name="remove" size={20} color="#ffffff"/>
                    </TouchableOpacity>
                  </View>
   )
}
const styles=StyleSheet.create({
  btnPlus:{
    height:35,
    width:35,
    borderRadius:50,
    backgroundColor:"#967259",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  btnMinus:{
    height:35,
    width:35,
    borderRadius:50,
    backgroundColor:"#967259",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  disabled:{
    backgroundColor:"#D9D9D9"
  }
})
export default Quantity