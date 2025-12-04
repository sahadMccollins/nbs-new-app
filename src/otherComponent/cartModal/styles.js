import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  margin: {
    padding: windowHeight(4),
    paddingHorizontal: windowWidth(20),
  },
  modal: {
    backgroundColor: appColors.white,
  },
  title: {
    fontSize: fontSizes.FONT22,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    lineHeight: windowHeight(46),
  },
  subTitle: {
    fontSize: fontSizes.FONT18,
    color: appColors.grey,
    fontFamily: appFonts.LatoBold,
  },
  bottomContainer: {
    width: '120%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    borderTopColor: appColors.divider,
    borderTopWidth: 1,
    backgroundColor: appColors.white,
    alignSelf: 'center',
    marginTop: windowHeight(30),
    padding: windowHeight(20),
    elevation: 10,
  },
  wishlistStyle: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
  },
  removeStyle: {
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT19,
    textTransform: 'uppercase',
  },
});
