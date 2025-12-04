import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Product} from '@commonComponents';
import styles from './style';
import {useValues} from '@App';

export default youMayLike = props => {
  const {t, colors, mayLike, title} = props;
  const {textRTLStyle, isRtl} = useValues();
  const {navigation} = props
  return (
    <View>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {title}
      </Text>
      <FlatList
        data={mayLike}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        inverted={isRtl ? true : false}
        renderItem={({item}) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.discountPrice}
            price={item.price}
            t={t}
            navigation={navigation}
           
          />
        )}
      />
    </View>
  );
};
