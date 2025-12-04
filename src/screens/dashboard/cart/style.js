import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default cartStyles = StyleSheet.create({
  products: {
    height: windowHeight(110),
    width: windowWidth(145),
    resizeMode: 'contain',
    bottom: 15,
  },

  details: {
    paddingBottom: windowHeight(150),
  },
});
