import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default expectedDeliveryStyles = StyleSheet.create({
  mainView: {
    paddingVertical: windowHeight(6),
    paddingHorizontal: windowWidth(10),
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.divider,
    padding: windowHeight(15),
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
  seperator: {
    marginVertical: windowHeight(12),
  },
  name: {
    color: appColors.grey,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  deliveryText: {
    color: appColors.black,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    marginHorizontal:windowWidth(4)
  },
  date: {
    color: appColors.savings,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT18,
  },
  scrollView: {
    paddingBottom: windowHeight(40),
  },
});
