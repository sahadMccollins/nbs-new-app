import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Data from '@utils/json';
import styles from './style';
import {useValues} from '@App';

export default biggestDeals = props => {
  const biggestDeal = Data.biggestDeal;
  const {isDark, textRTLStyle, viewRTLStyle} = useValues();

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.biggestDeals,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {props.t('homePage.biggestDeals')}
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={[
          styles.container,
          {flexDirection: viewRTLStyle},
        ]}>
        {biggestDeal.map((item, key) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.navigation.navigate('ShopPage')}
            style={[styles.imageView, {backgroundColor: props.colors.product}]}
            key={key}>
            {isDark ? (
              <Image source={item.darkBrand} style={styles.image} />
            ) : (
              <Image source={item.brand} style={styles.image} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
