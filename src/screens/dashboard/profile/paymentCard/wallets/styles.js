import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default walletStyles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(20),
  },
  title: {
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT22,
    paddingHorizontal: windowWidth(10),
    paddingBottom: windowHeight(8),
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(8),
    paddingVertical: windowHeight(18),
    marginHorizontal: windowWidth(10),
    backgroundColor: appColors.styleBackground,
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: windowHeight(24),
    width: windowWidth(90),
    resizeMode: 'contain',
    margin: windowHeight(2),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
  },
  balance: {
    fontSize: fontSizes.FONT17,
    color: appColors.grey,
    fontFamily: appFonts.LatoRegular,
    marginHorizontal: windowWidth(4),
  },
  payment: {
    color: appColors.black,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT17,
  },
  delinkView: {
    padding: windowHeight(8),
    marginHorizontal: windowWidth(10),
  },
  deLink: {
    fontSize: fontSizes.FONT17,
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
  },
  amount: {
    color: appColors.black,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoBold,
  },
});
