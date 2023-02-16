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
import { useEffect, useMemo, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { handleWishListSlice } from "../../redux/wishList/wishListSlice"
import { addToCart } from "../../redux/cart/cartSlice"
const ProductDetail:React.FC<TypeProductDetail>=({

})=>{
  const datachooseIce=[
    {
      name:"70% Ice",
      value:1
    },
    {
      name:"50% Ice",
      value:2
    },
    {
      name:"30% Ice",
      value:3
    }
  ]
  const datachooseSugar=[
    {
      name:"70% Sugar",
      value:1
    },
    {
      name:"50% Sugar",
      value:2
    },
    {
      name:"30% Sugar",
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
  const [chooseIce,setchooseIce]=useState<number>(0)
  const [chooseSugar,setchooseSugar]=useState<number>(0)
  const [size,setSize]=useState<string>("")
  const [quantity,setQuantity]=useState<number>(1)
  const [price, setPrice] = useState()
  const dispatch=useDispatch()
  const dataProductsDetail=useSelector((state:any)=>state.ProductsDetail.productsDetailSlice)
  const dataWishList=useSelector((state:any)=>state.WishList.wishList)
  const wishlist=useMemo(()=>{
     if(dataWishList.includes(dataProductsDetail)){
      return true
     }else{
      return false
     }
  },[dataWishList])
  const handlePlusQuantity=()=>{
   setQuantity(quantity+1)
  }
  const handleMinusQuantity=()=>{
    setQuantity(quantity-1)
  }
  const handleChooseSize=(name:string)=>{
    setSize(name)
  }
  const handlechoosenIce=(value:number)=>{
    setchooseIce(value)
  }
  const handlechoosenSugar=(value:number)=>{
    setchooseSugar(value)
  }
  const sumPrice=useMemo(()=>{
    let sum=0
    sum=quantity * dataProductsDetail.price
    return sum as any
   },[quantity])
  const handleWishList = () =>{
    dispatch(handleWishListSlice(dataProductsDetail))
  }
  const handleAddtoCart = () =>{
    dispatch(addToCart({
    items:dataProductsDetail,
    size,
    chooseIce,
    chooseSugar,
    quantity
    }))
    // setSize("")
    // setQuantity(1)
    // setchooseSugar(0)
    // setchooseIce(0)
    
  }
  // useEffect(()=>{
  //   setPrice()
  // },[quantity])
  return(
    <SafeAreaView>
      <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:13}}>
        <Image source={{uri:dataProductsDetail.url}} style={{height:411,width:"100%",resizeMode:"cover",borderRadius:40}}/>
        <View style={styles.wrapinfoProduct}>
          <View>
          </View>
          <View style={{zIndex:5,paddingVertical:25}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View>
                <Text style={styles.textName}>{dataProductsDetail.name}</Text>
                <View style={{flexDirection:"row",gap:20,alignItems:"center"}}>
                <Text style={styles.textSubname}>{dataProductsDetail.subname}</Text>
                <View style={{flexDirection:"row",gap:5}}>
               <Iconn name="star" color="#D17842" size={16} />
                <Text style={ styles.numberStar}>{dataProductsDetail.vote}</Text>
            </View>
                </View>
              </View>
                <WishList handleWishList={handleWishList} wishList={wishlist}/>
            </View>
              <Text style={styles.descriptionPro}>
              {dataProductsDetail.description}
              </Text>
            {dataProductsDetail.category !== "CAKE" && <>
            <View style={{marginTop:25}}>
                <Text style={styles.textChoice}>Choice of Ice</Text>
               <FlatList
               contentContainerStyle={{gap:10,marginTop:15}}
               showsHorizontalScrollIndicator={false}
                data={datachooseIce}
                horizontal={true} 
                renderItem={({item,index})=>{
                return <ChoosenIngredient key={index} name={item.name} value={item.value} choosenIngredient={chooseIce} handlechoosenIngredient={handlechoosenIce}/>
               }}/>
              </View>
              <View style={{marginTop:25}}>
                <Text style={styles.textChoice}>Choice of Sugar</Text>
               <FlatList
               contentContainerStyle={{gap:10,marginTop:15}}
               showsHorizontalScrollIndicator={false}
                data={datachooseSugar}
                horizontal={true} 
                renderItem={({item,index})=>{
                return <ChoosenIngredient key={index} name={item.name} value={item.value} choosenIngredient={chooseSugar} handlechoosenIngredient={handlechoosenSugar}/>
               }}/>
              </View>
            </>}
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
               {dataProductsDetail.category !== "CAKE" &&  <View style={{marginTop:25}}>
                  <Text style={styles.textChoice}>Size</Text>
                  <FlatList
                    contentContainerStyle={{gap:10,marginTop:15}}
                    showsHorizontalScrollIndicator={false}
                      data={chooseSize}
                      horizontal={true} 
                      renderItem={({item,index})=>{
                      return <ChoosenSize key={index} name={item.name} handleChooseSize={handleChooseSize} chooseSize={size}/>
               }}/>
                </View>}
                <View style={{marginTop:25}}>
                  <Text style={styles.textQuantity}>Quantity</Text>
                   <Quantity quantity={quantity} handlePlus={handlePlusQuantity} handleMinus={handleMinusQuantity}/>
                </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25}}>
                <PriceProduct price={sumPrice}/>
                <Button classesButton={styles.btnBuyNow} classLable={styles.lablebtnBuyNow} title="Add to cart" onpress={handleAddtoCart}/>
              </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetail