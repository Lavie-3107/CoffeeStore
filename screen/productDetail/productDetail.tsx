import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TypeProductDetail } from "./interface"
import Icon from 'react-native-vector-icons/Ionicons'
import Iconn from 'react-native-vector-icons/AntDesign'
import Button from "../../src/components/button/button"
import WishList from "../../src/components/wishList/wistList"
const ProductDetail:React.FC<TypeProductDetail>=({

})=>{
  const chooseIngredient=[
    {
      name:"White Chocolate",
      value:1
    },
    {
      name:"Milk Chocolate",
      value:2
    },
    {
      name:"Dark Chocolate",
      value:3
    }
  ]
  const chooseSize=[
    {
      name:"S"
    },
    {
      name:"M"
    },
    {
      name:"L"
    },
  ]
  return(
    <SafeAreaView>
      <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:13}}>
        <Image source={{uri:"https://vcdn1-dulich.vnecdn.net/2021/09/10/caphe-3391-1631291456.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=hBCk64sCNamz5Ha8DDig0Q"}} style={{height:411,width:"100%",resizeMode:"cover",borderRadius:40}}/>
        <View style={styles.wrapinfoProduct}>
          <View>
       
          </View>
          <View style={{zIndex:5,paddingVertical:25}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>

              <View>
                <Text style={styles.textName}>Espresso</Text>
                <View style={{flexDirection:"row",gap:20,alignItems:"center"}}>
                <Text style={styles.textSubname}>with chocolate</Text>
                <View style={{flexDirection:"row",gap:5}}>
               <Iconn name="star" color="#D17842" size={16} />
                <Text style={ styles.numberStar}>4.6</Text>
            </View>
                </View>
              </View>
              
                <WishList/>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
              <Text style={styles.textIngredient}>Ingredient:</Text>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                <Icon name="water" size={25} color="#000000"/>
                  <Text style={ styles.ingredient}>Coffee</Text>
                </View>
              </View>
              <Text style={styles.descriptionPro}>
              A single espresso shot poured into hot foamy milk, with the surface topped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup
              </Text>
              
              <View style={{marginTop:25}}>
                <Text style={styles.textChoice}>Choice of Chocolate</Text>
               <FlatList
               contentContainerStyle={{gap:10,marginTop:15}}
               showsHorizontalScrollIndicator={false}
                data={chooseIngredient}
                horizontal={true} 
                renderItem={({item})=>{
                return <TouchableOpacity style={styles.chooseIngredient} key={item.value}>
                <Text style={styles.chooseIngredientText}>{item.name}</Text>
               </TouchableOpacity>
               }}/>
              </View>

              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{marginTop:25}}>
                  <Text style={styles.textChoice}>Size</Text>
                  <FlatList
               contentContainerStyle={{gap:10,marginTop:15}}
               showsHorizontalScrollIndicator={false}
                data={chooseSize}
                horizontal={true} 
                renderItem={({item})=>{
                return <TouchableOpacity style={styles.chooseSize} key={item.name}>
                <Text style={styles.chooseIngredientText}>{item.name}</Text>
               </TouchableOpacity>
               }}/>

                </View>
                <View style={{marginTop:25}}>
                  <Text style={styles.textQuantity}>Quantity</Text>
                  <View style={{flexDirection:"row",alignItems:"center",gap:27,marginTop:15}}>
                    <TouchableOpacity style={{height:35,width:35,borderRadius:50,backgroundColor:"#967259",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <Icon name="add" size={20} color="#ffffff"/>
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity style={{height:35,width:35,borderRadius:50,backgroundColor:"#967259",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <Icon name="remove" size={20} color="#ffffff"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25}}>
                <View>
                   <Text style={styles.textChoice}>Price</Text>
                   <View style={{flexDirection:"row",gap:5,marginTop:5}}>
                   <Text style={{color:"#967259",fontSize:16,lineHeight:18}}>$</Text>
                   <Text style={styles.textChoice}>4.25</Text>
                   </View>
                </View>
                <Button classesButton={styles.btnBuyNow} classLable={styles.lablebtnBuyNow} title="Add to cart"/>
              </View>


          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapinfoProduct: {
    width:"100%",
  },
  textName: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 24,
    color:"#000000",
    marginBottom:8
  },
  textSubname: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#000000",
  },
  textIngredient:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#000000",
  },
  ingredient: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    color:"#000000"
  },
  numberStar: {
     fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#000000"
  },
  descriptionPro:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    color:"#000000",
    marginTop:8
  },
  chooseIngredient:{
    paddingHorizontal:12,
    paddingVertical:5,
    borderWidth:1,
    borderRadius:100,
    borderColor:"#967259"
  },
  textChoice:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#000000",
  },
  chooseIngredientText:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 22,
    color:"#777777",
  },
  chooseSize:{
    height:35,
    width:35,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor:"#D9D9D9"
  },
  textQuantity:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color:"#000000",
    alignSelf:"center"
  },
  btnBuyNow:{
    paddingHorizontal:46,
    paddingVertical:14,
    backgroundColor:"#967259",
    maxWidth:190,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100
  },
  lablebtnBuyNow:{
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color:"#FFFFFF",
  }
})
export default ProductDetail