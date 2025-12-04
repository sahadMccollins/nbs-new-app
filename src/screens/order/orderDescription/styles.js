import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';

export default orderDescriptionStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: '100%',
    height: windowHeight(145),
    resizeMode: 'cover',
  },
  headerView: {
    // position: 'absolute',
  },
  containerStyle: {
    paddingBottom: windowHeight(22),
  },
});
