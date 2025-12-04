import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productDetailStyles = StyleSheet.create({
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    color: appColors.black,
  },
  discription: {
    fontSize: fontSizes.FONT17,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidum,
    lineHeight: windowHeight(18),
  },
  seperator: {
    padding: windowHeight(5),
  },
  name: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    marginVertical: windowHeight(6),
  },
});
