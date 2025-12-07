import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productStyles = StyleSheet.create({
  img: {
    height: windowHeight(170),
    width: windowWidth(216),
    borderRadius: windowWidth(6),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(10),
  },
  priceView: {
    flexDirection: 'row',
    marginTop: windowHeight(4),
    // justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  discountPrice: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
  },
  price: {
    color: appColors.grey,
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(20),
    // marginRight: windowWidth(20),
    textDecorationLine: 'line-through',
  },
  discount: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
  wishlist: {
    height: windowHeight(20),
    width: windowWidth(29),
    borderRadius: windowWidth(16),
    position: 'absolute',
    top: windowHeight(10),
    right: windowWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: windowHeight(2),
  },
  ratingsView: {
    marginTop: windowHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    width: windowWidth(17),
    height: windowHeight(17),
  },
  title: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
    marginRight: windowWidth(10),
  },
  like: {
    width: windowWidth(256),
    height: windowHeight(26),
    bottom: windowHeight(0.5),

  },
  newProduct: {
    position: 'absolute',
    backgroundColor: appColors.primary,
    color: appColors.white,
    paddingHorizontal: windowWidth(8),
    margin: windowHeight(6),
    fontSize: fontSizes.FONT13,
    fontFamily: appFonts.LatoBold,
    borderRadius: windowHeight(2),
  },
});
