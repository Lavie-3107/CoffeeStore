import { StyleSheet, Text, TouchableOpacity } from "react-native"
type Interface={
  name:string,
  value:number,
  choosenIngredient:number,
  handlechoosenIngredient:any
}
const ChoosenIngredient:React.FC<Interface>=({
    name,
    value,
    choosenIngredient,
    handlechoosenIngredient
})=>{
  return(
        <TouchableOpacity style={[styles.chooseIngredient,choosenIngredient === value && styles.active]} key={value} onPress={()=>handlechoosenIngredient(value)}>
          <Text style={[styles.chooseIngredientText,choosenIngredient === value && styles.textactive]}>{name}</Text>
        </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  chooseIngredient:{
    paddingHorizontal:12,
    paddingVertical:5,
    borderWidth:1,
    borderRadius:100,
    borderColor:"#967259"
  },
  chooseIngredientText:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 22,
    color:"#777777",
  },
  active:{
    backgroundColor:"#967259"
  },
  textactive:{
    color:"#ffffff"
  }
})
export default ChoosenIngredient