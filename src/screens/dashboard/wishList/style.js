import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default wishlistStyles = StyleSheet.create({
  products: {
    width: windowWidth(145),
    height: windowHeight(100),
    marginVertical: windowHeight(10),
    resizeMode: 'contain',
  },
});
