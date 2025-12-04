import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default contentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginVertical: windowHeight(8),
    height: windowHeight(220),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: windowHeight(4),
  },
  title: {
    marginVertical: windowHeight(10),
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  discription: {
    fontSize: fontSizes.FONT19,
    color: appColors.grey,
    lineHeight: windowHeight(17),
    fontFamily: appFonts.LatoRegular,
  },
});
