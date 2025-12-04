import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "@theme/appConstant";
import appFonts from "@theme/appFonts";

export default multiLangauageStyles = StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT22,
        fontFamily: appFonts.LatoMedium,
    },
    icon: {
        alignItems: 'center',
        marginTop: windowHeight(4),
        height: windowHeight(40),
        width: '100%'
    },
})