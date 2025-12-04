import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default OrderDetails = props => {
  const {t, colors} = props;
  const {textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text
          style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
          {t('orderSuccess.orderDetails')}
        </Text>
        <Text
          style={[
            styles.subTitle,
            {color: colors.text, textAlign: textRTLStyle},
          ]}>
          {t('orderSuccess.yourOrder')}
        </Text>
        <Text
          style={[
            styles.emailReceipt,
            {color: colors.subText, textAlign: textRTLStyle},
          ]}>
          {t('orderSuccess.emailReceipt')}
        </Text>
        <Text
          style={[
            styles.subTitle,
            {
              marginTop: windowHeight(18),
              color: colors.text,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('orderSuccess.orderShip')}
        </Text>
        <Text
          style={[
            styles.discription,
            {color: colors.subText, textAlign: textRTLStyle},
            isRTL ? 0 : {width: '60%'},
          ]}>
          {t('orderSuccess.address')}
        </Text>
        <Text
          style={[
            styles.subTitle,
            {
              marginTop: windowHeight(12),
              color: colors.text,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('orderSuccess.paymentMethod')}
        </Text>
        <Text
          style={[
            styles.discription,
            {color: colors.subText, textAlign: textRTLStyle},
          ]}>
          {t('orderSuccess.googleUPI')}
        </Text>
      </View>
    </View>
  );
};
