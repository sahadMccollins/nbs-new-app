import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default addressTypeStyles = StyleSheet.create({
  container: {
    margin: windowHeight(25),
    paddingHorizontal: windowWidth(7),
  },
  title: {
    color: appColors.black,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(2),
  },
  radioButton: {
    marginTop: windowHeight(10),
    height: windowHeight(16),
    width: windowWidth(22),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
  },
  radioButtonIcon: {
    height: windowHeight(6),
    width: windowWidth(9),
    borderRadius: 7,
    backgroundColor: appColors.primary,
  },
  name: {
    padding: windowHeight(8),
    marginHorizontal: windowWidth(9),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
  },
  checkBox: {
    height: windowHeight(20),
    width: windowWidth(30),
  },
  textStyle: {
    paddingHorizontal: windowHeight(9),
    color: appColors.grey,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoReqular,
  },
});
