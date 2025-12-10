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

  console.log("recommendedProducts", recommendedProducts[0]);

  return (
    <View>
      <Text
        style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={recommendedProducts ? recommendedProducts : []}
        showsHorizontalScrollIndicator={false}
        onStartShouldSetResponder={() => true}
        contentContainerStyle={[styles.container, { flexDirection: viewRTLStyle }]}
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
    </View>
  );
};
