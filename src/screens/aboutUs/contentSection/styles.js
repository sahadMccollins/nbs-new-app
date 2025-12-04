import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default contentSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: windowHeight(12),
  },
  title: {
    fontSize: fontSizes.FONT24,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  image: {
    marginVertical: windowHeight(12),
    height: windowHeight(120),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: windowHeight(4),
  },
  subTitle: {
    fontSize: fontSizes.FONT18,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    lineHeight: windowHeight(19),
  },
  discription: {
    marginTop: windowHeight(12),
    fontSize: fontSizes.FONT19,
    color: appColors.grey,
    lineHeight: windowHeight(20),
    fontFamily: appFonts.LatoRegular,
  },
  blankView: {
    height: windowHeight(12),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowHeight(8),
  },
  mainContainer: {
    backgroundColor: appColors.divider,
    width: '55%',
    paddingHorizontal: windowHeight(22),
    paddingVertical: windowWidth(15),
    right: windowWidth(22),
    borderRadius: windowHeight(2),
  },
  row: {
    flexDirection: 'row',
  },
  textStyle: {
    padding: windowHeight(5),
    left: windowWidth(8),
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT19,
    color: appColors.black,
  },
  content: {
    fontSize: fontSizes.FONT15,
    fontFamily: appFonts.LatoMidium,
    marginVertical: windowHeight(9),
    color: appColors.grey,
  },
  mainView: {
    backgroundColor: appColors.divider,
    padding: windowHeight(12),
  },
});
