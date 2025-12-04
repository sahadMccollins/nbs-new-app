import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "@theme/appConstant";
import appFonts from "@theme/appFonts";
import appColors from "@theme/appColors";

export default tabComponentStyles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        backgroundColor: appColors.white,
        height: windowHeight(64),
        elevation: 16
    },
    button: {
        flex: 1,
        alignItems: "center",
        paddingTop: 10,
    },
    label: {
        fontFamily: appFonts.LatoBold,
        color: appColors.black,
        margin: 2,
        fontSize: fontSizes.FONT13,
    },
})

