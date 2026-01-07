import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import LikeAnim from '@assets/likeAnim.json';
import StarRating from '@commonComponents/starRating';
import { useValues } from '@App';
import { Wishlist, WishlistFilled } from "@utils/icons";
import { useShopifyWishlist } from '../../hooks/useShopifyWishlist';
import { useShopifyCart } from '../../hooks/useShopifyCart';
import images from '@utils/images/images';

export function Product(props) {
  const { colors } = useTheme();
  const [like, setLike] = useState(false);
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue, isDark } = useValues();
  const { toggleProduct, isInWishlist } = useShopifyWishlist();
  const { addToCart, loading, removeFromCart, isInCart } = useShopifyCart();
  const { product } = props;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.navigation.navigate('Product', { productId: product.id })}
      style={{ width: props.width }}
    >
      {/* <Image source={ props.image } style={styles.img} /> */}
      <Image
        source={{ uri: String(product.image) }}
        style={styles.img}
      />

      {/* <View style={[styles.ratingsView, { flexDirection: viewRTLStyle }]}>
        <StarRating />
      </View> */}
      <Text
        style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}
        numberOfLines={2}
        ellipsizeMode="tail">
        {props.t(product.title)}
      </Text>


      {product.productTags?.includes("request-a-qoute") ||
        product.productTags?.includes("request-a-quote") ? (

        /* -------------------------------
           SHOW "PRICE ON REQUEST"
        --------------------------------*/
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
          <Text
            style={[
              styles.discountPrice,
              { color: colors.text, textAlign: "center" },
            ]}
          >
            {props.t("products.priceOnRequest")}
          </Text>
        </View>

      ) : product.oldPrice && product.oldPrice > product.price ? (

        /* -------------------------------
           SHOW PRICE + OLD PRICE (DISCOUNT)
        --------------------------------*/
        <View style={[styles.priceView, { flexDirection: viewRTLStyle }]}>
          <Text
            style={[
              styles.discountPrice,
              { color: colors.text, textAlign: textRTLStyle },
            ]}
          >
            {currSymbol}
            {(product.price * currValue).toFixed(2)}
          </Text>

          <Text style={[styles.price, { textAlign: textRTLStyle }]}>
            {currSymbol}
            {(product.oldPrice * currValue).toFixed(2)}
          </Text>
        </View>

      ) : (

        /* -------------------------------
           SHOW ONLY DISCOUNT PRICE (NO STRIKETHROUGH PRICE)
        --------------------------------*/
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
          <Text
            style={[
              styles.discountPrice,
              { color: colors.text, textAlign: textRTLStyle },
            ]}
          >
            {currSymbol}
            {(product.price * currValue).toFixed(2)}
          </Text>
        </View>

      )}


      {/* {props.newProduct && (
        <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
          {props.t(props.newProduct)}
        </Text>
      )} */}

      {!product.available ? (
        <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
          {props.t("products.outOfStock")}
        </Text>
      ) : (
        product.oldPrice &&
        product.price &&
        product.oldPrice > product.price && (
          <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
            {`${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF`}
          </Text>
        )
      )}




      {/* <TouchableOpacity
        activeOpacity={0.7}
        onPress={likeProduct}
        style={[styles.wishlist, { backgroundColor: colors.background }]}>
        {like ? (
          <Lottie
            source={LikeAnim}
            style={styles.like}
            progress={animationProgress}
          />
        ) : (
          <Wishlist />
        )}
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => toggleProduct(product)}
        style={[
          styles.wishlist,
          { backgroundColor: isDark ? "#2B2B2B" : "white" },
        ]}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          {isInWishlist(product.id) ? <WishlistFilled /> : <Wishlist />}
        </Animated.View>
      </TouchableOpacity> */}

      {product.productTags?.includes("request-a-qoute") ||
        product.productTags?.includes("request-a-quote") ? null : (
        <View
          // activeOpacity={0.7}
          style={[
            styles.wishlist,
            { backgroundColor: isDark ? "#2B2B2B" : "white" },
          ]}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#d6d6d6',
              padding: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : isInCart(product.id) ? (
              <TouchableOpacity onPress={() => removeFromCart(product.id)}>
                <Image
                  source={isDark ? images.addedToCartWhite : images.addedToCart}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : (
              !product.available ? (
                <TouchableOpacity disabled onPress={null}>
                  <Image
                    source={isDark ? images.addToCartWhite : images.addToCart}
                    style={{ width: 20, height: 20, opacity: 0.5 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => addToCart(product)}>
                  <Image
                    source={isDark ? images.addToCartWhite : images.addToCart}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )

            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
