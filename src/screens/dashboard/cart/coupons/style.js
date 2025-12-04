import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default couponStyles = StyleSheet.create({
  mainView: {
    paddingVertical: windowHeight(20),
  },
  coupons: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(4),
  },
  rowContainer:{
      flexDirection:'row',
      marginHorizontal:windowWidth(14)
  },
  arrowView: {
    width: '93%',
    alignSelf: 'center',
    padding: windowWidth(6),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(20),
    borderRadius: windowWidth(6),
    marginTop: windowHeight(10),
    justifyContent: 'space-between',
  },
  couponView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  applyCoupon: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(12),
    width: '87%',
    color: appColors.black,
  },
  right: {
    right: windowWidth(10),
  },
});
