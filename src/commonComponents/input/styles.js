import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default inputStyles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(20),
  },
  rightIconStyle: {
    position: 'absolute',
    tintColor: appColors.grey,
  },
  error: {
    fontSize: fontSizes.FONT16,
    marginLeft: windowWidth(22),
    // marginTop: windowHeight(4),
    marginTop: windowHeight(10),
    color: appColors.error,
    fontFamily: appFonts.LatoRegular,
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(10),
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT18,
  },
  input: {
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderWidth: 1.5,
    borderColor: appColors.border,
    // borderColor: 'red',
    alignSelf: 'center',
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(4),
    bottom: -6,
  },
  textInput: {
    height: windowHeight(50),
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT16,
  },
});
