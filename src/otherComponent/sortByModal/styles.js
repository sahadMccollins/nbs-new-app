// import { StyleSheet } from "react-native";
// import {
//     fontSizes,
//     windowHeight
// } from "@theme/appConstant";
// import appFonts from "@theme/appFonts";

// export default multiLangauageStyles = StyleSheet.create({
//     text: {
//         fontSize: fontSizes.FONT18,
//         fontFamily: appFonts.LatoMedium,
//     },
// })


import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: windowHeight(4),
    },

    title: {
        fontSize: fontSizes.FONT18,
        // fontFamily: appFonts.LatoMedium,
        fontWeight: '600',
        flex: 1,
    },

    divider: {
        height: 1,
        width: '100%',
    },

    optionRow: {
        paddingVertical: windowHeight(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: windowWidth(16)
    },

    optionText: {
        fontSize: fontSizes.FONT16,
        fontFamily: appFonts.LatoRegular,
    },
});
