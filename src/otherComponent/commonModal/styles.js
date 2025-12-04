import {StyleSheet} from 'react-native';

export default commonModalStyles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  subView: {
    width: '100%',
    height: '100%',
  },
});
