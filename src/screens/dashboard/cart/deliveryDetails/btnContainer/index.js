import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default buttonContainer = props => {
  const {t, navigation} = props;

  console.log('Props is', navigation.navigate);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AddNewAddress');
      }}
      style={style.container}>
      <Text style={style.text}>{t('deliveryDetails.addNewAddress')}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    padding: windowHeight(12),
    marginHorizontal: windowWidth(26),
    marginTop: windowHeight(7),
    borderColor: appColors.primary,
    borderWidth: 1,
    borderRadius: windowHeight(4),
    marginVertical: windowHeight(20),
  },
  text: {
    textAlign: 'center',
    fontSize: fontSizes.FONT19,
    color: appColors.primary,
    fontFamily: appFonts.LatoMidium,
  },
});
