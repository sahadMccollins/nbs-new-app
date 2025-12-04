import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default searchStyles = StyleSheet.create({
    container: { paddingHorizontal: windowWidth(20), },
    header: { flexDirection: 'row', paddingTop: windowHeight(10), alignItems: 'center' },
    camera: { height: windowHeight(50), width: windowWidth(400), backgroundColor: appColors.styleBackground, marginLeft: windowWidth(20), flexDirection: 'row', alignItems: 'center', paddingHorizontal: windowWidth(14), borderRadius: windowWidth(10), justifyContent: 'space-between' },
    search: { flexDirection: 'row', alignItems: 'center' },
    input: { marginLeft: windowWidth(6), width: windowWidth(280), fontSize: fontSizes.FONT20, fontFamily: appFonts.LatoRegular },
    title: { fontFamily: appFonts.LatoBold, fontSize: fontSizes.FONT18, marginTop: windowHeight(30), },
    recentSearch: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    searchValue: { flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(10) },
    result: { fontFamily: appFonts.LatoMedium, fontSize: fontSizes.FONT18, color: appColors.grey, marginLeft: windowWidth(10) },
    recommendedList: { marginTop: windowHeight(14) },
    recommendedSeparator: { height: windowHeight(10) },
    recommended: { flex: 1 / 3, backgroundColor: appColors.styleBackground, height: windowHeight(40), alignItems: 'center', justifyContent: 'center', borderRadius: windowWidth(6), marginLeft: windowWidth(14) },
    name: { fontSize: fontSizes.FONT18, fontFamily: appFonts.LatoMedium, },
    categoryList: { marginTop: windowHeight(10) },
    categorySeparator: { width: windowWidth(10) },
    category: { alignItems: 'center', width: windowWidth(140) },
    categoryImage: { width: windowWidth(140), height: windowHeight(160), alignItems: 'center', justifyContent: 'flex-end', marginBottom: windowHeight(2) },
    categoryBackground: { width: windowWidth(140), height: windowHeight(130), backgroundColor: appColors.divider, position: 'absolute', borderRadius: 2 },
    categoryImg: { width: windowWidth(105), height: windowHeight(160) },
    brandList: { marginTop: windowHeight(14), marginBottom: windowHeight(20) },
    brandSeparator: { height: windowHeight(10) },
    separator: { justifyContent: 'space-between' },
    brand: { backgroundColor: appColors.styleBackground, width: '30%', height: windowHeight(40), alignItems: 'center', justifyContent: 'center', borderRadius: windowWidth(6) },
    brandImg: { width: windowWidth(80), height: windowHeight(17) },
})