import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input, Button} from '@commonComponents';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';

export default function input({
  t,
  colors,
  onChange,
  errors,
  form,
  onclick,
  navigation,
}) {
  const {viewRTLStyle, textRTLStyle} = useValues();
  const goToRegistration = () => {
    navigation.replace('LoginScreen');
  };
  return (
    <View>
      <Text
        style={[
          styles.titleText,
          {color: colors.text, textAlign: textRTLStyle},
        ]}>
        {t('resetPassword.resetPassword')}
      </Text>
      <Input
        placeholder={t('resetPassword.currentPassword')}
        value={form.currentPassword}
        onChangeText={value => {
          onChange({name: 'currentPassword', value});
        }}
        error={errors.currentPassword}
      />
      <Input
        placeholder={t('resetPassword.newPassword')}
        value={form.newPassword}
        onChangeText={value => {
          onChange({name: 'newPassword', value});
        }}
        error={errors.newPassword}
        hidePassword
      />
      <Input
        placeholder={t('resetPassword.confirmPassword')}
        value={form.confirmPassword}
        onChangeText={value => {
          onChange({name: 'confirmPassword', value});
        }}
        error={errors.confirmPassword}
        hidePassword
      />
      <Button
        text={t('resetPassword.resetPasswordBtn')}
        style={styles.buttonStyle}
        fontSize={fontSizes.FONT22}
        onPress={() => onclick(true)}
        marginTop={20}
      />
      <View style={[styles.createNewMainView, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.createNewText}>{t('authComman.backTo')}</Text>
        <Text
          onPress={() => goToRegistration()}
          style={[
            styles.createNewText,
            styles.createNewUnderlineText,
            {color: colors.text},
          ]}>
          {t('authComman.signIn')}
        </Text>
      </View>
    </View>
  );
}
