import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default forgotPasswordStyles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.white,
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    width: '92%',
    alignSelf: 'center',
  },
  titleText: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT28,
    color: appColors.black,
    fontWeight: '600',
  },
  headerStyle: {
    height: '15%',
    paddingTop: windowHeight(10),
    alignItems: 'flex-start',
  },
  buttonStyle: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
    marginTop: '20%',
  },
  createNewMainView: {
    flexDirection: 'row',
    marginTop: windowHeight(20),
    alignSelf: 'center',
  },
  createNewText: {
    color: appColors.grey,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoRegular,
  },
  createNewUnderlineText: {
    color: appColors.darkGray,
    marginStart: windowWidth(5),
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    height: '80%',
  },
});
