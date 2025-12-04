import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default sizeSectionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(18),
  },
  row: {
    marginHorizontal: windowHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoRegular,
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
  },
  sizeList: {
    marginTop: windowHeight(15),
  },
  size: {
    backgroundColor: appColors.styleBackground,
    paddingVertical:windowHeight(8),
    paddingHorizontal:windowWidth(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(6),
    marginLeft: windowWidth(14),
  },
  name: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
  },
});
