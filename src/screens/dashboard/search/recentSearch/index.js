import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { Close, Recent, Search } from '@utils/icons';
import { useValues } from '@App';
import appColors from '../../../../theme/appColors';
import Feather from 'react-native-vector-icons/Feather';

export default recentSearch = props => {
  const colors = props.colors;
  const searchArr = props.searchArr;
  const t = props.t;
  const { viewRTLStyle, textRTLStyle } = useValues();

  return (
    <View>
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('search.recentSearch')}
      </Text>
      {searchArr.map(item => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('Product', { productId: item.id }) }} style={[styles.recentSearch, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.searchValue, { flexDirection: viewRTLStyle }]}>
            {/* <Search color={appColors.grey} /> */}
            <Feather name="arrow-up-right" size={20} color={appColors.grey}/>
            <Text style={styles.result} numberOfLines={1} ellipsizeMode='tail'>{t(item.title)}</Text>
          </View>
          {/* <Close /> */}
        </TouchableOpacity>
      ))}
    </View>
  );
};
