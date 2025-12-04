import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default recentSearchStyles = StyleSheet.create({
    title: {
        fontFamily: appFonts.LatoBold,
        fontSize: fontSizes.FONT20,
        marginTop: windowHeight(10),
    },
    recentSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchValue: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight(10)
    },
    result: {
        fontFamily: appFonts.LatoMedium,
        fontSize: fontSizes.FONT20,
        color: appColors.grey,
        marginHorizontal: windowWidth(10)
    },
})