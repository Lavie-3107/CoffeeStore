import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  wrapInput: {
      position:"relative"
  },
  wrapAllContent: {
      marginTop: 35,
      paddingHorizontal:23
  },  
  wrapTitle: {
  },
  textTitle: {
      fontFamily: "SF Pro Text",
      fontStyle: "normal",
      fontWeight:"700",
      fontSize: 22,
      lineHeight: 32,
      color:"#444444"
  },
  warpInputFilter: {
      flexDirection: "row",
      gap: 11,
      marginTop: 25,
      alignItems: "center",
      justifyContent:"space-between"
  },
  stylesInput: {
      width: 290,
      height: 50,
      backgroundColor: "#ffffff",
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: 15,
      elevation: 2,
      paddingVertical: 18,
      paddingLeft: 32,
      paddingRight: 18,
      fontWeight: "700",
  },
  icon: {
      position: "absolute",
      top: 16,
      left:10
      
  },
  dropdown: {
      width: 50,
      height: 50,
      backgroundColor: "#967259",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius:30
  },
})