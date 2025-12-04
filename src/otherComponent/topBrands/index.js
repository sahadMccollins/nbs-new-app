import React from 'react';
import {View, Text, Image, FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '@App';

export default topBrands = props => {
  const colors = props.colors;
  const brands = props.brands;
  const t = props.t;
  const {isDark,textRTLStyle} = useValues();
  return (
    <View>
      {props.title && (
        <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
          {t(props.text ? props.text : 'search.topBrands')}
        </Text>
      )}
      <FlatList
        data={brands}
        style={styles.brandList}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={styles.brandSeparator} />}
        columnWrapperStyle={styles.separator}
        renderItem={({item, index}) => (
          <TouchableOpacity activeOpacity={0.7}
            style={[styles.brand, {backgroundColor: colors.cuponsbg}]} onPress={()=>{props.navigation.navigate('ShopPage')}}>
            {isDark ? (
              <Image
                style={styles.brandImg}
                source={item.darkBrand}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.brandImg}
                source={item.brand}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
