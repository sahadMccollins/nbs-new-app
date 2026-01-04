import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import Data from '@utils/json';

export default function brands(props) {
  const { t, selectedBrands, onToggleCheckbox } = props;
  const brands = Data.brands;
  const { colors } = useTheme();
  const { isRTL } = useValues()

  return (
    <View>
      <FlatList
        data={brands}
        style={styles.mainStyle}
        inverted={isRTL ? true : false}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={styles.brandsSeperator} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              onToggleCheckbox(item.name, 'brands');
            }}
            style={[
              styles.brand,
              {
                backgroundColor:
                  selectedBrands.includes(item.name)
                    ? appColors.primary
                    : colors.cuponsbg,
              },
            ]}>
            <Text
              style={[
                styles.name,
                {
                  color:
                    selectedBrands.includes(item.name) ? appColors.white : colors.text,
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
