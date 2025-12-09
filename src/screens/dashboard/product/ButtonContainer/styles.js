import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default buttonContainerStyles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: windowHeight(60),
    width: '100%',
    paddingVertical: windowHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    borderTopColor: appColors.divider,
    borderTopWidth: 1,
  },
  text: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    color: appColors.darkGray,
    marginHorizontal: windowHeight(8),
  },
  order: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: appColors.divider,
  },
  cartText: {
    color: appColors.primary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowHeight(8),
    top: windowHeight(5),
  },


  qtyButton: {
    width: windowHeight(20),
    height: windowHeight(20),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },

  qtyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: appColors.primary,
  },

  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    color: appColors.primary,
    minWidth: 20,
    textAlign: 'center',
  },

  // pillContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: windowWidth(10),
  //   // paddingHorizontal: windowWidth(18),
  //   // paddingVertical: windowHeight(6),
  //   borderRadius: windowHeight(50),
  //   // backgroundColor: appColors.styleBackground,
  //   backgroundColor: "red"
  // },

  pillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.styleBackground,
    // paddingHorizontal: windowWidth(10),
    // paddingVertical: windowHeight(6),
    borderRadius: windowHeight(50), // Full pill
    borderWidth: 1,
    borderColor: appColors.primary,
  },
  leftMainView: {
    height: windowHeight(26),
    width: windowWidth(45),
    // borderColor: appColors.black,
    // borderWidth: 1,


    borderRightColor: appColors.primary,
    borderLeftWidth: 0,

    // No border on other sides
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 0,


    alignItems: 'center',
    justifyContent: 'center',

    borderTopLeftRadius: windowHeight(50),
    borderBottomLeftRadius: windowHeight(50),

    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightMainView: {
    height: windowHeight(26),
    width: windowWidth(45),

    borderLeftColor: appColors.primary,
    borderLeftWidth: 1,

    // No border on other sides
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,

    alignItems: 'center',
    justifyContent: 'center',

    borderTopRightRadius: windowHeight(50),
    borderBottomRightRadius: windowHeight(50),

    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },




  customMainView: {
    height: windowHeight(22),
    width: windowWidth(29),
    borderColor: appColors.styleBackground,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(50),       // 🔥 rounded circle-like inside the pill
  },


  // customMainView: {
  //   // margin: windowHeight(8),
  //   // marginVertical: windowHeight(10),
  //   height: windowHeight(22),
  //   width: windowWidth(29),
  //   borderColor: appColors.black,
  //   borderWidth: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: windowHeight(2.5),
  // },
});
