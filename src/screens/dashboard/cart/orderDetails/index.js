import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import styles from './style';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default orderDetails = props => {
  const {t, colors, title, applyCoupon, paddingHorizontal, navigation} = props;
  const {viewRTLStyle, textRTLStyle, currSymbol, currValue} = useValues();

  return (
    <View
      style={[
        styles.mainView,
        {
          paddingHorizontal: paddingHorizontal
            ? paddingHorizontal
            : windowWidth(14),
        },
      ]}>
      {title && (
        <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
          <Text
            style={[
              styles.orderDetails,
              {color: colors.text, textAlign: textRTLStyle},
            ]}>
            {t('orderDetails.orderDetail')}
          </Text>
          <Text style={styles.orderDetails}> :</Text>
        </View>
      )}
      <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.title}>{t('orderDetails.bagTotal')}</Text>
        <Text style={styles.title}>
          {currSymbol}
          {(220.0 * currValue).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.title}>{t('orderDetails.bagSavings')}</Text>

        <Text style={[styles.title, {color: appColors.savings}]}>
          -{currSymbol}
          {(20.0 * currValue).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.title}>{t('orderDetails.couponDiscount')}</Text>
        {applyCoupon ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ApplyCoupon')}>
            <Text style={[styles.title, {color: appColors.primary}]}>
              {t('orderDetails.applyCoupon')}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.title}>
            {currSymbol}
            {(20.0 * currValue).toFixed(2)}
          </Text>
        )}
      </View>
      <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.title}>{t('orderDetails.delivery')}</Text>
        <Text style={styles.title}>
          {currSymbol}
          {(50.0 * currValue).toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          styles.total,
          {borderTopColor: colors.line, flexDirection: viewRTLStyle},
        ]}>
        <Text style={[styles.totalAmount, {color: colors.text}]}>
          {t('orderDetails.totalAmount')}
        </Text>
        <Text style={[styles.totalAmount, {color: colors.text}]}>
          {currSymbol}
          {(270.0 * currValue).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
