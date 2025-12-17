import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Input, Button } from '@commonComponents';
import { fontSizes } from '@theme/appConstant';
import { useValues } from '@App';

const input = ({
  t,
  colors,
  onChange,
  submitQuoteForm,
  errors,
  loading,
  form,
}) => {
  const { textRTLStyle, viewRTLStyle } = useValues();
  return (
    <View style={styles.subView}>
      <Text
        style={[
          styles.titleText,
          { color: colors.text, textAlign: textRTLStyle },
        ]}>
        {t('requestQuoteModal.title')}
      </Text>
      <Input
        placeholder={t('requestQuoteModal.name')}
        value={form.name}
        onChangeText={value => {
          onChange({ name: 'name', value });
        }}
        error={errors.name}
      />
      <Input
        placeholder={t('requestQuoteModal.email')}
        value={form.email}
        onChangeText={value => {
          onChange({ name: 'email', value });
        }}
        error={errors.email}
      />
      <Input
        placeholder={t('requestQuoteModal.phoneNumber')}
        value={form.phoneNumber}
        onChangeText={value => {
          onChange({ name: 'phoneNumber', value });
        }}
        error={errors.phoneNumber}
      />
      <Input
        placeholder={t('requestQuoteModal.company')}
        value={form.company}
        onChangeText={value => {
          onChange({ name: 'company', value });
        }}
        error={errors.company}
      />
      <Input
        placeholder={t('requestQuoteModal.additional')}
        value={form.additional}
        onChangeText={value => {
          onChange({ name: 'additional', value });
        }}
        error={errors.additional}
      />
      <View style={styles.blankView}></View>
      <Button
        text={t('requestQuoteModal.submit')}
        style={[styles.buttonStyle, { marginBottom: 20 }]}
        fontSize={fontSizes.FONT22}
        onPress={submitQuoteForm}
        loading={loading}
      />
    </View>
  );
};

export default input;
