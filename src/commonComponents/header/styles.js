import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default headerStyle = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: windowHeight(60),
    height: windowHeight(50),
    paddingHorizontal: windowWidth(20),
    paddingTop: windowHeight(10),
  },
  first: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
  },
  text1: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT24,
  },
  text2: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT18,
    color: appColors.grey,
  },
  cart: {
    flexDirection: 'row',
  },
  wishlist: {
    marginHorizontal: windowWidth(20),
  },
  share: {
    marginHorizontal: windowWidth(4),
  },
  search: {
    paddingHorizontal: windowWidth(7),
    right: windowWidth(8),
    marginBottom: windowHeight(-2),
  },
  cartIcon: { bottom: 2 },

  cartWrapper: {
    position: 'relative',
  },

  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    minWidth: windowWidth(23),
    height: windowHeight(14),
    borderRadius: 9,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  cartBadgeText: {
    color: '#fff',
    fontSize: fontSizes.FONT10,
    fontWeight: '600',
  },

});
