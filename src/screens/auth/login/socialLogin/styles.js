import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default authStyles = StyleSheet.create({
  dividerStyle: {
    width: '40%',
    alignSelf: 'center',
  },
  dividertextStyle: {
    marginHorizontal: windowWidth(14),
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT16,
    color: appColors.grey,
  },
  createNewMainView: {
    flexDirection: 'row',
    marginTop: windowHeight(20),
    alignSelf: 'center',
  },
  createNewText: {
    color: appColors.grey,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
  createNewUnderlineText: {
    marginStart: windowWidth(5),
    textDecorationLine: 'underline',
  },
});
