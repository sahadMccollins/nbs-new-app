import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default subCategoryStyles = StyleSheet.create({
  mainView: {
    marginBottom: windowWidth(20),
  },
  category: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(12),
    alignItems: 'center',
  },
  categoryName: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  innerCat: {
    fontSize: fontSizes.FONT19,
    marginLeft: windowWidth(30),
    marginTop: windowHeight(10),
  },
});
