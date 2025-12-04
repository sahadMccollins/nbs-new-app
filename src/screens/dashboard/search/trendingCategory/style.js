import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default searchStyles = StyleSheet.create({
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(30),
  },
  name: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
    marginTop: windowHeight(10),
  },
  categorySeparator: {
    width: windowWidth(10),
  },
  category: {
    alignItems: 'center',
    width: windowWidth(140),
    bottom:windowHeight(10)
  },
  categoryImage: {
    width: windowWidth(140),
    height: windowHeight(160),
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: windowHeight(2),
  },
  categoryBackground: {
    width: windowWidth(140),
    height: windowHeight(110),
    backgroundColor: appColors.divider,
    position: 'absolute',
    borderRadius: 2,

  },
  categoryImg: {
    width: windowWidth(105),
    height: windowHeight(140),
  },
});
