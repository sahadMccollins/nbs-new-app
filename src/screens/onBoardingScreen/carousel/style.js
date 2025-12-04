// import {
//     StyleSheet,
//     Dimensions
// } from "react-native";
// import {
//     fontSizes,
//     windowHeight,
//     windowWidth
// } from "@theme/appConstant";
// import appColors from "@theme/appColors";
// import appFonts from "@theme/appFonts";

// export const SLIDER_WIDTH = Dimensions.get('window').width
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// export default carouselItemStyles = StyleSheet.create({
//     imageContainer: {
//         width: ITEM_WIDTH,
//     },
//     image: {
//         height: '60%'
//     },
//     sliderImage: {
//         width: ITEM_WIDTH,
//         height: windowHeight(390),
//     },
//     titleMainView: {
//         alignSelf: 'center',
//         width: windowWidth(420),
//         marginBottom: windowHeight(10)
//     },
//     header: {
//         color: appColors.darkGray,
//         fontSize: fontSizes.FONT20,
//         alignSelf: 'center',
//         fontFamily: appFonts.LatoBold
//     },
//     body: {
//         color: appColors.grey,
//         fontSize: fontSizes.FONT18,
//         alignSelf: 'center',
//         textAlign: 'center',
//         fontFamily: appFonts.LatoRegular
//     },
//     container: {
//         height: '100%',
//         justifyContent: 'space-between',
//     },
//     view: {
//         height: '78%'
//     },
// });


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

export default carouselItemStyles = StyleSheet.create({
    imageContainer: {
        width: ITEM_WIDTH,
    },
    image: {
        height: '60%'
    },
    sliderImage: {
        width: ITEM_WIDTH,
        height: windowHeight(390),
    },
    titleMainView: {
        alignSelf: 'center',
        width: windowWidth(420),
        marginBottom: windowHeight(10)
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
    container: {
        height: '100%',
        justifyContent: 'space-between',
    },
    view: {
        height: '78%'
    },
});