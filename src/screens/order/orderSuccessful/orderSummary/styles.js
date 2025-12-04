import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderSummaryStyles = StyleSheet.create({
  mainView: {
    paddingVertical: windowHeight(6),
    paddingHorizontal: windowWidth(10),
  },
  title: {
    marginVertical: windowHeight(16),
    color: appColors.darkGray,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
  },
  row: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: '22%',
    height: windowHeight(70),
    borderRadius: windowHeight(3),
    resizeMode: 'contain',
  },
  container: {
    marginHorizontal: windowWidth(12),
  },
  textContainer: {
    padding: windowHeight(12),
  },
  orderSeperator: {
    width: '120%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginVertical: windowHeight(12),
  },
  name: {
    color: appColors.darkGray,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  price: {
    color: appColors.darkGray,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
  },
  textStyle: {
    color: appColors.grey,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
  },
});
