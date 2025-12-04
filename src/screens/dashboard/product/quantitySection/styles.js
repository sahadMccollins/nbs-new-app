import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default quantitySectionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(7),
    marginHorizontal: windowHeight(20),
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
    color: appColors.black,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: appColors.styleBackground,
    marginVertical: windowHeight(12),
    width: '50%',
    justifyContent: 'space-around',
    borderRadius: windowHeight(2.5),
  },
  mainView: {
    margin: windowHeight(8),
    marginVertical: windowHeight(10),
    height: windowHeight(22),
    width: windowWidth(29),
    borderColor: appColors.black,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(2.5),
  },
  text: {
    fontSize: fontSizes.FONT22,
    alignSelf: 'center',
    justifyContent: 'center',
    color: appColors.black,
  },
});
