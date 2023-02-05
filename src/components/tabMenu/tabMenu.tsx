import { TabMenuType } from "./interface"
import { SafeAreaView,StyleSheet,Text,TouchableOpacity,View } from "react-native"
const TabMenu: React.FC<TabMenuType> = ({
    data,
    styleTabmenu,
    contentTabmenu,
    styleAcitive,
    onpress,
    value
}) => {
    return (
        <SafeAreaView style={styleTabmenu}>
            {data?.map((el:any,index:number) =>
                <TouchableOpacity key={index} onPress={()=>onpress(el.value)}>
                    <Text style={[contentTabmenu,value===el.value&&styleAcitive]}>{ el.name}</Text>
                </TouchableOpacity>
             )}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default TabMenu