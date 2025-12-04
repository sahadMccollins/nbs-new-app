import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default addNewcardStyles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: windowWidth(70),
    height: windowHeight(70),
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
    height: windowHeight(50),
    backgroundColor: appColors.primary,
  },
  button: {
    borderRadius: windowHeight(4),
    marginTop: windowHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.primary,
    borderWidth: 1,
    padding: windowHeight(5),
    paddingHorizontal: windowWidth(12),
    bottom: windowHeight(5),
  },
  buttonText: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT20,
    color: appColors.primary,

    // color: appColors.white,
  },
});
