import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Input, Button} from '@commonComponents';
import {windowHeight, fontSizes} from '@theme/appConstant';
import styles from './styles';
import appColors from '@theme/appColors';

export default debitCard = props => {
  const {t, colors} = props;
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <View style={styles.mainView}>
      <Input
        placeholder={t('paymentDetails.nameOnCard')}
        onChangeText={cardName => setCardName(cardName)}
        value={cardName}
        height={windowHeight(40)}
        top={windowHeight(10)}
        fontSize={fontSizes.FONT17}
      />
      <Input
        placeholder={t('paymentDetails.cardNumber')}
        onChangeText={cardNumber => setCardNumber(cardNumber)}
        height={windowHeight(40)}
        top={windowHeight(10)}
        fontSize={fontSizes.FONT17}
        value={cardNumber}
      />
      <View style={styles.conatiner}>
        <View style={styles.mainView}>
          <View
            style={[styles.input, {backgroundColor: colors.productDarkColor}]}>
            <TextInput
              onChangeText={date => {
                setExpirationDate(date);
              }}
              placeholderTextColor={appColors.content}
              cursorColor={appColors.primary}
              style={[styles.textInput, {color: colors.text}]}
              value={expirationDate}
            />
          </View>
          <Text
            style={[
              styles.placeholder,
              {backgroundColor: colors.placeholderBg, color: colors.subText},
            ]}>
            {t('paymentDetails.expiration')}
          </Text>
        </View>
        <View style={styles.mainView}>
          <View
            style={[styles.input, {backgroundColor: colors.productDarkColor}]}>
            <TextInput
              onChangeText={cvv => {
                setCvv(cvv);
              }}
              value={cvv}
              placeholderTextColor={colors.subText}
              cursorColor={appColors.primary}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <Text
            style={[
              styles.placeholder,
              {
                color: colors.subText,
                backgroundColor: colors.placeholderBg,
              },
            ]}>
            {t('paymentDetails.cvv')}
          </Text>
        </View>
      </View>
      <Button
        text={'paymentDetails.makePayment'}
        style={styles.buttonStyle}
        fontSize={fontSizes.FONT20}
        t={t}
        onPress={props.onSelect}
      />
    </View>
  );
};
