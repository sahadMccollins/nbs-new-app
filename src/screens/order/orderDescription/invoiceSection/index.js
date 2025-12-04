import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Divider} from '@commonComponents';
import OrderDetails from '../../../dashboard/cart/orderDetails';
import { useValues } from '@App';

export default invoiceSection = props => {
  const {t, colors} = props;
  const {viewRTLStyle,textRTLStyle,isRTL} = useValues()
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            {borderBottomColor: colors.brandsBg, color: colors.text,textAlign:textRTLStyle},
          ]}>
          {t('ShippingDetails.ShippingDetails')}
        </Text>
        <Text style={[styles.area, {color: colors.text,textAlign:textRTLStyle}]}>
          {t('ShippingDetails.area')}
        </Text>
        <Text style={[styles.address, {color: colors.subText,textAlign:textRTLStyle} , isRTL ? {width:'100%'} : {width:"48%"}]}>
          {t('orderSuccess.address')}
        </Text>
        <View style={[styles.row,{flexDirection:viewRTLStyle}]}>
          <Text style={[styles.phone, {color: colors.text,textAlign:textRTLStyle}]}>
            {t('ShippingDetails.phoneNo')}
          </Text>
          <Text>
          :
          </Text>
          <Text style={[styles.phone, {color: colors.text,textAlign:textRTLStyle}]}>903-239-1284</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            {borderBottomColor: colors.brandsBg, color: colors.text,textAlign:textRTLStyle},
          ]}>
          {t('ShippingDetails.priceDetails')}
        </Text>
        <OrderDetails t={t} colors={colors} />
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.btnStyle,
            {borderColor: colors.text, backgroundColor: colors.card},
          ]}>
          <Text style={[styles.btnText, {color: colors.text}]}>
            {t('ShippingDetails.downloadInvoice')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
