import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapProducts: {
        flex: 1,
        backgroundColor: "#ffffff",
        elevation: 2,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingTop: 11,
        paddingBottom: 8,
        position: "relative",
    },
    imgProducts: {
        height: 123,
        width: "100%",
        borderRadius: 25,
        resizeMode: "stretch",
    },
    wrapContentProducts: {

    },
    wrapName: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    wrapVote: {
        position: "absolute",
        top: 11,
        right: 10,
        width: 73,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    bgdVoteBlur: {
        backgroundColor: "black",
        opacity: 0.7,
        width: "100%",
        height: 26,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    wrapContentVote: {
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        gap: 10
    },
    numberStar: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "700",
        color: "#ffffff"
    },
    wrapNameProducts: {
        paddingLeft: 9,
        marginTop: 15,
        flexDirection: "column",
        gap: 2
    },
    nameProducts: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 18,
        fontWeight: "700",
        color: "#444444"
    },
    descriptionProducts: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 11,
        lineHeight: 14,
        fontWeight: "700",
        color: "rgba(0, 0, 0, 0.6)"
    },
    priceandButton: {
    },
    wrapPriceProducts: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        paddingLeft: 9,
        marginTop: 15
    },
    dolar: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "700",
        color: "#967259",
    },
    numberPrice: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "700",
        color: "#444444",
    },
    btnAddToCart: {
        height: 52,
        width: 52,
        backgroundColor: "#967259",
        position: "absolute",
        right: 0,
        bottom: 0,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
})