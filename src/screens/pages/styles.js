import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default pagesStyles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(22),
  },
  headingView: {
    backgroundColor: appColors.divider,
    padding: windowHeight(12),
    borderRadius: windowHeight(4),
    marginBottom: windowHeight(8),
  },
  title: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
    lineHeight: windowHeight(22),
  },
  subTitle: {
    color: appColors.gray,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT16,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowHeight(5),
  },
  pageTitle: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
    lineHeight: windowHeight(24),
    textTransform: 'uppercase',
  },
  seperator: {
    marginVertical: windowHeight(6),
  },
});
