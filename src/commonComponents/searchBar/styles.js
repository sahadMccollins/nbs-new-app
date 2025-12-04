import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default searchBarStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: windowHeight(6),
    alignItems: 'center',
    marginHorizontal: windowWidth(12),
  },
  camera: {
    height: windowHeight(45),
    width: windowWidth(400),
    backgroundColor: appColors.styleBackground,
    //marginLeft: windowWidth(15),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: windowWidth(14),
    borderRadius: windowWidth(10),
    justifyContent: 'space-between',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: windowWidth(6),
    width: windowWidth(320),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoRegular,
  },
  filter: {
    height: windowHeight(33),
    width: windowWidth(48),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(3),
    marginHorizontal: windowWidth(10),
  },
});
