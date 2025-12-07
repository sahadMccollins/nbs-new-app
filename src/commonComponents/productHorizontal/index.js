import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Price from './withPrice';
import AddToCart from './withAddToCart';
import WithWishlist from './withWishlist';
import { t } from 'i18next';
import { Divider } from '@commonComponents';
import { useTheme } from '@react-navigation/native';
import { windowHeight } from '@theme/appConstant';
import LikeAnimation from '../likeAnimation';
import { useValues } from '@App';

export function ProductHorizontal(props) {
  const products = props.products;
  const { onPressAddToCart, onPressRemove, onPressmoveToWishlist } = props;
  const { colors } = useTheme();
  const { isRTL, viewRTLStyle } = useValues();
  return (
    <View>
      <ScrollView
        contentContainerStyle={props.style}
        showsVerticalScrollIndicator={false}>
        {products.map((item, key) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('Product', { productId: item.id })} key={key}>
            <View
              style={[
                styles.dealsView,
                {
                  backgroundColor: colors.product,
                  marginVertical: props.marginVertical
                    ? props.marginVertical
                    : windowHeight(6),
                  flexDirection: viewRTLStyle,
                },
              ]}>
              <Image
                style={[styles.image, props.productStyle]}
                source={{ uri: item.image }}
              />
              <View
                style={[
                  styles.txtView,
                  { flexDirection: viewRTLStyle, width: isRTL ? '60%' : '70%' },
                ]}>
                <View>
                  <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.title, { color: props.colors.text }]}>
                    {props.t(item.title)}
                  </Text>
                  {props.showPrice && (
                    <Price
                      brandName={item.vendor}
                      colors={props.colors}
                      discountPrice={item.price}
                      price={item.oldPrice}
                      discount={t(item.discount)}
                      t={t}
                    />
                  )}
                  {props.showCart && (
                    <AddToCart
                      colors={props.colors}
                      t={t}
                      onPressAddToCart={onPressAddToCart}
                      onPressRemove={onPressRemove}
                    />
                  )}
                  {props.showWishlist && (
                    <WithWishlist
                      colors={props.colors}
                      onPressmoveToWishlist={onPressmoveToWishlist}
                      t={t}
                    />
                  )}
                </View>
                <View style={styles.likeView}>
                  {props.isWishlist && <LikeAnimation />}
                </View>
              </View>
            </View>
            {props.showDivider && <Divider />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
