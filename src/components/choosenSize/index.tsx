import { StyleSheet, Text, TouchableOpacity } from "react-native"
type Interface={
  name:string,
  handleChooseSize:any,
  chooseSize:string
}
const ChoosenSize:React.FC<Interface>=({
    name,
    handleChooseSize,
    chooseSize
})=>{
  return(
    <TouchableOpacity style={[styles.chooseSize,chooseSize === name && styles.active ]} key={name} onPress={()=>handleChooseSize(name)}>
    <Text style={[styles.chooseIngredientText,chooseSize === name && styles.activeText ]}>{name}</Text>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  chooseSize:{
    height:35,
    width:35,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor:"#D9D9D9"
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
  activeText:{
    color:"#ffffff"
  }
})
export default ChoosenSize