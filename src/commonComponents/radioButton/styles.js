import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default radioButtonStyles = StyleSheet.create({
  radioButton: {
    marginTop: windowHeight(10),
    height: windowHeight(16),
    width: windowWidth(22),
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: windowHeight(8),
    width: windowWidth(12),
    borderRadius: 7,
    backgroundColor: appColors.primary,
  },
  scrollView: {
    paddingBottom: windowHeight(60),
  },
  name: {
    padding: windowHeight(10),
    marginHorizontal: windowWidth(9),
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoMidium,
    color: appColors.black,
  },
  row: {
    flexDirection: 'row',
  },
});
