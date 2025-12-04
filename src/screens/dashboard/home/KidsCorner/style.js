import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default kidsCornerStyles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(14),
  },
  kidsCorner: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
  },
  clothing: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
    marginBottom: windowHeight(20),
  },
});
