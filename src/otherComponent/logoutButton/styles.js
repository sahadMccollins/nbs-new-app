import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default logoutStyles = StyleSheet.create({
  btnText: {
    fontSize: fontSizes.FONT22,
    textTransform: 'uppercase',
    alignSelf: 'center',
    fontFamily: appFonts.LatoMedium,
    color: appColors.grey,
  },
  btnContainer: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(18),
    borderColor: appColors.black,
    borderWidth: 1,
    borderRadius: windowHeight(4),
    marginTop: windowHeight(25),
    marginHorizontal: windowWidth(25),
  },


  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    borderRadius: windowHeight(12),
    paddingVertical: windowHeight(24),
    paddingHorizontal: windowWidth(20),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modalTitle: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
    marginBottom: windowHeight(12),
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoRegular,
    textAlign: 'center',
    marginBottom: windowHeight(24),
    lineHeight: 22,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: windowWidth(12),
  },
  modalBtn: {
    flex: 1,
    paddingVertical: windowHeight(12),
    borderRadius: windowHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    borderColor: appColors.grey,
  },
  confirmBtn: {
    backgroundColor: appColors.red,
    borderWidth: 0,
  },
  modalBtnText: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoBold,
    textTransform: 'uppercase',
  },
});
