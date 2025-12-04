import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default emptyCartStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartEmpty: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    marginTop: windowHeight(20),
    color: appColors.white,
  },
  addCart: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
    textAlign: 'center',
    paddingHorizontal: windowWidth(40),
    marginTop: windowHeight(6),
  },
  btnView: {
    marginVertical: windowHeight(22),
    padding: windowHeight(10),
    marginHorizontal: windowHeight(12),
    backgroundColor: appColors.primary,
    width: '85%',
    borderRadius: windowHeight(4),
    alignItems:'center',
    justifyContent:'center'
  },
  btn: {
    color: appColors.white,
    alignSelf: 'center',
    fontSize: fontSizes.FONT22,
  },
  blankView: {
    height: windowHeight(12),
  },
});
