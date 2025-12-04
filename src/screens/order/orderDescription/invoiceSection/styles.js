import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default invoiceStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT18,
    borderBottomColor: appColors.divider,
    width: '96%',
    borderBottomWidth: 2,
    paddingBottom: windowHeight(10),
  },
  textContainer: {
    marginHorizontal: windowHeight(12),
    marginVertical: windowHeight(22),
  },
  area: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
    color: appColors.darkGray,
    paddingVertical: windowHeight(8),
  },
  address: {
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.LatoRegular,
    color: appColors.grey,
    marginVertical: windowHeight(5),
    lineHeight: windowHeight(18),
  },
  row: {
    flexDirection: 'row',
  },
  phone: {
    fontFamily: appFonts.LatoBold,
    color: appColors.darkGray,
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowHeight(4),
  },
  btnStyle: {
    height: '14.5%',
    width: '95%',
    marginHorizontal: windowHeight(6),
    borderColor: appColors.darkGray,
    borderRadius: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.9,
    marginVertical: windowHeight(12),
  },
  btnText: {
    color: appColors.darkGray,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.LatoMedium,
  },
});
