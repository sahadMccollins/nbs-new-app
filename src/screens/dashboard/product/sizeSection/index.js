import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default sizeSection = props => {
  const colors = props.colors;
  const sizes = props.sizes;
  const {viewRTLStyle, textRTLStyle, isRTL} = useValues();
  const t = props.t;
  const [selectedSize, setSelectedSize] = useState('');

  const onSelectSize = val => {
    sizes.map(item => {
      if (val == item.id) {
        setSelectedSize(val);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
          {t('product.selectSize')}:
        </Text>
        <Text style={[styles.text, {textAlign: textRTLStyle}]}>
          {t('product.sizeChart')}
        </Text>
      </View>

      <FlatList
        data={sizes}
        style={[styles.sizeList, {flexDirection: viewRTLStyle}]}
        numColumns={4}
        inverted={isRTL ? true : false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              onSelectSize(index);
            }}
            style={[
              styles.size,
              {
                backgroundColor:
                  item.id == selectedSize
                    ? appColors.primary
                    : props.colors.styleBackground,
              },
            ]}>
            <Text
              style={[
                styles.name,
                {
                  color:
                    item.id == selectedSize ? appColors.white : colors.text,
                },
              ]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
