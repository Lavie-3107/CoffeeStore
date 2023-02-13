import {ModalType} from "./interface"
import { SafeAreaView,View,Text, StyleSheet } from "react-native"
import Button from "../button/button"
const Modal:React.FC<ModalType>=({
  title,
  description,
  type,
  handelCancel,
  handelOk
})=>{
  return(
     <SafeAreaView style={styles.wrapModal}>
      <View style={styles.opacity}></View>
      <View style={styles.wrapContentModal}>
        <Text style={styles.titleModal}>{title}</Text>
        <Text style={styles.descriptionModal}>{description}</Text>
        <View style={styles.wrapButton}>
        {type !== "modalNoti" && <Button title="Cancel" classesButton={styles.btnCancel} classLable={styles.lableBtnCancel} onpress={handelCancel}/>}
        <Button title="Ok" classLable={styles.lableBtnOk} classesButton={styles.btnOk} onpress={handelOk}/>
        </View>
      </View>
     </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapModal:{
    height:"100%",
    width:"100%",
    zIndex:6,
    position:"absolute",
    top:0,
    flexDirection:"column",
    justifyContent:"center",
  },
  opacity:{
    height:"100%",
    width:"100%",
    backgroundColor:"#999999",
    opacity:0.4
  },
  wrapContentModal:{
    width:"90%",
    alignSelf:"center",
    paddingHorizontal:15,
    backgroundColor:"#363636",
    position:"absolute",
    borderRadius:4,
    paddingVertical:15
  },
  titleModal:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 22,
    textAlign: "center",
    color: "#ffffff",
    borderBottomWidth:1,
    borderBottomColor:"#ffffff",
    paddingBottom:15
  },
  descriptionModal:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#ffffff",
    marginTop:20
  },
  wrapButton:{
     flexDirection:"row",
     alignSelf:"center",
     gap:10,
     marginTop:20
  },
  btnCancel:{
    paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: "#55847A",
          width: 120,
          borderRadius: 5,
  },
  lableBtnCancel:{
    fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
  },
  btnOk:{
    paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: "#F4A460",
          width: 120,
          borderRadius: 5,
  },
  lableBtnOk:{
    fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
  }
})
export default Modal