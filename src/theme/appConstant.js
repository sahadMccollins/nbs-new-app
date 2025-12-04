import { Dimensions, PixelRatio, Platform } from 'react-native';

export let SCREEN_HEIGHT = Dimensions.get('window').height;
export let SCREEN_WIDTH = Dimensions.get('window').width;

export const IsIOS = Platform.OS == 'ios';
export const IsIPAD = Platform.isPad;

export const IsHaveNotch = SCREEN_HEIGHT > 750;

export const Isiphone12promax = Platform.OS == 'ios' && SCREEN_HEIGHT > 2778;

// export const IsAndroid = Platform.OS == "android";

export const windowHeight = height => {
  let tempHeight = SCREEN_HEIGHT * parseFloat(height / 667);
  return PixelRatio.roundToNearestPixel(tempHeight);
};

export const windowWidth = width => {
  let tempWidth = SCREEN_WIDTH * parseFloat(width / 480);
  return PixelRatio.roundToNearestPixel(tempWidth);
};

export const fontSizes = {
  FONT6: windowWidth(6),
  FONT7: windowWidth(7),
  FONT8: windowWidth(8),
  FONT9: windowWidth(9),
  FONT10: windowWidth(10),
  FONT11: windowWidth(11),
  FONT12: windowWidth(12),
  FONT13: windowWidth(13),
  FONT14: windowWidth(14),
  FONT15: windowWidth(15),
  FONT16: windowWidth(16),
  FONT17: windowWidth(17),
  FONT18: windowWidth(18),
  FONT18HALF: windowWidth(18.5),
  FONT19: windowWidth(19),
  FONT20: windowWidth(20),
  FONT21: windowWidth(21),
  FONT22: windowWidth(22),
  FONT23: windowWidth(23),
  FONT24: windowWidth(24),
  FONT25: windowWidth(25),
  FONT26: windowWidth(26),
  FONT28: windowWidth(28),
  FONT30: windowWidth(30),
  FONT32: windowWidth(32),
  FONT34: windowWidth(34),
  FONT36: windowWidth(36),
  FONT38: windowWidth(38),
  FONT40: windowWidth(40),
  FONT42: windowWidth(42),
  FONT46: windowWidth(46),
  FONT48: windowWidth(48),
  FONT50: windowWidth(50),
  FONT62: windowWidth(62),
  FONT64: windowWidth(64),
};
