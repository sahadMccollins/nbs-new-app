import React from 'react';
import {Image, View} from 'react-native';
import Images from '@utils/images/images';
import styles from './styles';
import {useValues} from '@App';

export function Divider(props) {
  const {isDark} = useValues();
  return (
    <View>
      {isDark ? (
        <Image
          source={Images.darkDivider}
          style={[styles.darkDivider, {marginTop: props.marginTop,marginVertical:props.marginVertical}]}
        />
      ) : (
        <Image
          source={Images.homeDivider}
          style={[styles.divide, {marginTop: props.marginTop,marginVertical:props.marginVertical}]}
        />
      )}
    </View>
  );
}
