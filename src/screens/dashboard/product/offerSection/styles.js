import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default offerSectionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(18),
    marginHorizontal: windowHeight(20),
  },
  title: {
    marginVertical: windowHeight(4),
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    color: appColors.black,
  },
  txtView: {
    marginVertical: windowHeight(4),
  },
  offer: {
    fontSize: fontSizes.FONT18,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  discription: {
    marginVertical: windowHeight(4),
    fontSize: fontSizes.FONT16,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidium,
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(8),
  },
  image: {
    height: windowHeight(37),
    width: windowWidth(180),
    justifyContent: 'center',
  },
  cupon: {
    padding: windowHeight(12),
    alignSelf: 'center',
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT14,
  },
  copyText: {
    padding: windowHeight(5),
    fontSize: fontSizes.FONT18,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidium,
  },
});
