import { StyleSheet } from 'react-native';
export const styles=StyleSheet.create({
  wrapItemWishlist:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius:15,
    paddingHorizontal:11,
    paddingVertical:20,
    backgroundColor:"#ffffff",
    flex:1
  },
  checkbox:{
    height:30,
    width:30,
    borderColor:"#967259",
    borderWidth:1,
    borderRadius:30,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  active:{
    backgroundColor:"#967259",
  },
  nameProduct:{
    width:"100%",
    fontFamily:"SF Pro Text",
    fontStyle:"normal",
    fontWeight:"500",
    fontSize:16,
    lineHeight:22,
    color:"#000000",
    flexWrap:"wrap",
    paddingBottom:7,
    textTransform:'capitalize'
  },
  priceProduct:{
    fontFamily:"SF Pro Text",
    fontStyle:"normal",
    fontWeight:"700",
    fontSize:16,
    lineHeight:22,
    color:"#000000",
    alignSelf:"flex-end"
    
  }
})
