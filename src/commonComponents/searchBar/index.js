import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import appColors from '@theme/appColors';
import {Search, Camera, Filter} from '@utils/icons';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default searchBar = props => {
  const [searchText, setSearchText] = useState('');
  const {t, cameraIcon, onFilterPress} = props;
  const {colors} = useTheme();
  const {viewRTLStyle, textRTLStyle} = useValues();

  return (
    <View style={[styles.header, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.camera, {backgroundColor: colors.product}]}>
        <View style={[styles.search, {flexDirection: viewRTLStyle}]}>
          <Search colors={appColors.search} />
          <TextInput
            placeholder={t('search.search')}
            placeholderTextColor={appColors.grey}
            value={searchText}
            onChangeText={search => setSearchText(search)}
            style={[
              styles.input,
              {color: colors.text, textAlign: textRTLStyle},
            ]}
            cursorColor={appColors.primary}
          />
          {cameraIcon && (
            <TouchableOpacity activeOpacity={0.8}>
              <Camera />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.filter}
        onPress={onFilterPress}>
        <Filter />
      </TouchableOpacity>
    </View>
  );
};
