import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    tabmenu: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25
    },
    contentTabMenu: {
        fontFamily: "SF Pro Text",
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "600",
        color: "#000000"
    },
    tabActive: {
        color: "#967259",
        fontWeight: "700"
    },
})