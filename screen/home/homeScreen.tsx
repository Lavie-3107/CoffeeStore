import { SafeAreaView,StyleSheet,Text,View,Image } from "react-native"
import { HomeScreenType } from "./interface"
import Header from "../../src/components/header/index"
import Input from "../../src/components/input/input"
import { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import Dropdown from "../../src/components/dropdown/dropDown"
import TabMenu from "../../src/components/tabMenu/tabMenu"
const HomeScreen: React.FC<HomeScreenType> = ({
    
}) => {
    const [valueInput, setValueInput] = useState<string>("")
    const [valueTabMenu,setValueTabMenu]=useState<number>(1)
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
    const handleChangeTab = (value:number) => {
        setValueTabMenu(value)
    }
    return (
        <SafeAreaView>
            <Header />
            <View style={styles.wrapAllContent}>
                <View style={styles.wrapTitle}>
                 <Text style={styles.textTitle}>Find the best</Text>
                  <Text  style={styles.textTitle}>Coffee to your taste</Text>
                </View>
                <View style={styles.warpInputFilter}>
                    <View style={styles.wrapInput}>
                        <Input placeholder="Find your coffee..." classesInput={styles.stylesInput} value={valueInput} onChange={setValueInput} />
                        <Icon style={styles.icon} name="search" size={15} color="#808080"/>
                    </View>
                    <Dropdown type="icon" classDropdown={styles.dropdown} />
                </View>
                <TabMenu data={fakeData} styleTabmenu={styles.tabmenu} onpress={handleChangeTab} contentTabmenu={styles.contentTabMenu} styleAcitive={styles.tabActive} value={valueTabMenu} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
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
    tabmenu: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:25
    },
    contentTabMenu: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "600",
        color:"#000000"
    },
    tabActive: {
        color: "#967259",
        fontWeight:"700"
    },
  
})
export default HomeScreen