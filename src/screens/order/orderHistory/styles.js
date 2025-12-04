import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';

export default orderDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    height: '28%',
    width: '100%',
    resizeMode: 'cover',
  },
  headerView: {
    position: 'absolute',
  },
  textStyle: {
    fontFamily: appFonts.LatoMedium,
  },
  mainContainer: {
    height: '100%',
    width: '100%',
  },
});
