import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default homeHeaderStyle = StyleSheet.create({
  mainView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(10),
    // paddingVertical: windowHeight(10),
    // height: windowHeight(50),
    height: windowHeight(50),
    // top: windowHeight(2),
  },
  mainLogoView: {
    marginHorizontal: windowWidth(6),
    justifyContent: 'center',
    bottom: 0
  },
  logoImg: {
    marginLeft: windowWidth(20),
    // width: windowWidth(150),
    width: windowWidth(110),
    resizeMode: 'contain',
  },
  drawer: {
    width: '6%',
    // height: windowHeight(36),
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    justifyContent: 'center',
  },
  darkLogoImg: {
    marginLeft: windowWidth(10),
    width: windowWidth(150),
    height: windowHeight(20),
    resizeMode: 'contain',
    marginTop: windowHeight(10),
  },


  cartWrapper: {
    // position: 'relative',
    marginHorizontal: windowWidth(6),
    justifyContent: 'center',
    // bottom: 0,
    position: 'relative'
  },

  cartBadge: {
    position: 'absolute',
    top: 6,
    right: -6,
    minWidth: windowWidth(23),
    height: windowHeight(14),
    borderRadius: 9,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  cartBadgeText: {
    color: '#fff',
    fontSize: fontSizes.FONT10,
    fontWeight: '600',
  },
});
