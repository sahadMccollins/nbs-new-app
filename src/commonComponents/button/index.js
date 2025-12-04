import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {useValues} from '@App';
import {windowHeight} from '@theme/appConstant';

export function Button(props) {
  const {t} = useTranslation();
  const {viewSelfRTLStyle} = useValues();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      style={[
        props.style,
        styles.button,
        {
          alignSelf: viewSelfRTLStyle,
          marginTop: props.marginTop ? props.marginTop : windowHeight(10),
        },
      ]}>
      <Text style={[styles.buttonText, {fontSize: props.fontSize}]}>
        {t(props.text)}
      </Text>
    </TouchableOpacity>
  );
}
