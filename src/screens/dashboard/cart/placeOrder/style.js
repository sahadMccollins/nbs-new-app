import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default placeOrderStyles = StyleSheet.create({
    mainView: {
        position: 'absolute',
        bottom: windowHeight(40),
        width: '100%',
        paddingVertical: windowHeight(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(20),
        alignItems: 'center',
        elevation: 10,
    },
    price: {
        fontFamily: appFonts.LatoMedium,
        fontSize: fontSizes.FONT20,
    },
    order: {
        width: '50%',
        alignSelf: 'center',
        backgroundColor: appColors.primary,
        height: windowHeight(40)
    },
})