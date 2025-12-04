import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default authStyles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.white,
    width: '92%',
    alignSelf: 'center',
    paddingBottom: windowHeight(50),
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
  buttonStyle: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
  },
  blankView: {
    height: windowHeight(10),
  },
  dividerStyle: {
    width: '40%',
    alignSelf: 'center',
  },
  dividertextStyle: {
    marginHorizontal: windowWidth(14),
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT16,
    color: appColors.grey,
  },
  socialLoginMainView: {
    marginBottom: windowHeight(20),
  },
  socialLoginView: {
    height: windowHeight(45),
    width: windowWidth(65),
    marginStart: windowWidth(15),
    backgroundColor: appColors.line,
    justifyContent: 'center',
    borderRadius: windowWidth(10),
  },
  socialLoginImageView: {
    height: windowHeight(30),
    width: windowWidth(30),
    alignSelf: 'center',
  },
  subView: {
    height: '80%',
  },
  loaderStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
});
