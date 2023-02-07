import { TypeBlockListProHome } from "./interface"
import {Text,View,SafeAreaView,FlatList,Dimensions} from "react-native"
import TabMenu from "../tabMenu/tabMenu"
import { data } from "../../../screen/home/fakeData"
import {useState} from 'react'
import Products from "../products/products"
import { styles } from "./styles"
const BlockListProdHome: React.FC<TypeBlockListProHome> = ({
    
}) => {
      const fakeData = [
        {
            name: "Espresso",
            value: 1,
        },
         {
            name: "Latte",
            value: 2,
        },
          {
            name: "Cappuccino",
            value: 3,
        },
           {
            name: "Cafetière",
            value: 4,
        }
    ]
    let dimensions = Dimensions.get("window");
    let imageWidth = Math.round((dimensions.width) / 2);
     const [valueTabMenu,setValueTabMenu]=useState<number>(1)
    const handleChangeTab = (value:number) => {
        setValueTabMenu(value)
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
                        return <Products  width={imageWidth} items={item}/>
                    }}
                    >
                    </FlatList>
                </SafeAreaView>
        </SafeAreaView>
    )
}
export default BlockListProdHome