import { TypeBlockListProHome } from "./interface"
import {Text,View,SafeAreaView,FlatList,Dimensions} from "react-native"
import TabMenu from "../tabMenu/tabMenu"
import { data } from "../../../screen/home/fakeData"
import {useState} from 'react'
import Products from "../products/products"
import { styles } from "./styles"
const BlockListProHome: React.FC<TypeBlockListProHome> = ({
   title,
   listItems
}) => {
    let dimensions = Dimensions.get("window");
    let imageWidth = Math.round((dimensions.width) / 2 - 29);
    return (
        <SafeAreaView style={{marginTop:20,paddingBottom:20}}>
            <Text style={styles.title}>{title}</Text>
                <SafeAreaView style={{marginTop:20,width:"100%"}}>
                <FlatList
                    contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap",gap:10 }}
                    data={data}
                    renderItem={({item})=>{
                        return <Products width={imageWidth}  items={item}/>
                    }}
                    >
                    </FlatList>
                </SafeAreaView>
        </SafeAreaView>
    )
}
export default BlockListProHome