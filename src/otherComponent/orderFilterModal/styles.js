import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {Button} from '@commonComponents';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: appColors.black,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.LatoBold,
    marginBottom: windowHeight(5),
  },
  margin: {
    paddingHorizontal: windowWidth(20),
    marginVertical: windowHeight(12),
  },
  modal: {
    backgroundColor: appColors.white,
  },
});
