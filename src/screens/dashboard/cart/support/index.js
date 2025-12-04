import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Return, Support, SecurePayment} from '@utils/icons';
import {useValues} from '@App';

export default supportOptions = props => {
  const {t, colors} = props;
  const {viewRTLStyle} = useValues();

  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      <View style={styles.option}>
        <View style={[styles.optionImage, {backgroundColor: colors.cuponsbg}]}>
          <Return />
        </View>
        <Text style={[styles.optionText, {color: colors.text}]}>
          {t('cart.dayReturn')}
        </Text>
      </View>
      <View style={styles.option}>
        <View style={[styles.optionImage, {backgroundColor: colors.cuponsbg}]}>
          <Support />
        </View>
        <Text style={[styles.optionText, {color: colors.text}]}>
          {t('cart.support')}
        </Text>
      </View>
      <View style={styles.option}>
        <View style={[styles.optionImage, {backgroundColor: colors.cuponsbg}]}>
          <SecurePayment />
        </View>
        <Text style={[styles.optionText, {color: colors.text}]}>
          {t('cart.securePayment')}
        </Text>
      </View>
    </View>
  );
};
