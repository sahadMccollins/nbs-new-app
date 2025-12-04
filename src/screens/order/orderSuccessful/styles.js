import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderSuccessfulStyles = StyleSheet.create({
  scroll: {
    paddingBottom: windowHeight(160),
  },
  details: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    color: appColors.darkGray,
    marginLeft: windowWidth(20),
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  order: {
    paddingBottom: windowHeight(120),
  },
  circleView: {
    height: windowHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    height: windowHeight(100),
    width: windowWidth(130),
    resizeMode: 'contain',
  },
  title: {
    marginVertical: windowHeight(12),
    color: appColors.primary,
    fontSize: fontSizes.FONT24,
    fontFamily: appFonts.LatoBold,
    alignSelf: 'center',
  },
  subTitle: {
    color: appColors.darkGray,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(40),
    fontSize: fontSizes.FONT20,
    textAlign: 'center',
    lineHeight: windowHeight(20),
  },
});
