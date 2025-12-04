import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderTrackerStyles = StyleSheet.create({
  container:{
    marginBottom:windowHeight(22)
  },
  timeLineView:{
    marginVertical:windowHeight(15)
  },
  row: {
    flexDirection: 'row',
    marginHorizontal:windowHeight(18),
  },
  order: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
    left: windowWidth(6),
    color:appColors.gray
  },
});
