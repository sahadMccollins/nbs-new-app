import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default buttonContainerStyles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: windowHeight(60),
    width: '100%',
    paddingVertical: windowHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    borderTopColor: appColors.divider,
    borderTopWidth: 1,
  },
  text: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    color: appColors.darkGray,
    marginHorizontal: windowHeight(8),
  },
  order: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: appColors.divider,
  },
  cartText: {
    color: appColors.primary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowHeight(8),
    top: windowHeight(5),
  },
});
