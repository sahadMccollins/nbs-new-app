import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Product } from '@commonComponents';
import styles from './style';
import { useValues } from '@App';

export default youMayLike = props => {
  const { t, colors, recommendedProducts, title } = props;
  const { textRTLStyle, isRtl, viewRTLStyle } = useValues();
  const { navigation } = props;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  return (
    <View>
      <Text
        style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {title}
      </Text>
      {/* <FlatList
        data={recommendedProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        inverted={isRtl ? true : false}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.price}
            price={item.oldPrice}
            t={t}
            navigation={navigation}

          />
        )}
      /> */}

      <FlatList
        horizontal
        data={recommendedProducts}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.container, { flexDirection: viewRTLStyle }]}
        ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
        renderItem={({ item }) => (
          <Product
            product={item}
            t={props.t}
            disc
            width={itemWidth}
            navigation={props.navigation}
          />
        )}
        snapToInterval={itemWidth}
        decelerationRate="fast"
      />
    </View>
  );
};
