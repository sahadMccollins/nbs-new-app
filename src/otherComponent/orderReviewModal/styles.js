import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default orderReviewStyles = StyleSheet.create({
  mainContainer: {
    //padding: windowWidth(20),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: appColors.white,
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(10),
  },
  subTitle: {
    fontSize: fontSizes.FONT18,
    color: appColors.grey,
    fontFamily: appFonts.LatoMedium,
    marginBottom: windowHeight(12),
  },
  textInput: {
    borderColor: appColors.divider,
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(8),
    height: windowHeight(100),
    paddingHorizontal: windowWidth(20),
  },
  paddingBottom: {
    padding: windowWidth(20),
    paddingBottom: windowHeight(100),
  },
});
