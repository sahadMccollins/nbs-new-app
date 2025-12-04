import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import Data from '@utils/json';
import {Product} from '@commonComponents';
import {useValues} from '@App';

export default kidsCorner = props => {
  const kidsCorner = Data.kidsCorner;
  const {textRTLStyle, viewRTLStyle} = useValues();

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.kidsCorner,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {props.t('homePage.theKidsCorner')}
      </Text>
      <Text style={[styles.clothing, {textAlign: textRTLStyle}]}>
        {props.t('homePage.clothingFor')}
      </Text>
      <FlatList
        horizontal
        data={kidsCorner}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexDirection: viewRTLStyle}}
        ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
        renderItem={({item}) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.discountPrice}
            price={item.price}
            discount={item.discount}
            t={props.t}
            disc
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};
