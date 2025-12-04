import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default reviewSectionStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: windowHeight(9),
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    color: appColors.black,
  },
  allReview: {
    color: appColors.primary,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoMedium,
  },
  imageStyle: {
    height: windowHeight(45),
    width: windowWidth(65),
    resizeMode: 'contain',
    marginRight: windowWidth(12),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    color: appColors.black,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoMedium,
    marginVertical: windowHeight(3),
  },
  discription: {
    color: appColors.gray,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
    marginVertical: windowHeight(12),
  },
  sizeView: {
    flexDirection: 'row',
    backgroundColor: appColors.line,
    borderRadius: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(30),
    width: '35%',
    marginVertical: windowHeight(8),
  },
  size: {
    color: appColors.black,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
  sizeText: {
    fontFamily: appFonts.LatoMedium,
    color: appColors.search,
    paddingHorizontal: windowWidth(4),
    fontSize: fontSizes.FONT18,
  },
  textStyle: {
    paddingHorizontal: windowHeight(6),
    fontSize: fontSizes.FONT17,
    color: appColors.gray,
  },
  seperator: {
    width: '120%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginVertical: windowHeight(13),
  },
  line: {
    marginTop: windowHeight(4),
  },
  left: {
    left: windowWidth(2),
  },
});
