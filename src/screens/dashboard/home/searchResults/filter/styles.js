import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default filterStyles = StyleSheet.create({
  seperator: {
    height: windowHeight(1),
    backgroundColor: appColors.divider,
    marginVertical: windowHeight(15),
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(4),
  },
  brandsSeperator: {
    height: windowHeight(10),
  },
  mainStyle: {
    marginTop: windowHeight(15),
  },
  brand: {
    flex: 1 / 2,
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
  blankView: {
    height: windowHeight(8),
  },
  scrollView: {
    paddingBottom: '43%',
    paddingHorizontal: windowWidth(10),
  },
});
