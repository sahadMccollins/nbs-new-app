import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
export default categoryStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    justifyContent: 'space-evenly',
    marginHorizontal: windowWidth(16),
    marginTop: windowHeight(20),
  },
  seperator: {
    backgroundColor: 'red',
    width: '30%',
  },
});
