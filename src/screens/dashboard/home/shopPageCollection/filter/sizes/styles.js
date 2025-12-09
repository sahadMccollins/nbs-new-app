import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default sizeSectionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(8),
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(10),
  },
  sizeList: {
    marginTop: windowHeight(15),
  },
  sizeSeparator: {
    height: windowHeight(10),
  },
  size: {
    flex: 1 / 3,
    backgroundColor: appColors.styleBackground,
    height: windowHeight(40),
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
