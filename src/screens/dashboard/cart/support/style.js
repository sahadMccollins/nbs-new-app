import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default supportOptionsStyles = StyleSheet.create({
    mainView: {
        paddingHorizontal: windowWidth(40),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: windowHeight(20)
    },
    option: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionImage: {
        width: windowWidth(50),
        height: windowWidth(50),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.styleBackground,
        borderRadius: windowWidth(25)
    },
    optionText: {
        fontSize: fontSizes.FONT16,
        fontFamily: appFonts.LatoMedium
    },
})