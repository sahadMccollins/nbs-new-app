import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productHorizontalStyles = StyleSheet.create({
  dealsView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowWidth(14),
    backgroundColor: appColors.productColor,
    marginHorizontal: windowWidth(14),
    borderRadius: windowWidth(10),
    marginVertical: windowHeight(6),
  },
  image: {
    height: windowHeight(90),
    width: windowWidth(110),
    borderRadius: windowWidth(6),
  },
  txtView: {
    marginLeft: windowWidth(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
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
  wishlist: {
    height: windowHeight(26),
    width: windowWidth(30),
    borderRadius: windowWidth(16),
    position: 'absolute',
    top: windowHeight(10),
    right: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  like: {
    width: windowWidth(256),
    height: windowHeight(26),
    bottom: windowHeight(0.5),
  },
  likeView: {
    top: windowHeight(-10),
  },
});
