import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default profileSettingsStyles = StyleSheet.create({
  scroll: {
    paddingBottom: windowHeight(160),
  },
  details: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    color: appColors.darkGray,
    marginHorizontal: windowWidth(22),
    top: 12,
  },
  genderView: {
    marginTop: windowHeight(10),
    marginHorizontal: windowWidth(30),
  },
});
