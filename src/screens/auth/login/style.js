import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default authStyles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.white,
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },

  titleText: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT30,
    color: appColors.black,
    fontWeight: '600',
  },
  headerStyle: {
    height: '15%',
    paddingTop: windowHeight(10),
    alignItems: 'flex-start',
  },
  forgotPwdtextview: {
    textAlign: 'right',
    marginTop: windowHeight(8),
    fontFamily: appFonts.LatoMedium,
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
  },
  buttonStyle: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(46),
  },
  subView: {
    height: '80%',
  },
  socialLoginMainView: {
    marginBottom: windowHeight(30),
  },
  socialLoginView: {
    height: windowHeight(50),
    width: windowWidth(70),
    marginStart: windowWidth(10),
    backgroundColor: appColors.line,
    justifyContent: 'center',
    borderRadius: windowWidth(10),
  },
  socialLoginImageView: {
    height: windowHeight(30),
    width: windowWidth(36),
    alignSelf: 'center',
  },
  padding: {
    paddingHorizontal: windowWidth(20),
  },
  loaderStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  blankView: {
    height: windowHeight(15),
  },
  createNewMainView: {
    flexDirection: 'row',
    marginTop: windowHeight(20),
    alignSelf: 'center',
  },
  createNewText: {
    color: appColors.grey,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(4),
  },
  createNewUnderlineText: {
    marginStart: windowWidth(5),
    textDecorationLine: 'underline',
  },
});
