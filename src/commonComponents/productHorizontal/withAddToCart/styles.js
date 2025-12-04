import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default withAddToCartStyles = StyleSheet.create({
  line: {
    width: windowWidth(230),
    height: windowHeight(1),
    backgroundColor: appColors.line,
    marginTop: windowHeight(10),
    marginBottom: windowHeight(10),
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
  },
  optionText: {
    marginHorizontal: windowWidth(8),
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoBold,
    bottom:windowHeight(3)
  },
  divider: {
    width: windowWidth(2),
    height: windowHeight(14),
    marginRight: windowWidth(10),
  },
});
