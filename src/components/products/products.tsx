import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Button from "../button/button"
import { TypeProducts } from "./interface"
import Iconn from 'react-native-vector-icons/AntDesign'
import {styles} from "./styles"
const Products: React.FC<TypeProducts> = ({
    items,
    onpress,
    height,
    width,
    handleRedirectProDetail
}) => {
    return (
       <SafeAreaView style={[{height:height,width:width},[styles.wrapProducts]]}>
            <TouchableOpacity onPress={()=>handleRedirectProDetail(items)}>
                 <Image source={{ uri: `${items.url}` }}
                        style={styles.imgProducts} />
                   </TouchableOpacity>
                     <View style={ styles.wrapVote}>
                        <View style={styles.bgdVoteBlur}></View>
                        <View style={styles.wrapContentVote}>
                             <Iconn name="star" color="#D17842" size={16} />
                            <Text style={ styles.numberStar}>{items.vote}</Text>
                        </View>
                              </View>
                    <View style={styles.wrapContentProducts}>
                <TouchableOpacity style={styles.wrapName} onPress={()=>handleRedirectProDetail(items)}>
                            <View style={styles.wrapNameProducts}>
                                <Text style={styles.nameProducts}>{items.name}</Text>
                                 <Text style={styles.descriptionProducts}>{items.subname}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.priceandButton}>
                            <View style={styles.wrapPriceProducts}>
                                <Text style={ styles.dolar}>$</Text>
                                <Text style={styles.numberPrice}>4.20</Text>
                            </View>
                        </View>
                    </View>
                     <Button type="noTitle" icon={<Iconn name="plus" color="#ffffff" size={25} />} classesButton={styles.btnAddToCart} />
                </SafeAreaView>
    )
}
export default Products