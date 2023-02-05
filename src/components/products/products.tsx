import { Image, SafeAreaView, Text, View } from "react-native"
import Button from "../button/button"
import { TypeProducts } from "./interface"
import Iconn from 'react-native-vector-icons/AntDesign'
import {styles} from "./styles"
const Products: React.FC<TypeProducts> = ({
    
}) => {
    return (
       <SafeAreaView style={ styles.wrapProducts}>
                    <Image source={{ uri: 'https://caphenguyenchat.vn/wp-content/uploads/2017/11/tim-hieu-ve-ca-phe-y-ca-phe-cappuccino-do-uong-thinh-hanh-3.png' }}
                        style={styles.imgProducts} />
                     <View style={ styles.wrapVote}>
                        <View style={styles.bgdVoteBlur}></View>
                        <View style={styles.wrapContentVote}>
                             <Iconn name="star" color="#D17842" size={16} />
                            <Text style={ styles.numberStar}>4.5</Text>
                        </View>
                              </View>
                    <View style={styles.wrapContentProducts}>
                        <View style={styles.wrapName}>
                            <View style={styles.wrapNameProducts}>
                                <Text style={styles.nameProducts}>Espresso</Text>
                                 <Text style={styles.descriptionProducts}>with Oa t Milk</Text>
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