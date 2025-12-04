import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default paymentMethodStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    margin: windowHeight(12),
    paddingHorizontal: windowWidth(8),
  },
  title: {
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT22,
    marginVertical: windowHeight(9),
  },
  image: {
    height: windowHeight(30),
    width: windowWidth(30),
    resizeMode: 'contain',
  },
  mainView: {
    backgroundColor: appColors.divider,
    padding: windowHeight(10),
    marginVertical: windowHeight(6),
    borderRadius: windowHeight(4),
    flexDirection: 'row',
    paddingHorizontal: windowWidth(22),
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  radioButton: {
    marginTop: windowHeight(8),
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
  name: {
    padding: windowHeight(6),
    left: windowWidth(12),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMidium,
    color: appColors.black,
  },
  scrollView: {
    // paddingBottom: windowHeight(20),
  },
});
