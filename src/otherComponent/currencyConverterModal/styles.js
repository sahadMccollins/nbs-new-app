import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "@theme/appConstant";
import appFonts from "@theme/appFonts";

export default multiLangauageStyles = StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT24,
        fontFamily: appFonts.mulish,
    },
    icon: {
        alignItems: 'center',
        marginTop: windowHeight(10)
    },
})