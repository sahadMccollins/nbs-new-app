import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '@App';

export default function addNewCard(props) {
  const {t, colors} = props;
  const {viewRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.mainView,
        {
          backgroundColor: colors.card,
          borderTopColor: colors.line,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Text style={[styles.cancel, {color: colors.text}]}>
        {t('orderFilter.back')}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.navigation.goBack()}
        style={[props.style, styles.button]}>
        <Text style={styles.buttonText}>{t('paymentCard.addNewCard')}</Text>
      </TouchableOpacity>
    </View>
  );
}
