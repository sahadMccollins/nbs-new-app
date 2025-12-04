import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {Coupon} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default cupon = props => {
  const {t, colors} = props;
  const {viewRTLStyle,textRTLStyle} = useValues();
  return (
    <View style={styles.mainView}>
      <View
        style={[styles.container, {backgroundColor: colors.cuponsbg}]}>
        <View style={[styles.couponView,{flexDirection:viewRTLStyle}]}>
          <Coupon />
          <TextInput
            placeholder={t('cart.applyCoupons')}
            placeholderTextColor={colors.text}
            cursorColor={appColors.primary}
            style={[styles.textInput, {color: colors.text,textAlign:textRTLStyle}]}></TextInput>
        </View>
      </View>
    </View>
  );
};
