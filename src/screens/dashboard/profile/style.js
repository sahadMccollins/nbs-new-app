import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default profileStyles = StyleSheet.create({
  scroll: {
    paddingBottom: windowHeight(140),
  },
  profile: {
    width: '100%',
    backgroundColor: appColors.productColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: windowHeight(10),
    paddingHorizontal: windowWidth(26),
  },
  profileImg: {
    width: windowWidth(110),
    height: windowHeight(110),
  },
  profileDetail: {
    marginHorizontal: windowWidth(20),
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
  },
  userEmail: {
    fontSize: fontSizes.FONT17,
    color: appColors.grey,
    fontFamily: appFonts.LatoMedium,
  },
  button: {
    width: '26%',
    backgroundColor: appColors.primary,
    height: windowHeight(20),
  },
});
