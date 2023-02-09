import { View,SafeAreaView,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
type Interface={
  title:string
}
const Ingredient:React.FC<Interface>=({
   title
})=>{
  return(
                <SafeAreaView style={{flexDirection:"column",alignItems:"center"}}>
                <Icon name="water" size={25} color="#000000"/>
                  <Text style={ styles.ingredient}>{title}</Text>
                </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  ingredient:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    color:"#000000"
  }
})
export default Ingredient