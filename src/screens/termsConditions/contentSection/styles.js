import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default termsConditionStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(4),
  },
  name: {
    fontSize: windowHeight(15),
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  content: {
    marginTop: windowHeight(16),
    lineHeight: windowHeight(17),
    fontSize: fontSizes.FONT17,
    color: appColors.grey,
    fontFamily: appFonts.LatoRegular,
  },
  title: {
    marginTop: windowHeight(15),
    fontSize: windowHeight(15),
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  discription: {
    lineHeight: windowHeight(17),
    fontSize: fontSizes.FONT17,
    color: appColors.grey,
    fontFamily: appFonts.LatoRegular,
    marginHorizontal: windowWidth(10),
  },
  seperator: {
    marginVertical: windowHeight(6),
  },
  row: {
    flexDirection: 'row',
  },
  circle: {
    height: windowHeight(8),
    width: windowWidth(11),
    borderRadius: windowWidth(12),
    marginTop: windowHeight(8),
    backgroundColor: appColors.grey,
  },
});
