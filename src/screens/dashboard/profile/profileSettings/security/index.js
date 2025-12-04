import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default security = props => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {isRTL} = useValues();

  return (
    <View>
      <Text style={[styles.security, {color: colors.text}]}>
        {t('profileSettings.security')}
      </Text>
      <View>
        <Input
          placeholder={t('profileSettings.mobileNumber')}
          width={windowWidth(420)}
          left={windowWidth(50)}
          right={windowWidth(50)}
        />
        <Text
          style={[
            styles.change,
            isRTL ? {left: windowWidth(50)} : {right: windowWidth(50)},
          ]}>
          {t('profileSettings.change')}
        </Text>
      </View>
      <View>
        <Input
          placeholder={t('profileSettings.password')}
          width={windowWidth(420)}
          left={windowWidth(50)}
          right={windowWidth(50)}
        />
        <Text
          style={[
            styles.change,
            isRTL ? {left: windowWidth(50)} : {right: windowWidth(50)},
          ]}>
          {t('profileSettings.change')}
        </Text>
      </View>
    </View>
  );
};
