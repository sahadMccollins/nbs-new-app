import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productDescriptionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(22),
  },
  name: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    color: appColors.darkGray,
  },
  content: {
    fontFamily: appFonts.LatoRegular,
    color: appColors.gray,
    fontSize: fontSizes.FONT18,
    marginVertical: windowHeight(6),
  },
  row: {
    flexDirection: 'row',
    top: windowHeight(6),
  },
  rating: {
    color: appColors.gray,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowHeight(6),
    fontSize: fontSizes.FONT18,
  },
  priceView: {
    flexDirection: 'row',
    marginTop: windowHeight(8),
  },
  discountPrice: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
  },
  price: {
    color: appColors.grey,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(10),
    textDecorationLine: 'line-through',
  },
  discount: {
    color: appColors.primary,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
  },
  text: {
    fontFamily: appFonts.LatoBold,
    fontSize: appFonts.FONT20,
    color: appColors.savings,
  },

  featureItem: {
    flexDirection: "row",
    // alignItems: "flex-start",
    alignItems: "center",
    marginVertical: windowHeight(4),
  },
  bullet: {
    color: "#d00",
    marginRight: 8,
    fontSize: fontSizes.FONT20,
  },
  highlightText: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
    marginTop: windowHeight(15),
    marginBottom: windowHeight(6),
  }
});
