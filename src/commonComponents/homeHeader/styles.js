import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

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
    width: '60%',
    justifyContent: 'center',
  },
  darkLogoImg: {
    marginLeft: windowWidth(10),
    width: windowWidth(150),
    height: windowHeight(20),
    resizeMode: 'contain',
    marginTop: windowHeight(10),
  },
});
