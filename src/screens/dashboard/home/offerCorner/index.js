import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Data from '@utils/json';
import styles from './style';
import {useValues} from '@App';

export default offerCorner = props => {
  const offerCorner = Data.offerCorner;
  const {textRTLStyle, isRTL} = useValues();

  return (
    <View>
      <Text
        style={[
          styles.offerCorner,
          {
            color: props.colors.text,
            textAlign: textRTLStyle,
          },
        ]}>
        {props.t('homePage.offerCorner')}
      </Text>
      <FlatList
        data={offerCorner}
        numColumns={2}
        columnWrapperStyle={styles.column}
        inverted={isRTL ? true : false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ShopPage');
            }}
            style={[
              styles.txtView,
              {
                backgroundColor: props.colors.product,
              },
            ]}>
            <Text style={[styles.name, {color: props.colors.text}]}>
              {props.t(item.name)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
