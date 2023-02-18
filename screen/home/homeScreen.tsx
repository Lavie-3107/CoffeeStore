import { SafeAreaView,StyleSheet,Text,View,Image, ScrollView, FlatList, TouchableOpacity } from "react-native"
import { HomeScreenType } from "./interface"
import Header from "../../src/components/header/index"
import Input from "../../src/components/input/input"
import { useEffect, useMemo, useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import Dropdown from "../../src/components/dropdown/dropDown"
import BlockListProdTabHome from "../../src/components/blockListProdTabHomescreen"
import BlockListProHome from "../../src/components/blockListProHomesreen"
import { styles } from "./styles"
import { data } from "./fakeData"
import { useDispatch } from "react-redux"
import { pushDataProductsDetail } from "../../redux/productsDetail/productsDetailSlice"
const HomeScreen: React.FC<HomeScreenType> = ({
        navigation
}) => {
    const dispatch=useDispatch()
    const [valueInput, setValueInput] = useState<string>("")
    const [productSearch,setProductSearch]=useState([])
    const searchText = (text: string) => {
        const productSearch:any=data.filter((el:any)=>`${el.name} ${el.subname}`.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        setValueInput(text)
        setProductSearch(productSearch)
    }
    const handleRedirectProDetaill = (items:any) => {
        dispatch(pushDataProductsDetail(items))
        navigation.navigate("ProductDetail")
        setValueInput("")
    }
    return (
        <ScrollView>
            <SafeAreaView>
            <Header />
            <View style={styles.wrapAllContent}>
                <View style={styles.wrapTitle}>
                 <Text style={styles.textTitle}>Find the best</Text>
                  <Text  style={styles.textTitle}>Coffee to your taste</Text>
                </View>
                <View style={styles.warpInputFilter}>
                    <View style={styles.wrapInput}>
                        <Input placeholder="Find your coffee..." classesInput={styles.stylesInput} value={valueInput} onChange={searchText} />
                            <Icon style={styles.icon} name="search" size={15} color="#808080" />
                            {valueInput !== "" && <View style={{ width: "100%" }}>
                                <FlatList
                                contentContainerStyle={{gap:10}}
                                data={productSearch}
                                renderItem={({item,index}:any)=>{
                                return  <TouchableOpacity style={{
                                                            width: "100%",
                                                            borderBottomWidth: 1,
                                                            borderColor: "rgba(0, 0, 0, 0.1)",
                                                            paddingVertical:5
                                                            
                                                }}
                                                    key={index} onPress={()=>handleRedirectProDetaill(item)}
                                                >
                                                            <Text>{ `${item.name as any} ${item.subname}`}</Text>
                                                    </TouchableOpacity>
                            }}
                            >
                            </FlatList>
                            </View>      }            
                        </View>
                </View>
                    <BlockListProdTabHome navigation={navigation } />
                    <BlockListProHome title="Popular Now" navigation={navigation }/>
                    <BlockListProHome title="Sale Now" navigation={navigation }/>
                    <BlockListProHome title="Best Seller" navigation={navigation }/>
            </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default HomeScreen