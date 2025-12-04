import {
    StyleSheet,
    Dimensions
} from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default startShoppingStyles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
    },
    image: {
        width: ITEM_WIDTH,
        height: windowHeight(390),
    },
    header: {
        color: appColors.darkGray,
        fontSize: fontSizes.FONT20,
        alignSelf: 'center',
        fontFamily: appFonts.LatoBold
    },
    body: {
        color: appColors.grey,
        fontSize: fontSizes.FONT18,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: appFonts.LatoRegular
    },
    mainView: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    headerStyle: {
        width: '94%',
        alignSelf: 'center',
        height: '8%',
        paddingTop: windowHeight(10),
        alignItems: 'flex-start'
    },
    buttonMainViewStyle: {
        width: '90%',
        borderRadius: windowWidth(10),
        alignSelf: 'center',
        height: windowHeight(40),
        backgroundColor: appColors.primary,
        justifyContent: 'center'
    },

    hintButtonStyle: {
        color: appColors.darkGray,
        fontSize: fontSizes.FONT16,
        marginTop: windowHeight(5)
    },

    titleMainView: {
        alignSelf: 'center',
    },
    createNewMainView: {
        flexDirection: 'row',
        marginTop: windowHeight(5),
        alignSelf: 'center',
        marginBottom: windowHeight(10)
    },
    createNewText: {
        color: appColors.grey,
        fontSize: fontSizes.FONT18,
        fontFamily: appFonts.LatoMedium
    },
    createNewUnderlineText: {
        marginStart: windowWidth(5),
        textDecorationLine: 'underline',
    },
    buttonStyle: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: appColors.primary,
        height: windowHeight(40),
        marginHorizontal:windowWidth(45)
    },
});