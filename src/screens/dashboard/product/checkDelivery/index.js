import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {GlobalStyle} from '@style';
import styles from './styles';
import appColors from '@theme/appColors';
import {Delivery} from '@assets/icons/delivery';
import {CahDelivery} from '@assets/icons/cashDelivery';
import {Refund} from '@assets/icons/refund';
import {useValues} from '@App';

export default CheckDelivery = props => {
  const {t, colors} = props;
  const {viewRTLStyle, textRTLStyle} = useValues();

  return (
    <View style={GlobalStyle.container}>
      <Text
        style={[
          styles.title,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {t('checkDelivery.CheckDelivery')}
      </Text>
      <Text
        style={[
          styles.discription,
          {color: props.colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('checkDelivery.content')}
      </Text>
      <View style={styles.mainView}>
        <View
          style={[
            styles.row,
            {
              backgroundColor: props.colors.cuponsbg,
              flexDirection: viewRTLStyle,
            },
          ]}>
          <TextInput
            cursorColor={appColors.primary}
            placeholder={t('checkDelivery.pinCode')}
            placeholderTextColor={props.colors.text}
            style={[styles.applyCoupon, {color: colors.text,textAlign:textRTLStyle}]}></TextInput>
          <Text style={styles.text}>{t('checkDelivery.check')}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={[styles.rowContainer,{flexDirection:viewRTLStyle}]}>
          <Delivery />
          <Text style={[styles.content, {color: props.colors.subText}]}>
            {t('checkDelivery.discription')}
          </Text>
        </View>
        <View style={[styles.rowContainer,{flexDirection:viewRTLStyle}]}>
          <CahDelivery />
          <Text style={[styles.content, {color: props.colors.subText}]}>
            {t('checkDelivery.discription1')}
          </Text>
        </View>
        <View style={[styles.rowContainer,{flexDirection:viewRTLStyle}]}>
          <Refund />
          <Text style={[styles.content, {color: props.colors.subText}]}>
            {t('checkDelivery.discription2')}
          </Text>
        </View>
      </View>
    </View>
  );
};
