import { SafeAreaView,StyleSheet,Text,View,Image, ScrollView, FlatList } from "react-native"
import { HomeScreenType } from "./interface"
import Header from "../../src/components/header/index"
import Input from "../../src/components/input/input"
import { useEffect, useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import Dropdown from "../../src/components/dropdown/dropDown"
import BlockListProdTabHome from "../../src/components/blockListProdTabHomescreen"
import BlockListProHome from "../../src/components/blockListProHomesreen"
import {styles} from "./styles"
const HomeScreen: React.FC<HomeScreenType> = ({
        navigation
}) => {
    const [valueInput, setValueInput] = useState<string>("")
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
                        <Input placeholder="Find your coffee..." classesInput={styles.stylesInput} value={valueInput} onChange={setValueInput} />
                        <Icon style={styles.icon} name="search" size={15} color="#808080"/>
                    </View>
                    <Dropdown type="icon" classDropdown={styles.dropdown} />
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