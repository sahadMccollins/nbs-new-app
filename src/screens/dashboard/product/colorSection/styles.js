import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default colorSectionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(8),
    marginHorizontal: windowHeight(20),
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
    color: appColors.black,
  },
  circle: {
    height: windowHeight(27),
    width: windowWidth(40),
    borderRadius: windowHeight(22),
    backgroundColor: 'red',
    marginHorizontal: windowHeight(8),
  },
  Separator: {
    height: windowHeight(10),
  },
  checkIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
});
