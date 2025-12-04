import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default recommendedStyles = StyleSheet.create({
    title: {
        fontFamily: appFonts.LatoBold,
        fontSize: fontSizes.FONT20,
        marginTop: windowHeight(30),
    },
    recommendedList: {
        marginTop: windowHeight(14)
    },
    recommendedSeparator: {
        height: windowHeight(10)
    },
    recommended: {
        flex: 1 / 3,
        backgroundColor: appColors.styleBackground,
        height: windowHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowWidth(6),
        marginLeft: windowWidth(14)
    },
    name: {
        fontSize: fontSizes.FONT19,
        fontFamily: appFonts.LatoMedium,
    },
})