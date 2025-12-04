import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default contentStyles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: appColors.divider,
    padding: windowHeight(16),
    justifyContent: 'space-between',
    marginVertical: windowHeight(10),
  },
  name: {
    fontSize: windowHeight(13),
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  content: {
    marginVertical: windowHeight(6),
    lineHeight: windowHeight(17),
    fontSize: fontSizes.FONT18,
    color: appColors.grey,
    fontFamily: appFonts.LatoRegular,
  },
});
