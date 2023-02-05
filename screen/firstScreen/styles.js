import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    wrapFirstScreen: {
        position: "relative"
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: 400,
        left: 0,
        top: -50,
    },
    wrapContent: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 100
    },
    wrapContentTop: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    contentTop: {
        flexDirection: "column"
    },
    textTop: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 28,
        lineHeight: 42,
        color: "#EDE0D4"
    },
    textBottom: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 64,
        lineHeight: 80,
        color: "#E7BC91"
    },
    wrapContentBottom: {
        flexDirection: "column",
        alignSelf: "center",
        paddingHorizontal: 30,
    },
    title: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 29,
        color: "#BE9173",
        alignSelf: "center"
    },
    description: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 22,
        color: "rgba(68, 68, 68, 0.6)",
        alignSelf: "center",
        textAlign: "center",
        marginTop: 20
    }
})