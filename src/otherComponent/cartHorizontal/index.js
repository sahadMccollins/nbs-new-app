import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { t } from 'i18next';
import { useTheme } from '@react-navigation/native';
import { windowHeight } from '@theme/appConstant';
import Price from '../../commonComponents/productHorizontal/withPrice';
import WithWishlist from '../../commonComponents/productHorizontal/withWishlist';
import { Divider } from '@commonComponents';
import { Wishlist } from '@utils/icons';
import AddToCart from '../../commonComponents/productHorizontal/withAddToCart';
import { useValues } from '@App';
import { useShopifyWishlist } from '../../hooks/useShopifyWishlist';
import { useShopifyCart } from '../../hooks/useShopifyCart';

export default function CartHorizontal(props) {
  const products = props.products;
  const {
    containerStyle,
  } = props;
  const { colors } = useTheme();
  const { viewRTLStyle, textRTLStyle } = useValues();
  const { removeFromWishlist, addToWishlist } = useShopifyWishlist();
  const { addToCart, removeFromCart } = useShopifyCart();

  const onPressmoveToWishlist = (item) => {
    addToWishlist(item);
    removeFromCart(item.id);
  }

  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: containerStyle }}
        showsVerticalScrollIndicator={false}>
        {products.map((item, key) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('Product', { productId: item.id })}
          >
            <View key={key}>
              <View
                style={[
                  styles.dealsView,
                  {
                    backgroundColor: colors.brandsbg,
                    flexDirection: viewRTLStyle,
                  },
                ]}>
                <Image
                  style={[styles.image, props.productStyle]}
                  source={{ uri: item.image }}
                />
                <View style={[styles.txtView, { flexDirection: viewRTLStyle }]}>
                  <View>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode='tail'
                      style={[
                        styles.title,
                        { color: props.colors.text, textAlign: textRTLStyle },
                      ]}>
                      {props.t(item.title)}
                    </Text>
                    {props.showPrice && (
                      <Price
                        brandName={t(item.vendor)}
                        colors={props.colors}
                        discountPrice={t(item.price)}
                        price={t(item.oldPrice)}
                        discount={t(item.discount)}
                        t={props.t}
                        quantity={item.quantity}
                        isFreeGift={item.isFreeGift}
                      />
                    )}
                    {props.showWishlist && (
                      <WithWishlist
                        colors={props.colors}
                        onPressmoveToWishlist={onPressmoveToWishlist}
                        item={item}
                        t={t}
                        icon={
                          <Wishlist
                            height={windowHeight(15)}
                            width={windowHeight(15)}
                          />
                        }
                      />
                    )}
                    {props.showCart && (
                      <AddToCart
                        colors={props.colors}
                        t={t}
                        onPressAddToCart={() => {
                          addToCart(item);
                          removeFromWishlist(item.id);
                        }}
                        onPressRemove={() => {
                          removeFromWishlist(item.id);
                        }}
                      />
                    )}
                  </View>
                </View>
              </View>
              {props.showDivider && <Divider />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
