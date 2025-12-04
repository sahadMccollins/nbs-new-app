import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default withWishlistStyles = StyleSheet.create({
  dropDowns: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: windowHeight(8),
  },
  dropDownValue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edeff473',
    paddingHorizontal: windowWidth(18),
    paddingVertical: windowHeight(4),
    borderRadius: windowWidth(4),
  },
  dropDown: {
    marginHorizontal: windowWidth(2),
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT18,
    right: windowWidth(4),
  },
  line: {
    width: '94%',
    height: windowHeight(1),
    backgroundColor: appColors.line,
    marginTop: windowHeight(10),
    marginBottom: windowHeight(8),
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
  },
  optionText: {
    marginHorizontal: windowWidth(10),
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoBold,
    top: windowHeight(-2),
  },
  divider: {
    width: windowWidth(2),
    height: windowHeight(14),
    marginRight: windowWidth(10),
  },
});
