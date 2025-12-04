import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default walletStyles = StyleSheet.create({
  container: {
    marginBottom: windowHeight(12),
  },
  row: {
    flexDirection: 'row',
  },

  name: {
    padding: windowHeight(10),
    marginHorizontal: windowWidth(9),
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoMidium,
    color: appColors.black,
  },
  blankView: {
    height: windowHeight(8),
  },
});
