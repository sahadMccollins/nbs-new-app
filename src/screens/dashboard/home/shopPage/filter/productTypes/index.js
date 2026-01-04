import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import Data from '@utils/json';

export default function productTypes(props) {
  const { t, productsTypes, selectedTypes, onToggleCheckbox } = props;
  const { colors } = useTheme();
  const { isRTL } = useValues()

  return (
    <View>
      <FlatList
        data={productsTypes}
        style={styles.mainStyle}
        inverted={isRTL ? true : false}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={styles.brandsSeperator} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              onToggleCheckbox(item, 'productType');
            }}
            style={[
              styles.brand,
              {
                backgroundColor:
                  selectedTypes.includes(item)
                    ? appColors.primary
                    : colors.cuponsbg,
              },
            ]}>
            <Text
              style={[
                styles.name,
                {
                  color:
                    selectedTypes.includes(item) ? appColors.white : colors.text,
                },
              ]}>
              {t(item)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
