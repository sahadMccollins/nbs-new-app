import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default textInputStyles = StyleSheet.create({
  container: {
    margin: windowHeight(12),
    paddingHorizontal: windowWidth(7),
  },
});
