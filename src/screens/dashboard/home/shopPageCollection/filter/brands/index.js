import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default function brands(props) {
  const [selectedBrand, setselectedBrand] = useState('');
  const {t, brands} = props;
  const {colors} = useTheme();
  const {isRTL} = useValues()

  const onSelectBrand = val => {
    brands.map(item => {
      if (val == item.id) {
        setselectedBrand(val);
      }
    });
  };
  return (
    <View>
      <FlatList
        data={brands}
        style={styles.mainStyle}
      
        inverted={isRTL ? true : false}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.brandsSeperator} />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              onSelectBrand(index);
            }}
            style={[
              styles.brand,
              {
                backgroundColor:
                  item.id == selectedBrand
                    ? appColors.primary
                    : colors.cuponsbg,
              },
            ]}>
            <Text
              style={[
                styles.name,
                {
                  color:
                    item.id == selectedBrand ? appColors.white : colors.text,
                },
              ]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
