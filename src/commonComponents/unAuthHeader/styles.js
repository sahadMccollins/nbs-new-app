import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default headerStyle = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.LatoMedium,
  },
  image: {
    height: windowHeight(20),
    width: windowWidth(140),
  },
});
