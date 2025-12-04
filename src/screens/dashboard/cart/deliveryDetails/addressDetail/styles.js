import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default addressDetailStyles = StyleSheet.create({
  mainView: {
    marginVertical: windowHeight(10),
    paddingHorizontal: windowWidth(28),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowHeight(14),
  },
  row: {
    flexDirection: 'row',
  },
  radioButton: {
    marginTop: windowHeight(3),
    height: windowHeight(16),
    width: windowWidth(22),
    backgroundColor: appColors.styleBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: appColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: windowHeight(6),
    width: windowWidth(9),
    borderRadius: 7,
    backgroundColor: appColors.primary,
  },
  area: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
    marginHorizontal: windowWidth(20),
  },
  addressView: {
    marginHorizontal: windowWidth(20),
    paddingHorizontal: windowWidth(20),
  },
  address: {
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.LatoMidium,
    color: appColors.grey,
    lineHeight: windowHeight(19),
    marginVertical: windowHeight(6),
  },
  phone: {
    color: appColors.black,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
  },
  textStyle: {
    paddingVertical: windowHeight(7),
    paddingHorizontal: windowWidth(12),
    backgroundColor: appColors.white,
    fontSize: fontSizes.FONT18,
    textTransform: 'uppercase',
    fontFamily: appFonts.LatoMidium,
    color: appColors.grey,
  },
  serViceView: {
    backgroundColor: appColors.primary,
    height: windowHeight(24),
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    right: '30%',
  },
  service: {
    color: appColors.white,
    textTransform: 'uppercase',
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT16,
  },
  seperator: {
    padding: windowHeight(10),
  },
});
