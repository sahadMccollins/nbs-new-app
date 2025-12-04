import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default saveDetailsStyles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: windowWidth(70),
    height: windowHeight(60),
    backgroundColor: appColors.white,
    width: '100%',
    elevation: 6,
    borderTopWidth: 1,
    borderTopColor: appColors.line,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cancel: {
    width: '50%',
    textAlign: 'center',
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.darkGray,
  },
  details: {
    width: '44%',
    height: windowHeight(40),
    backgroundColor: appColors.primary,
    bottom: 7,
  },
});
