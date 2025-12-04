import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default switchStyles = StyleSheet.create({
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
    fontSize: fontSizes.FONT10,
    color: appColors.white,
    fontFamily: appFonts.LatoMedium,
  },
});
