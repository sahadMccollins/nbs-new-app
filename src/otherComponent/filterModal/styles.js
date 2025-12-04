import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: appColors.white,
  },
  modalView: {
    marginVertical: windowWidth(12),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(15),
  },
  heading: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
    fontWeight: '500',
  },
  blankView: {
    height: windowHeight(1.5),
  },
});
