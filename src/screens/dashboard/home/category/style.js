import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default categoryStyles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: windowWidth(10),
    marginVertical: windowHeight(3),
    flexDirection: 'row',
    //marginTop: windowHeight(6),
  },
  categoryView: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: windowWidth(10),
    marginLeft: windowWidth(20),
  },
  imageView: {
    backgroundColor: appColors.divider,
    width: windowWidth(80),
    // height: windowHeight(58),
    height: windowHeight(50),
    borderRadius: windowWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImg: {
    width: windowWidth(60),
    height: windowHeight(60),
  },
  nameView: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoBold,
    marginTop: windowHeight(5),
  },
});
