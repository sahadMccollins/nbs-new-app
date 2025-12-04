import React from 'react';
import {View, Text, Image} from 'react-native';
import {helpCenter} from '@utils/images/images';
import styles from './styles';
import {useValues} from '@App';

export default topSection = props => {
  const {t, colors} = props;
  const {textRTLStyle, isRTL} = useValues();
  return (
    <View>
      <Image source={helpCenter} style={styles.image} />
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('helpCenter.helpCenter')}
      </Text>
      <Text
        style={[
          styles.discription,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('helpCenter.content')}
      </Text>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('helpCenter.issueFacing')}
      </Text>
    </View>
  );
};
