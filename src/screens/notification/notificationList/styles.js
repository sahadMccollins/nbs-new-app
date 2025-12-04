import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default notificationListStyles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(10),
  },
  mainView: {
    paddingVertical: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
  },
  image: {
    height: windowHeight(76),
    width: '25%',
    borderRadius: windowHeight(4),
    resizeMode: 'contain',
  },
  title: {
    width: '70%',
    lineHeight: windowHeight(16),
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
  },
  textContainer: {
    padding: windowHeight(10),
    marginHorizontal: windowWidth(5),
  },
  date: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoMidium,
    color: appColors.grey,
    marginVertical: windowHeight(3),
  },
  seperator: {
    width: '120%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
  },
  scrollView: {
    paddingBottom: '30%',
  },
});
