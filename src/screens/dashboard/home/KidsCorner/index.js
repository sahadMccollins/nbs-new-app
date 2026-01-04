import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';
import Data from '@utils/json';
import { Product } from '@commonComponents';
import { useValues } from '@App';

export default kidsCorner = props => {
  const kidsCorner = Data.kidsCorner;
  const { textRTLStyle, viewRTLStyle } = useValues();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.kidsCorner,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        {props.t('homePage.newArrivals')}
      </Text>
      <View style={{ justifyContent: "space-between", flexDirection: viewRTLStyle }} >
        <Text style={[styles.clothing, { textAlign: textRTLStyle }]}>
          {props.t('homePage.newArrivalsDesc')}
        </Text>
        <Text
          style={styles.seeAll}
          onPress={() => {
            props.navigation.navigate('ShopPageCollection', {
              collectionId: 'gid://shopify/Collection/439668572372',
              sortKey: 'CREATED',
              reverse: true
            });
          }}
        >
          {props.t('homePage.seeAll')}
        </Text>
      </View>
      {/* <FlatList
        horizontal
        data={props.collection ? props.collection.products : []}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: viewRTLStyle }}
        ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.discountPrice}
            price={item.price}
            discount={item.discount}
            t={props.t}
            disc
            navigation={props.navigation}
            width={"50%"}
          />
        )}
      /> */}

      <FlatList
        horizontal
        data={props.collection ? props.collection.products : []}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: viewRTLStyle }}
        ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
        renderItem={({ item }) => (
          <Product
            product={item}
            t={props.t}
            disc
            navigation={props.navigation}
            width={itemWidth}
          />
        )}
        snapToInterval={itemWidth}
        decelerationRate="fast"
      />

      {/* <FlatList
        data={props.collection ? props.collection.products : []}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.price}
            price={item.oldPrice}
            discount={item.discount}
            t={props.t}
            disc
            width={"50%"}
            productTags={item.productTags}
            navigation={props.navigation}
          />
        )}
      /> */}
    </View>
  );
};
