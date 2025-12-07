import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import { useValues } from '@App';

export default sizeSection = props => {
  const colors = props.colors;
  const { viewRTLStyle, textRTLStyle, isRTL } = useValues();
  const t = props.t;

  return (
    <View style={styles.container}>
      <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
        <Text
          style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
          {t('product.catalogue')}:
        </Text>
        {/* <Text style={[styles.text, {textAlign: textRTLStyle}]}>
          {t('product.sizeChart')}
        </Text> */}
      </View>

      {/* <FlatList
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
      /> */}

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (props.link) {
            Linking.openURL(props.link);
          }
        }}
        style={[
          styles.size,
          {
            backgroundColor: appColors.primary,
            marginTop: 20,
            width: '80%',
            alignSelf: 'center'
          },
        ]}>
        <Text
          style={[
            styles.name,
            {
              color: appColors.white,
            },
          ]}>
          {t('product.openCatalogue')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
