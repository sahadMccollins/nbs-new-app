import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default saleStartStyles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(40),
    height: windowHeight(180),
    justifyContent: 'center',
  },
  txtView: {
    width: '100%',
    height: windowHeight(170),
    backgroundColor: appColors.divider,
    justifyContent: 'center',
    paddingLeft: windowWidth(20),
  },
  denimWear: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
  },
  saleStart: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoMedium,
  },
  timerView: {
    flexDirection: 'row',
    marginTop: windowHeight(10),
  },
  timeView: {
    backgroundColor: appColors.primary,
    width: windowWidth(56),
    height: windowHeight(46),
    borderRadius: windowWidth(4),
    paddingTop: windowHeight(2),
  },
  timeValue: {
    fontSize: fontSizes.FONT12,
    paddingLeft: windowWidth(4),
    color: appColors.white,
    fontFamily: appFonts.LatoMedium,
  },
  time: {
    fontSize: fontSizes.FONT22,
    color: appColors.white,
    fontFamily: appFonts.LatoBold,
    alignSelf: 'center',
  },
  explore: {
    marginTop: windowHeight(10),
    textDecorationLine: 'underline',
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
  },
  image: {
    position: 'absolute',
    right: 0,
  },
});
