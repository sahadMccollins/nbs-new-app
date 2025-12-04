import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Data from '@utils/json';
import styles from './style';
import {ProductHorizontal} from '@commonComponents';
import { useValues } from '@App';

export default dealOfDay = props => {
  const dealsOfDaySection = Data.dealsOfDaySection;
  const {viewRTLStyle} = useValues()

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.navigation.navigate('Product');
      }}>
      <View style={[styles.headerView,{flexDirection:viewRTLStyle}]}>
        <Text style={[styles.dealOfDay, {color: props.colors.text}]}>
          {props.t('homePage.dealsOfDay')}
        </Text>
        <Text style={styles.seeAll}>{props.t('homePage.seeAll')}</Text>
      </View>
      <ProductHorizontal
        products={dealsOfDaySection}
        t={props.t}
        colors={props.colors}
        showPrice
        isWishlist
        productStyle={styles.product}
      />
    </TouchableOpacity>
  );
};
