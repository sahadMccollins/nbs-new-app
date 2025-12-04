import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default ratingContainerStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  textStyle: {
    color: appColors.grey,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT18,
  },
  order: {
    fontFamily: appFonts.LatoBold,
    left: windowWidth(6),
  },
});
