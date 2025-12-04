import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {DropDown} from '@utils/icons';
import {useValues} from '@App';

export default subCategory = (props) => {
  const {t} = useTranslation();
  const subCategory = Data.subCategory;
  const {colors} = useTheme();
  const [openCat, setOpenCat] = useState(null);
  const {viewRTLStyle, viewSelfRTLStyle} = useValues();

  const showSubCat = key => {
    var value;
    key === openCat ? (value = null) : (value = key);
    setOpenCat(value);
  };

  return (
    <FlatList
      data={subCategory}
      renderItem={({item, index}) => (
        <View style={[styles.mainView]}>
          <TouchableOpacity
            onPress={() => showSubCat(index)}
            activeOpacity={0.8}
            style={[styles.category, {flexDirection: viewRTLStyle}]}>
            <Text style={[styles.categoryName, {color: colors.text}]}>
              {t(item.name)}
            </Text>
            <DropDown />
          </TouchableOpacity>
          {openCat === index &&
            item.innerCat.map(data => (
              <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('ShopPage')}>
                <Text  style={[
                  styles.innerCat,
                  {color: colors.text, alignSelf: viewSelfRTLStyle},
                ]}>{t(data.name)}</Text>

              
              </TouchableOpacity>
            ))}
        </View>
      )}
    />
  );
};
