import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default debitCardStyles = StyleSheet.create({
  mainView: {
    marginVertical: windowHeight(10),
  },
  conatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  placeholder: {
    position: 'absolute',
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(10),
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT16,
    left: windowWidth(16),
  },
  input: {
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderWidth: 1.5,
    borderColor: appColors.border,
    alignSelf: 'center',
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(10),
    width: windowWidth(202),
    backgroundColor: appColors.white,
    height: windowHeight(40),
  },
  textInput: {
    height: windowHeight(50),
    fontSize: fontSizes.FONT19,
  },

  buttonStyle: {
    width: '40%',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
  },
});
