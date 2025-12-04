import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '@App';

export default saveDetails = props => {
  const {t} = useTranslation();
  const {colors} = useTheme();

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
        {t('profileSettings.cancel')}
      </Text>
      <Button
        text={t('profileSettings.saveDetails')}
        style={styles.details}
        fontSize={fontSizes.FONT20}
        onPress={() => {}}
      />
    </View>
  );
};
