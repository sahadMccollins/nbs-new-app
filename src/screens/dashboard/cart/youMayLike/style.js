import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appFonts from "@theme/appFonts";

export default youMayLikeStyles = StyleSheet.create({
    title: {
        marginVertical: windowHeight(20),
        marginHorizontal: windowWidth(14),
        fontSize: fontSizes.FONT23,
        fontFamily: appFonts.LatoBold,
    },
    container: {
        paddingHorizontal: windowWidth(20)
    },
    separator: {
        width: windowWidth(14)
    },
})