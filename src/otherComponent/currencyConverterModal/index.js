import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {GlobalStyle} from '@style';
import {useTranslation} from 'react-i18next';
import {useValues} from '../../../App';
import {setValue} from '@utils/localStorage';

export function CurrencyConverter(props) {
  const {colors} = useTheme();
  const [currencys] = useState(Data.currencys);
  const {t} = useTranslation();
  const {setCurrSymbol, setCurrValue} = useValues();

  const changeCurrency = (curruncyIcon, curruncyValue) => {
    setCurrSymbol(curruncyIcon);
    setCurrValue(curruncyValue.toString());
    props.onPress();
    setValue('curruncySymbol', curruncyIcon);
    setValue('curruncyValue', curruncyValue);
    props.from === 'drawer' && props.navigation.toggleDrawer();
  };

  return (
    <View style={[GlobalStyle.modal, {backgroundColor: colors.background}]}>
      <Text style={[styles.text, {color: colors.text}]}>
        {t('multicurrencyModal.selectCurrency')}
      </Text>
      {currencys.map((item, key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.8}
          onPress={() => changeCurrency(item.key, item.value)}
          style={[styles.icon, {flexDirection: 'row'}]}>
          {item.icons}
          <Text
            style={[
              styles.text,
              {color: colors.text, marginLeft: windowWidth(20)},
            ]}>
            {t(item.name)}{' '}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
