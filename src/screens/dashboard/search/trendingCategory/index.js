import React from 'react';
import {View, Text, Image, FlatList,TouchableOpacity} from 'react-native';
import styles from './style';
import {useValues} from '@App';

export default trendingCategory = props => {
  const colors = props.colors;
  const trendingCategory = props.trendingCategory;
  const t = props.t;
  const {textRTLStyle,isRTL} = useValues()

  return (
    <View>
      {!props.text && (
        <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
          {t('search.trendingCategory')}
        </Text>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted = {isRTL ? true : false}
        ItemSeparatorComponent={() => <View style={styles.categorySeparator} />}
        renderItem={({item, index}) => (
          <TouchableOpacity activeOpacity={0.7} onPress={()=>{props.navigation.navigate('ShopPage')}} style={styles.category}>
            <View style={styles.categoryImage}>
              <View style={styles.categoryBackground} />
              <Image style={styles.categoryImg} source={item.category} />
            </View>
            <Text style={[styles.name, {color: colors.text}]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        )}
        data={trendingCategory}
      />
    </View>
  );
};
