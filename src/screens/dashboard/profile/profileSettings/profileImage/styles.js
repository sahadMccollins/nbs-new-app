import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default profileImageStyles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
  },
  image: {
    width: windowWidth(100),
    height: windowHeight(100),
  },
  edit: {
    position: 'absolute',
    width: windowHeight(22),
    height: windowHeight(22),
    backgroundColor: appColors.white,
    bottom: 6,
    alignSelf: 'center',
    right: 0,
    elevation: 4,
    borderRadius: windowHeight(11),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
