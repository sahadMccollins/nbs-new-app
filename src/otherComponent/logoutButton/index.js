import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {t} from 'i18next';
import styles from './styles';

export default function logOut(props) {
  const {navigation} = props;
  const {colors} = useTheme();

  const onLogoutBtn = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onLogoutBtn}
      style={[
        styles.btnContainer,
        {backgroundColor: colors.background, borderColor: colors.text},
      ]}>
      <Text style={[styles.btnText, {color: colors.text}]}>
        {t('profile.logOut')}
      </Text>
    </TouchableOpacity>
  );
}
