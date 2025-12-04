import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default sliderStyles = StyleSheet.create({
  mainView: {
    height: windowHeight(220),
    width: '100%',
    marginTop: windowHeight(12),
  },
  pagination: {
    marginBottom: windowHeight(-10),
  },
  dot: {
    width: windowHeight(9),
    height: windowHeight(9),
    borderRadius: windowHeight(4.5),
    margin: windowWidth(3),
  },
  activeDot: {
    width: windowHeight(39),
    height: windowHeight(7),
    borderRadius: windowHeight(4),
    margin: windowWidth(3),
  },
  container: {
    width: windowWidth(440),
    marginLeft: windowWidth(20),
  },
  img: {
    height: windowHeight(180),
    width: windowWidth(420),
    borderRadius: windowHeight(7),
  },
  txtView: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    left: windowWidth(20),
  },
  welcomeTxt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
  },
  flatOff: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBlack,
    color: appColors.primary,
  },
  freeShipping: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(4),
    color: appColors.grey,
  },
  shopVow: {
    width: windowWidth(134),
    height: windowHeight(30),
    backgroundColor: appColors.primary,
  },
  scrollView: {
    overflow: 'visible',
  },
  shopNow: {
    width: windowWidth(134),
    height: windowHeight(30),
    backgroundColor: appColors.primary,
  },
  flatOffTxt: {
    fontSize: fontSizes.FONT22,
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
  },
});
