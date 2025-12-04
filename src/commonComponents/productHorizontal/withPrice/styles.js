import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default withPriceStyles = StyleSheet.create({
    brand: {
        color: appColors.grey,
        fontSize: fontSizes.FONT17,
        fontFamily: appFonts.LatoMedium
    },
    priceView: {
        flexDirection: 'row',
        marginTop: windowHeight(4)
    },
    discountPrice: {
        fontSize: fontSizes.FONT19,
        fontFamily: appFonts.LatoMedium
    },
    price: {
        color: appColors.grey,
        fontSize: fontSizes.FONT19,
        fontFamily: appFonts.LatoMedium,
        marginHorizontal: windowWidth(10),
        textDecorationLine: 'line-through'
    },
    discount: {
        color: appColors.primary,
        fontSize: fontSizes.FONT19,
        fontFamily: appFonts.LatoMedium
    },
})