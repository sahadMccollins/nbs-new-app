import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';


export default sizeSection = props => {
  const colors = props.colors;
  const sizes = props.sizes;
  const t = props.t;
  const title = props.title;
  const [selectedSize, setSelectedSize] = useState('');
  const {isRTL,textRTLStyle} = useValues()

  const onSelectSize = val => {
    sizes.map(item => {
      if (val == item.id) {
        setSelectedSize(val);
      }
    });
  };
  return (
    <View style={styles.container}>
      {props.title && (
        <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
          {title}
          <Text> :</Text>
        </Text>
      )}
      <FlatList
        data={sizes}
        style={styles.sizeList}
        inverted = {isRTL ? true : false}
        numColumns={props.numColumns ? props.numColumns : 3}
        ItemSeparatorComponent={() => <View style={styles.sizeSeparator} />}
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
                    : colors.cuponsbg,
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
