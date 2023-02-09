import { TypeBlockListProHome } from "./interface"
import {Text,View,SafeAreaView,FlatList,Dimensions} from "react-native"
import TabMenu from "../tabMenu/tabMenu"
import { data } from "../../../screen/home/fakeData"
import {useState} from 'react'
import Products from "../products/products"
import { styles } from "./styles"
import { useDispatch,useSelector } from "react-redux"
import { pushDataProductsDetail } from "../../../redux/productsDetail/productsDetailSlice"
const BlockListProHome: React.FC<TypeBlockListProHome> = ({
   title,
    listItems,
   navigation
}) => {
    let dimensions = Dimensions.get("window");
    let imageWidth = Math.round((dimensions.width) / 2 - 29);
    const dispatch = useDispatch()
    const handleRedirectProDetaill = () => {
        console.log(1)
        // dispatch(pushDataProductsDetail(items))
        // navigation.navigate("ProductDetail")
    }
    return (
        <SafeAreaView style={{marginTop:20,paddingBottom:20}}>
            <Text style={styles.title}>{title}</Text>
                <SafeAreaView style={{marginTop:20,width:"100%"}}>
                <FlatList
                    contentContainerStyle={{ flexDirection: "row",gap:10 }}
                    data={data}
                    renderItem={({item})=>{
                        return <Products width={imageWidth} items={item} navigation={ navigation} handleRedirectProDetail={handleRedirectProDetaill} />
                    }}
                    >
                    </FlatList>
                </SafeAreaView>
        </SafeAreaView>
    )
}
export default BlockListProHome