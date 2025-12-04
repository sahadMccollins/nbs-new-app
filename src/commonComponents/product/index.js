import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import LikeAnim from '@assets/likeAnim.json';
import {Wishlist} from '@utils/icons';
import StarRating from '@commonComponents/starRating';
import {useValues} from '@App';

export function Product(props) {
  const {colors} = useTheme();
  const animationProgress = useRef(new Animated.Value(0)).current;
  const [like, setLike] = useState(false);
  const {viewRTLStyle, textRTLStyle, currSymbol, currValue} = useValues();

  useEffect(() => {
    Animated.timing(animationProgress, {
      toValue: like ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [like, animationProgress]);

  const likeProduct = () => {
    setLike(!like);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.navigation.navigate('Product')}
      style={{width: props.width ? props.width : props.width}}>
      <Image source={props.image} style={styles.img} />
      <View style={[styles.ratingsView, {flexDirection: viewRTLStyle}]}>
        <StarRating />
      </View>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {props.t(props.title)}
      </Text>
      <View style={[styles.priceView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.discountPrice,
            {color: colors.text, textAlign: textRTLStyle},
          ]}>
          {currSymbol}
          {(props.t(props.discountPrice) * currValue).toFixed(2)}
        </Text>
        <Text style={[styles.price, {textAlign: textRTLStyle}]}>
          {currSymbol}
          {(props.t(props.price) * currValue).toFixed(2)}
        </Text>
        {props.disc && (
          <Text style={[styles.discount, {textAlign: textRTLStyle}]}>
            ({props.t(props.discount)} off)
          </Text>
        )}
      </View>
      {props.newProduct && (
        <Text style={[styles.newProduct, {textAlign: textRTLStyle}]}>
          {props.t(props.newProduct)}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={likeProduct}
        style={[styles.wishlist, {backgroundColor: colors.background}]}>
        {like ? (
          <Lottie
            source={LikeAnim}
            style={styles.like}
            progress={animationProgress}
          />
        ) : (
          <Wishlist />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
