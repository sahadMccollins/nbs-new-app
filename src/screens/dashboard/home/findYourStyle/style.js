import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default findYourStyleStyles = StyleSheet.create({
  headerView: {
    marginHorizontal: windowWidth(14),
  },
  style: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  superSale: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
  },
  scrollView: {
    paddingHorizontal: windowWidth(6),
    marginTop: windowHeight(10),
    flexDirection: 'row',
  },
  filterView: {
    marginLeft: windowWidth(10),
    paddingVertical: windowHeight(9),
    borderRadius: windowWidth(4),
    paddingHorizontal: windowWidth(14),
  },
  title: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
  },
  column: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(16),
    marginTop: windowHeight(20),
  },
  img: {
    height: windowHeight(170),
    width: windowWidth(216),
    borderRadius: windowWidth(6),
  },
  priceView: {
    flexDirection: 'row',
    marginTop: windowHeight(4),
  },
  discountPrice: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
  price: {
    color: appColors.grey,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(10),
    textDecorationLine: 'line-through',
  },
  discount: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
});
