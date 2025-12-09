import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { ProductHorizontal } from '@commonComponents';
import { useValues } from '@App';

export default dealOfDay = props => {
  const { viewRTLStyle } = useValues()

  return (
    <TouchableOpacity
      activeOpacity={1}
    // onPress={() => props.navigation.navigate('Product', { productId: props.id })}
    >
      <View style={[styles.headerView, { flexDirection: viewRTLStyle }]}>
        <Text style={[styles.dealOfDay, { color: props.colors.text }]}>
          {props.t('homePage.dealsOfDay')}
        </Text>
        {/* <Text style={styles.seeAll}>{props.t('homePage.seeAll')}</Text> */}
        <Text
          style={styles.seeAll}
          onPress={() => {
            props.navigation.navigate('ShopPageCollection', {
              collectionId: 'gid://shopify/Collection/439668539604',
              sortKey: 'BEST_SELLING',
              reverse: false
            });
          }}
        >
          {props.t('homePage.seeAll')}
        </Text>
      </View>
      <ProductHorizontal
        products={props.collection ? props.collection.products : []}
        t={props.t}
        colors={props.colors}
        showPrice
        isWishlist
        productStyle={styles.product}
        navigation={props.navigation}
      />
    </TouchableOpacity>
  );
};
