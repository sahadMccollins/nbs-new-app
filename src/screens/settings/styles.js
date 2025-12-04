import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default settingStyles = StyleSheet.create({
  image: {
    height: '31%',
    width: '100%',
  },
  mainContainer: {
    paddingHorizontal: windowWidth(20),
    marginVertical: windowHeight(12),
  },
  title: {
    fontSize: fontSizes.FONT22,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    marginBottom: windowHeight(12),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: windowHeight(15),
  },
  name: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  discription: {
    fontSize: fontSizes.FONT19,
    color: appColors.gray,
    fontFamily: appFonts.LatoMedium,
    marginVertical: windowHeight(4),
  },
});
