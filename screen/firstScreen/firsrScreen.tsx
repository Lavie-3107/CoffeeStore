import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native"
import { styles } from "./styles"
const FirstScreen = () => {
    return (
        <SafeAreaView style={styles.wrapFirstScreen}>
            <Image style={styles.backgroundImage} source={require("../../Asset/Images/WelcomeScrBgd.png")} />
            <View style={styles.wrapContent}>
                <View style={styles.wrapContentTop}>
                    <View style={styles.contentTop}>
                        <Text style={styles.textTop}>Grab a cup of</Text>
                        <Text style={styles.textBottom}>coffee</Text>
                    </View>
                    <Image source={require("../../Asset/Images/coffeeCup.png")} />
                </View>
                <View style={styles.wrapContentBottom}>
                    <Text style={styles.title}>
                        Stay Focused
                    </Text>
                    <Text style={styles.description}>
                        Get the cup filled of your choice to stay focused and awake. Diffrent type of coffee menu, hot lottee cappucino
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default FirstScreen