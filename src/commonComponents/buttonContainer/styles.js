import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default buttonContainerStyles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    width: '100%',
    paddingVertical: windowHeight(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(25),
    alignItems: 'center',
    elevation: 10,
    borderTopColor: appColors.divider,
    borderTopWidth: 1,
  },
  text: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT22,
    color: appColors.darkGray,
  },
  order: {
    width: '45%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(35),
  },
  subText: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT15,
    color: appColors.grey,
  },
});
