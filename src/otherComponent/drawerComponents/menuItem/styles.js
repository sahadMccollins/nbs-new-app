import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default menuItemStyles = StyleSheet.create({
  txt: {
    marginLeft: windowWidth(20),
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
    color: appColors.black,
  },
  arrow: {
    borderWidth: 0.5,
    width: windowHeight(24),
    height: windowHeight(24),
    borderRadius: windowHeight(12),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(26),
    height: windowHeight(68),
    width: '100%',
    justifyContent: 'space-between',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  drawerIcon: {
    width: windowWidth(30),
    height: windowHeight(22),
    justifyContent: 'center',
  },
  background: {
    backgroundColor: appColors.drawerBg,
    width: windowHeight(16),
    height: windowHeight(16),
    position: 'absolute',
    borderRadius: windowHeight(8),
    bottom: 0,
    right: 4,
  },

  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: appColors.border,
  },
});
