import { Image, SafeAreaView, Text, View } from "react-native"
import Button from "../button/button"
import { TypeProducts } from "./interface"
import Iconn from 'react-native-vector-icons/AntDesign'
import {styles} from "./styles"
const Products: React.FC<TypeProducts> = ({
    items,
    onpress,
    height,
    width
}) => {
    return (
       <SafeAreaView style={[{height:height,width:width},[styles.wrapProducts]]}>
                    <Image source={{ uri: `${items.url}` }}
                        style={styles.imgProducts} />
                     <View style={ styles.wrapVote}>
                        <View style={styles.bgdVoteBlur}></View>
                        <View style={styles.wrapContentVote}>
                             <Iconn name="star" color="#D17842" size={16} />
                            <Text style={ styles.numberStar}>{items.vote}</Text>
                        </View>
                              </View>
                    <View style={styles.wrapContentProducts}>
                        <View style={styles.wrapName}>
                            <View style={styles.wrapNameProducts}>
                                <Text style={styles.nameProducts}>{items.name}</Text>
                                 <Text style={styles.descriptionProducts}>{items.subname}</Text>
                            </View>
                        </View>
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