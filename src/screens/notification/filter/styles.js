import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default filterStyles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: windowWidth(6),
    marginTop: -4,
    flexDirection: 'row',
  },
  filterView: {
    marginLeft: windowWidth(20),
    paddingVertical: windowHeight(8),
    borderRadius: windowWidth(4),
    paddingHorizontal: windowWidth(17),
    marginVertical: windowHeight(12),
  },
  title: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
  },
});
