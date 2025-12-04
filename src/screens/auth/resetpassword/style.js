import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default otpVerificationStyles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.white,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  titleText: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT30,
    color: appColors.black,
    fontWeight: '600',
  },
  headerStyle: {
    height: '15%',
    paddingTop: windowHeight(10),
    alignItems: 'flex-start',
  },
  buttonStyle: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
  },
  createNewMainView: {
    flexDirection: 'row',
    marginTop: windowHeight(20),
    alignSelf: 'center',
  },
  createNewText: {
    color: appColors.grey,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
  createNewUnderlineText: {
    color: appColors.darkGray,
    marginStart: windowWidth(5),
    textDecorationLine: 'underline',
    left: windowWidth(12),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalMainView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    alignItems: 'flex-end',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  otpStyle: {
    fontSize: fontSizes.FONT22,
    textAlign: 'center',
    backgroundColor: appColors.line,
    marginTop: windowHeight(15),
    height: windowHeight(52),
    width: windowWidth(64),
    borderRadius: windowWidth(6),
  },
  otpTitle1: {
    color: appColors.black,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
  },
  otpTitle2: {
    color: appColors.grey,
    fontSize: fontSizes.FONT19,
    marginBottom: windowHeight(10),
    fontFamily: appFonts.LatoRegular,
  },
  otpNumber: {
    fontSize: fontSizes.FONT20,
  },
  editButtonStyle: {
    marginStart: windowWidth(10),
    height: windowHeight(18),
    width: windowWidth(18),
  },
  numberView: {
    flexDirection: 'row',
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    height: '80%',
  },
});
