import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from './style';
import {Close, Recent} from '@utils/icons';
import {useValues} from '@App';

export default recentSearch = props => {
  const colors = props.colors;
  const searchArr = props.searchArr;
  const t = props.t;
  const {viewRTLStyle,textRTLStyle} = useValues()

  return (
    <View>
      <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
        {t('search.recentSearch')}
      </Text>
      {searchArr.map(item => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => {props.navigation.navigate('Product')}} style={[styles.recentSearch,{flexDirection:viewRTLStyle}]}>
          <View style={[styles.searchValue,{flexDirection:viewRTLStyle}]}>
            <Recent />
            <Text style={styles.result}>{t(item.result)}</Text>
          </View>
          <Close />
        </TouchableOpacity>
      ))}
    </View>
  );
};
