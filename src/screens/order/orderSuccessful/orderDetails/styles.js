import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    margin: windowWidth(18),
  },
  title: {
    marginVertical: windowHeight(10),
    color: appColors.darkGray,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
  },
  subTitle: {
    color: appColors.darkGray,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  emailReceipt: {
    top: windowHeight(4),
    color: appColors.grey,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoRegular,
  },
  discription: {
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.LatoRegular,
    color: appColors.grey,
    marginVertical: windowHeight(3.5),
    lineHeight: windowHeight(18),
  },
});
