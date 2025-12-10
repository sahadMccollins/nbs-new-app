import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productDetailStyles = StyleSheet.create({
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    color: appColors.black,
  },
  // discription: {
  //   fontSize: fontSizes.FONT17,
  //   color: appColors.gray,
  //   fontFamily: appFonts.LatoMidum,
  //   lineHeight: windowHeight(18),
  // },
  row: {
    flexDirection: 'row',
    paddingVertical: windowHeight(6),
    paddingHorizontal: windowWidth(12),
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 3,
  },
  keyText: {
    flex: 0.6,
    fontSize: fontSizes.FONT17,
    fontWeight: '500',
  },
  valueText: {
    flex: 0.4,
    fontSize: fontSizes.FONT17,
    textAlign: 'right',
  },

  discription: {
    marginVertical: windowHeight(6),
    fontSize: fontSizes.FONT17,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidum,
    lineHeight: windowHeight(18),
  },
  seperator: {
    padding: windowHeight(5),
  },
  content: {
    fontFamily: appFonts.LatoRegular,
    color: appColors.gray,
    fontSize: fontSizes.FONT18,
    marginVertical: windowHeight(6),
  },
  name: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    marginVertical: windowHeight(6),
  },
});
