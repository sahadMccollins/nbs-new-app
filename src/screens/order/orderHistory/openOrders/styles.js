import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default openOrderStyles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(12),
    marginTop: windowHeight(20),
  },
  title: {
    fontSize: fontSizes.FONT24,
    color: appColors.darkGray,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(12),
  },
  row: {
    flexDirection: 'row',
  },
  mainView: {
    marginVertical: windowHeight(15),
    marginHorizontal: windowWidth(12),
  },
  imageStyle: {
    width: windowWidth(100),
    height: windowHeight(75),
    borderRadius: windowHeight(3),
    resizeMode: 'contain',
  },
  name: {
    color: appColors.darkGray,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT19,
  },
  textStyle: {
    color: appColors.grey,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(4),
  },
  viewDetails: {
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT17,
  },
  ongoingView: {
    height: windowHeight(26),
    width: '20%',
    backgroundColor: appColors.divider,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    marginTop: windowHeight(8),
  },
  text: {
    textTransform: 'uppercase',
    color: appColors.black,
    fontSize: fontSizes.FONT13,
    fontFamily: appFonts.LatoBold,
  },
  mapStyle: {
    height: windowHeight(75),
    width: '100%',
    marginTop: windowHeight(15),
    resizeMode: 'cover',
  },
  bottomView: {
    position: 'absolute',
    marginTop: windowHeight(22),
  },
  orderSeperator: {
    width: '120%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginVertical: windowHeight(20),
  },
  order: {
    fontSize: fontSizes.FONT27,
    fontFamily: appFonts.LatoBold,
  },
  date: {
    color: appColors.darkGray,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT16,
  },
  textContainer: {
    margin: windowWidth(12),
    right: windowWidth(10),
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
});
