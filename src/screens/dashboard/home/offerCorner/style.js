import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default offerCornerStyles = StyleSheet.create({
  offerCorner: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(14),
    marginTop: windowHeight(20),
  },
  column: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(16),
    marginTop: windowHeight(12),
  },
  txtView: {
    backgroundColor: appColors.divider,
    width: '48%',
    height: windowHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(4),
  },
  name: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
  },
});
