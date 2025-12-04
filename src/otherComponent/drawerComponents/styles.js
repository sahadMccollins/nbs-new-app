import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default drawerComponentStyles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.divider,
    // paddingHorizontal: windowWidth(24)
    marginTop: windowHeight(40),
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(2),
    borderBottomWidth: 1.5,
    padding: windowHeight(10),
    borderBottomColor: appColors.line,
    marginBottom: windowHeight(2),
  },
  img: {
    width: windowWidth(60),
    height: windowHeight(50),
  },
  nameView: {
    marginLeft: windowWidth(20),
    width: windowWidth(230),
  },
  name: {
    marginHorizontal: windowWidth(15),
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoBold,
    color: appColors.black,
  },
  email: {
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.mulish,
    color: appColors.content,
  },
  switchView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  supportView: {
    height: windowHeight(140),
    width: windowWidth(320),
    marginTop: windowHeight(30),
    marginBottom: windowHeight(14),
    borderRadius: windowHeight(14),
    padding: windowHeight(16),
  },
  supportTxt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
    color: colors.text,
  },
  reactOut: {
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.LatoBold,
    color: appColors.content,
    width: windowWidth(300),
    marginTop: windowHeight(6),
  },
  contactUs: {
    marginTop: windowHeight(10),
    height: windowHeight(34),
    width: windowWidth(130),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(4),
  },
  contactUsTxt: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.mulishBold,
    color: appColors.white,
  },
  onStyle: {
    backgroundColor: appColors.primary,
  },
  switch: {
    backgroundColor: appColors.switch,
  },
  menuItem: {
    backgroundColor: appColors.white,
  },
  logoutBtn:{
    marginBottom:windowHeight(20)
  }

});
