import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default biggestDealStyles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(30),
    marginBottom:windowHeight(10)
  },
  biggestDeals: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(20),
  },
  container: {
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(14),
    flexDirection: 'row',
  },
  imageView: {
    marginLeft: windowWidth(10),
    backgroundColor: appColors.divider,
    // padding: windowWidth(14),
    padding: windowWidth(8),
    borderRadius: windowWidth(4),
  },
  image: {
    // width: windowWidth(100),
    // height: windowHeight(20),
    // resizeMode: 'contain',
    width: windowWidth(200),
    height: windowHeight(80),
    resizeMode: 'contain'
  },
});
