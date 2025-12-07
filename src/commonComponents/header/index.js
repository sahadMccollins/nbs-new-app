import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Wishlist, Cart, Arrow, Search} from '@utils/icons';
import {Share} from '@assets/icons/share';
import {Notification} from '../../assets/icons/notification';
import {useValues} from '@App';

export function Header(props) {
  const {colors} = useTheme();
  const {viewRTLStyle, imageRTLStyle, isDark} = useValues();

  return (
    <View
      style={[
        styles.mainView,
        {
          backgroundColor: isDark ? colors.card : null,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View style={[styles.first, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.navigation.goBack()}>
          <View style={{transform: [{scaleX: imageRTLStyle}]}}>
            <Arrow />
          </View>
        </TouchableOpacity>
        <View style={styles.text}>
          <Text
          numberOfLines={1}
          ellipsizeMode='clip'
            style={[
              styles.text1,
              {
                color: colors.text,
              },
              props.textStyle,
            ]}>
            {props.text}
          </Text>
          {props.showText && <Text style={styles.text2}>{props.subText}</Text>}
        </View>
      </View>
      <View style={[styles.cart, {flexDirection: viewRTLStyle}]}>
        {props.shareIcon && (
          <TouchableOpacity activeOpacity={0.9} style={styles.share}>
            <Share width={windowWidth(24)} height={windowHeight(24)} />
          </TouchableOpacity>
        )}
        {props.searchIcon && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.search}
            onPress={() => {
              props.navigation.navigate('Search');
            }}>
            <Search width={windowWidth(24)} height={windowHeight(24)} />
          </TouchableOpacity>
        )}
        {props.notificationIcon && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.share}
            onPress={() => {
              props.navigation.navigate('Notification');
            }}>
            <Notification width={windowWidth(24)} height={windowHeight(24)} />
          </TouchableOpacity>
        )}
        {props.showWishListIcon && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('wishList')}
            style={styles.wishlist}>
            <Wishlist width={windowWidth(24)} height={windowHeight(24)} />
          </TouchableOpacity>
        )}
        {props.showIcon && (
          <TouchableOpacity
            style={styles.cartIcon}
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('cart')}>
            <Cart />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
