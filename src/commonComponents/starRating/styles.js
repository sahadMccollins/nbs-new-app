import {StyleSheet} from 'react-native';
import appColors from '../../theme/appColors';

export default starRatingStyles = StyleSheet.create({
  myStarStyle: {
    color: appColors.rating,
    backgroundColor: 'transparent',
  },
  myEmptyStarStyle: {
    color: appColors.divider,
    backgroundColor: 'transparent',
  },
});
