import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default couponStyles = StyleSheet.create({
  container: {
    width: '93%',
    alignSelf: 'center',
    backgroundColor: appColors.styleBackground,
    padding: windowWidth(6),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(19),
    borderRadius: windowWidth(6),
    marginTop: windowHeight(10),
    justifyContent: 'space-between',
  },
  couponView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(12),
    width: '87%',
    color: appColors.black,
  },
});
