import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default cartHorizontalStyles = StyleSheet.create({
  dealsView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.productColor,
    paddingHorizontal: windowWidth(12),
    borderRadius: windowWidth(10),
  },
  image: {
    height: windowHeight(90),
    width: windowWidth(110),
    borderRadius: windowWidth(6),
  },
  txtView: {
    marginLeft: windowWidth(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    padding: windowHeight(12),
  },
  title: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  brand: {
    color: appColors.grey,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoMedium,
  },
  priceView: {
    flexDirection: 'row',
    marginTop: windowHeight(4),
  },
  discountPrice: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
  },
  price: {
    color: appColors.grey,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(10),
  },
  discount: {
    color: appColors.primary,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
  },
});
