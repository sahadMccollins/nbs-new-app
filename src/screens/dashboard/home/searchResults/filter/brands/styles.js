import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default brandStyles = StyleSheet.create({
  mainStyle: {
    marginTop: windowHeight(15),
  },
  brand: {
    flex: 1 / 2,
    backgroundColor: appColors.styleBackground,
    height: windowHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(6),
    marginLeft: windowWidth(14),
  },
  name: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
  },
  brandsSeperator: {
    height: windowHeight(10),
  },
});
