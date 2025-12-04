import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useValues} from '../../../App';

export function UnAuthHeader(props) {
  const {colors} = useTheme();
  const {viewRTLStyle} = useValues();
  return (
    <View style={[styles.mainView, props.style, {flexDirection: viewRTLStyle}]}>
      <Image source={props.image} resizeMode="contain" style={styles.image} />
      <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}>
        <Text style={[styles.text, {color: colors.icon}]}>
          {props.t(props.text)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
