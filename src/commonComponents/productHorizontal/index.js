import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
import { useShopifyWishlist } from '../../hooks/useShopifyWishlist';
import { useShopifyCart } from '../../hooks/useShopifyCart';
import images from '@utils/images/images';

export function ProductHorizontal(props) {
  const products = props.products;
  const { addToWishlist, removeFromWishlist, toggleProduct, isInWishlist } = useShopifyWishlist();
  const { addToCart, loading, removeFromCart, isInCart } = useShopifyCart();
  const { colors } = useTheme();
  const { isRTL, viewRTLStyle, isDark } = useValues();

  // console.log('props',props.)
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
                    // onPressAddToCart={onPressAddToCart}
                    // onPressRemove={onPressRemove}
                    />
                  )}
                  {props.showWishlist && (
                    // <WithWishlist
                    //   colors={props.colors}
                    //   onPressmoveToWishlist={onPressmoveToWishlist}
                    //   t={t}
                    // />

                    <WithWishlist
                      colors={props.colors}
                      t={t}
                      product={item}
                      onMove={() => toggleProduct(item)}
                      onRemove={() => removeFromWishlist(item.id)}
                    />

                  )}
                </View>
                {/* <View style={styles.likeView}>
                  {props.isWishlist && (
                    <LikeAnimation
                      productId={item.id}
                      isLiked={isInWishlist(item.id)}
                      onToggle={() => toggleProduct(item)}
                    />
                  )}
                </View> */}
                <View style={styles.likeView}>
                  {props.isCart && (
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: '#d6d6d6',
                        // borderRadius: 6,
                        padding: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {loading ? (
                        <ActivityIndicator size="small" color={colors.primary} />
                      ) : isInCart(item.id) ? (
                        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                          <Image
                            source={isDark ? images.addedToCartWhite : images.addedToCart}
                            style={{ width: 20, height: 20 }}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      ) : (
                        !item.available ? (
                          <TouchableOpacity disabled onPress={null}>
                            <Image
                              source={isDark ? images.addToCartWhite : images.addToCart}
                              style={{ width: 20, height: 20, opacity:  0.5 }}
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={() => addToCart(item)}>
                            <Image
                              source={isDark ? images.addToCartWhite : images.addToCart}
                              style={{ width: 20, height: 20 }}
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        )
                      )}
                    </View>

                    // <LikeAnimation
                    //   productId={item.id}
                    //   isLiked={isInWishlist(item.id)}
                    //   onToggle={() => toggleProduct(item)}
                    // />
                  )}
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
