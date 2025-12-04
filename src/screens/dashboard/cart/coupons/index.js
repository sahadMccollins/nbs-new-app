import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Coupon, SideArrow} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import styles from './style';

export default coupons = props => {
  const {t, colors, navigation} = props;
  const {viewRTLStyle, textRTLStyle, imageRTLStyle} = useValues();

  return (
    <View style={styles.mainView}>
      <View style={[styles.rowContainer,{flexDirection:viewRTLStyle}]}>
      <Text
        style={[
          styles.coupons,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {t('cart.coupons')}
      </Text>
      <Text style={styles.coupons}>:</Text>
      </View>
      <View
        style={[
          styles.arrowView,
          {backgroundColor: props.colors.cuponsbg, flexDirection: viewRTLStyle},
        ]}>
        <View style={[styles.couponView, {flexDirection: viewRTLStyle}]}>
          <Coupon />
          <TextInput
            placeholder={t('cart.applyCoupons')}
            placeholderTextColor={colors.text}
            cursorColor={appColors.primary}
            style={[
              styles.applyCoupon,
              {color: colors.text, textAlign: textRTLStyle},
            ]}></TextInput>
        </View>
        <View style={{transform: [{scaleX: imageRTLStyle}]}}>
          <SideArrow />
        </View>
      </View>
    </View>
  );
};
