import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default logoutStyles = StyleSheet.create({
  btnText: {
    fontSize: fontSizes.FONT22,
    textTransform: 'uppercase',
    alignSelf: 'center',
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
  },
  btnContainer: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(18),
    borderColor: appColors.black,
    borderWidth: 1,
    borderRadius: windowHeight(4),
    marginTop: windowHeight(25),
    marginHorizontal: windowWidth(25),
  },
});
