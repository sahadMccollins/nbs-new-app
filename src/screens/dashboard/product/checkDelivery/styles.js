import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default checkDeliveryStyles = StyleSheet.create({
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    color: appColors.black,
  },
  discription: {
    marginVertical: windowHeight(5),
    fontSize: fontSizes.FONT18,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidium,
  },
  mainView: {
    paddingVertical: windowHeight(4),
  },
  row: {
    width: '98%',
    backgroundColor: appColors.styleBackground,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: windowWidth(6),
    marginVertical: windowHeight(6),
  },
  applyCoupon: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(12),
    width: '75%',
  },
  text: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMidium,
    color: appColors.primary,
  },
  textContainer: {
    marginHorizontal: windowWidth(12),
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: windowHeight(2),
  },
  content: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMidium,
    marginHorizontal: windowWidth(12),
    color: appColors.gray,
  },
});
