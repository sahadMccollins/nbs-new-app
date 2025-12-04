import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default categoryStyles = StyleSheet.create({
    main: {
        paddingHorizontal: windowWidth(24),
        borderRadius: windowWidth(7),
        justifyContent: 'space-between',
        backgroundColor: appColors.divider,
        alignItems: 'center',
        flexDirection: 'row'
    },
    category: {
        fontFamily: appFonts.LatoBold,
        fontSize: fontSizes.FONT22,
    },
    subCategory: {
        fontSize: fontSizes.FONT19,
        color: appColors.grey,
        fontFamily: appFonts.LatoMedium
    },
    categoryImage: {
        width: windowWidth(110),
        height: windowHeight(100)
    },
})