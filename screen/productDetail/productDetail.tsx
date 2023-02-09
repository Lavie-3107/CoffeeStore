import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TypeProductDetail } from "./interface"
import Iconn from 'react-native-vector-icons/AntDesign'
import Button from "../../src/components/button/button"
import WishList from "../../src/components/wishList/wistList"
import Ingredient from "../../src/components/ingredient/ingredient"
import ChoosenIngredient from "../../src/components/choosenIngredient"
import ChoosenSize from "../../src/components/choosenSize"
import Quantity from "../../src/components/quantity/quantity"
import PriceProduct from '../../src/components/priceProduct/index';
import {styles} from "./styles"
import { useEffect, useState } from "react"
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
  const [chooseIngredien,setchooseIngredien]=useState<number>(0)
  const [size,setSize]=useState<string>("")
  const [quantity,setQuantity]=useState<number>(1)
  const [price,setPrice]=useState()
  const handlePlusQuantity=()=>{
   setQuantity(quantity+1)
  }
  const handleMinusQuantity=()=>{
    setQuantity(quantity-1)
  }
  const handleChooseSize=(name:string)=>{
    setSize(name)
  }
  const handlechoosenIngredient=(value:number)=>{
    setchooseIngredien(value)
  }
  // useEffect(()=>{
  //   setPrice()
  // },[quantity])
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
                 <Ingredient title="Coffee"/>
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
                return <ChoosenIngredient name={item.name} value={item.value} choosenIngredient={chooseIngredien} handlechoosenIngredient={handlechoosenIngredient}/>
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
                      return <ChoosenSize name={item.name} handleChooseSize={handleChooseSize} chooseSize={size}/>
               }}/>
                </View>
                <View style={{marginTop:25}}>
                  <Text style={styles.textQuantity}>Quantity</Text>
                   <Quantity quantity={quantity} handlePlus={handlePlusQuantity} handleMinus={handleMinusQuantity}/>
                </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25}}>
                <PriceProduct price={4.56}/>
                <Button classesButton={styles.btnBuyNow} classLable={styles.lablebtnBuyNow} title="Add to cart"/>
              </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetail