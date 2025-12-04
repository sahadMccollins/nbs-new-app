import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default prodcuctStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    height: windowHeight(100),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxView: {
    height: windowHeight(100),
    width: '90%',
    backgroundColor: appColors.white,
    elevation: 2,
    borderRadius: windowHeight(4),
  },
  row: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: windowWidth(100),
    height: windowHeight(80),
    borderRadius: windowHeight(3),
    resizeMode: 'cover',
  },
  name: {
    color: appColors.darkGray,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT19,
  },
  textStyle: {
    color: appColors.grey,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(2),
  },
  textView: {
    margin: windowHeight(9),
    marginHorizontal: windowWidth(20),
  },
});
