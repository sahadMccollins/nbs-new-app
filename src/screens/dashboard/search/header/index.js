import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import appColors from '@theme/appColors';
import styles from './style';
import {Arrow, Search, Camera} from '@utils/icons';

export default header = props => {
  const colors = props.colors;
  const [searchText, setSearchText] = useState('');
  const t = props.t;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Arrow />
      </TouchableOpacity>
      <View style={[styles.camera, {backgroundColor: colors.cuponsbg}]}>
        <View style={styles.search}>
          <Search colors={appColors.search} />
          <TextInput
            placeholder={t('search.search')}
            placeholderTextColor={appColors.grey}
            value={searchText}
            onChangeText={search => setSearchText(search)}
            style={[styles.input, {color: colors.text}]}
          />
        </View>
        <Camera />
      </View>
    </View>
  );
};
