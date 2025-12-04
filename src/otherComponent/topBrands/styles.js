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
  brandList: {
    marginTop: windowHeight(14),
    marginBottom: windowHeight(20),
  },
  brandSeparator: {
    height: windowHeight(15),
  },
  separator: {
    justifyContent: 'space-between',
  },
  brand: {
    backgroundColor: appColors.styleBackground,
    width: '30%',
    height: windowHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(6),
  },
  brandImg: {
    width: windowWidth(80),
    height: windowHeight(17),
  },
});
