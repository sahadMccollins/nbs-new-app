import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default headetStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: windowHeight(10),
    alignItems: 'center',
  },
  camera: {
    height: windowHeight(45),
    width: windowWidth(400),
    backgroundColor: appColors.styleBackground,
    marginLeft: windowWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: windowWidth(12),
    borderRadius: windowWidth(10),
    justifyContent: 'space-between',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: windowWidth(6),
    width: windowWidth(280),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoRegular,
  },
});
