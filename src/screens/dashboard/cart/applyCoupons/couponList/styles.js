import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default couponListStyles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(21),
  },
  row: {
    flexDirection: 'row',
  },
  mainContainer: {
    marginVertical: windowHeight(4),
  },
  name: {
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT19,
  },
  mainView: {
    flexDirection: 'row',
    backgroundColor: appColors.styleBackground,
    paddingHorizontal: windowWidth(16),
    borderRadius: windowHeight(4),
    height: windowHeight(27),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(18),
    top: windowHeight(-6),
  },
  cupon: {
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(3),
    color: appColors.gray,
    fontFamily: appFonts.LatoMidium,
  },
  applyText: {
    fontSize: fontSizes.FONT19,
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
  },
  disc: {
    fontSize: fontSizes.FONT16,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidium,
    marginVertical: windowHeight(4),
    lineHeight: windowHeight(17),
  },
  viewText: {
    fontSize: fontSizes.FONT18,
    color: appColors.savings,
    fontFamily: appFonts.LatoBold,
  },
  seperator: {
    width: '120%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginVertical: windowHeight(20),
  },
});
