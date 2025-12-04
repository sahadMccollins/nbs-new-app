import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';

export const GlobalStyle = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
  },
  modal: {
    padding: windowWidth(20),
    borderTopStartRadius: windowWidth(20),
    borderTopEndRadius: windowWidth(20),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  container: {
    margin: windowWidth(24),
    marginHorizontal: windowHeight(20),
    
  },
});
