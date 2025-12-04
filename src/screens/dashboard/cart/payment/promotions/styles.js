import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default promotionStyles = StyleSheet.create({
  container: {
    margin: windowHeight(12),
    paddingHorizontal: windowWidth(6),
  },
  title: {
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT22,
    marginVertical: windowHeight(12),
  },
  mainContainer: {
    backgroundColor: appColors.divider,
    padding: windowHeight(15),
    marginVertical: windowHeight(6),
    borderRadius: windowHeight(4),
  },
  discription: {
    color: appColors.grey,
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoMidium,
    lineHeight: windowHeight(17),
  },
  showMore: {
    textAlign: 'center',
    marginVertical: windowHeight(8),
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT17,
  },
});
