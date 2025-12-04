import {StyleSheet} from 'react-native';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sliderBack: {
    height: 6,
    backgroundColor: appColors.divider,
    borderRadius: 15,
  },
  sliderFront: {
    height: 8,
    backgroundColor: appColors.primary,
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    left: -10,
    width: 20,
    height: 20,
    position: 'absolute',
    backgroundColor: appColors.white,
    borderColor: appColors.primary,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    position: 'absolute',
    height: 10,
    width: 10,
    backgroundColor: appColors.primary,
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    top: -40,
    bottom: 20,
    backgroundColor: appColors.bgHighlight,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:10
  },
  labelText: {
    color: appColors.black,
    padding: 5,
    fontSize: fontSizes.FONT18,
    width: '100%',
    fontFamily: appFonts.LatoMedium,
  },
});
