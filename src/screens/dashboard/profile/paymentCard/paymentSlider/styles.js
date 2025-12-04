import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default paymentSliderStyles = StyleSheet.create({
  title: {
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(14),
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.LatoBold,
  },
  container: {
    // paddingHorizontal: windowWidth(10),
    flexDirection: 'row',
  },
  containerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: windowHeight(160),
    width: windowWidth(320),
    borderRadius: windowWidth(12),
    marginVertical: windowHeight(10),
    marginHorizontal: windowWidth(10),
  },
  textView: {
    position: 'absolute',
    paddingVertical: windowHeight(20),
    width: '95%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chipImg: {
    height: windowHeight(30),
    width: windowWidth(50),
    borderRadius: windowHeight(5),
    marginVertical: windowHeight(10),
  },
  number: {
    marginVertical: windowHeight(6),
    fontSize: fontSizes.FONT22,
    color: appColors.white,
    fontFamily: appFonts.LatoBold,
  },
  margin: {
    marginHorizontal: windowWidth(30),
  },
  textStyle: {
    fontSize: fontSizes.FONT20,
    color: appColors.white,
    fontFamily: appFonts.LatoBold,
  },
  blankView: {
    height: windowHeight(10),
  },
  text: {
    fontSize: fontSizes.FONT17,
    color: appColors.white,
    fontFamily: appFonts.LatoBold,
    textTransform: 'uppercase',
  },
  validText: {
    fontSize: fontSizes.FONT10,
    color: appColors.white,
    fontFamily: appFonts.LatoMedium,
    width: '25%',
  },
  numberText: {
    color: appColors.white,
    left: windowWidth(8),
  },
  btnContainer: {
    paddingHorizontal: windowWidth(18),
    paddingVertical: windowHeight(6),
    backgroundColor: appColors.divider,
    borderRadius: windowHeight(6),
    marginHorizontal: windowWidth(12),
  },
  btnText: {
    textTransform: 'uppercase',
    color: appColors.grey,
    fontSize: fontSizes.FONT17,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
