import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderDetailsStyles = StyleSheet.create({
  mainView: {
    paddingVertical: windowHeight(16),
    paddingHorizontal: windowWidth(14),
  },
  orderDetails: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    marginBottom: windowHeight(10),
    marginHorizontal:windowWidth(3)
  },
  title: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoRegular,
    color: appColors.grey,
  },
  details: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: windowHeight(4),
  },
  total: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: windowHeight(14),
    borderTopWidth: 2,
    paddingTop: windowHeight(14),
    borderTopColor: appColors.line,
  },
  totalAmount: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.LatoBold,
  },
  rowContainer:{
    flexDirection:'row'
  }
});
