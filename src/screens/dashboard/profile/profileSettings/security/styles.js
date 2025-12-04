import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default securityStyles = StyleSheet.create({
  security: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    color: appColors.darkGray,
    marginLeft: windowWidth(24),
    textTransform: 'uppercase',
    marginTop: windowHeight(24),
  },
  change: {
    position: 'absolute',
    right: windowWidth(50),
    top: windowHeight(44),
    color: appColors.primary,
  },
});
