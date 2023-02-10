import { TypeBlockListTabProHome } from "./interface"
import {Text,View,SafeAreaView,FlatList,Dimensions} from "react-native"
import TabMenu from "../tabMenu/tabMenu"
import { data } from "../../../screen/home/fakeData"
import {useState} from 'react'
import Products from "../products/products"
import { styles } from "./styles"
import { useDispatch,useSelector } from "react-redux"
import { pushDataProductsDetail } from "../../../redux/productsDetail/productsDetailSlice"
const BlockListProdTabHome: React.FC<TypeBlockListTabProHome> = ({
    navigation
}) => {
      const fakeData = [
        {
            name: "Freeze",
            value: 1,
        },
         {
            name: "Coffee",
            value: 2,
        },
          {
            name: "Tea",
            value: 3,
        },
           {
            name: "Other",
            value: 4,
        }
    ]
    let dimensions = Dimensions.get("window");
    let imageWidth = Math.round((dimensions.width) / 2);
    const [valueTabMenu,setValueTabMenu]=useState<number>(1)
    const dispatch = useDispatch()
    const handleChangeTab = (value:number) => {
        setValueTabMenu(value)
    }
    const handleRedirectProDetaill = (items:any) => {
        dispatch(pushDataProductsDetail(items))
        navigation.navigate("ProductDetail")
    }
    return (
        <SafeAreaView>
            <TabMenu data={fakeData} styleTabmenu={styles.tabmenu} onpress={handleChangeTab} contentTabmenu={styles.contentTabMenu} styleAcitive={styles.tabActive} value={valueTabMenu} />
                <SafeAreaView style={{marginTop:20}}>
                <FlatList
                    contentContainerStyle={{gap:10}}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    horizontal={true}
                    renderItem={({item})=>{
                        return <Products navigation={navigation}  width={imageWidth} items={item} handleRedirectProDetail={handleRedirectProDetaill}/>
                    }}
                    >
                    </FlatList>
                </SafeAreaView>
        </SafeAreaView>
    )
}
export default BlockListProdTabHome