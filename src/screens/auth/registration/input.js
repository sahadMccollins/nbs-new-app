import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {Input, Button} from '@commonComponents';
import {fontSizes} from '@theme/appConstant';
import SocialLogin from '../login/socialLogin';
import {useValues} from '@App';
const input = ({
  t,
  colors,
  onChange,
  goToRegistration,
  onSignUp,
  errors,
  setLoading,
  form,
}) => {
  const {textRTLStyle, viewRTLStyle} = useValues();
  return (
    <View style={styles.subView}>
      <Text
        style={[
          styles.titleText,
          {color: colors.text, textAlign: textRTLStyle},
        ]}>
        {t('authComman.hey')}
      </Text>
      <Text
        style={[
          styles.titleText,
          {color: colors.text, textAlign: textRTLStyle},
        ]}>
        {t('register.signUpNow')}
      </Text>
      <Input
        placeholder={t('register.firstName')}
        value={form.name}
        onChangeText={value => {
          onChange({name: 'firstName', value});
        }}
        error={errors.firstName}
      />
      <Input
        placeholder={t('register.lastName')}
        value={form.name}
        onChangeText={value => {
          onChange({name: 'lastName', value});
        }}
        error={errors.lastName}
      />
      <Input
        placeholder={t('register.email')}
        value={form.email}
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        error={errors.email}
      />
      <Input
        placeholder={t('authComman.password')}
        value={form.password}
        error={errors.password}
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
        hidePassword
      />
      <View style={styles.blankView}></View>
      <Button
        text={t('register.signUp')}
        style={styles.buttonStyle}
        fontSize={fontSizes.FONT22}
        onPress={onSignUp}
      />
      {/* <SocialLogin t={t} setLoading={setLoading} colors={colors} /> */}
      <View style={[styles.createNewMainView, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.createNewText}>
          {t('authComman.alreadyHaveAccount')}
        </Text>
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
};

export default input;
