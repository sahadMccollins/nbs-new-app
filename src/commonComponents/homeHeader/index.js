import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useValues } from '@App';
import { useTheme } from '@react-navigation/native';
import { windowHeight, windowWidth } from '@theme/appConstant';

import Images from '@utils/images/images';
import { Wishlist, Notification, Drawer, Search, Cart } from '@utils/icons';

export function HomeHeader(props) {
  const { isDark, viewRTLStyle, viewSelfRTLStyle, isRTL } = useValues();
  const { colors } = useTheme();

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <View
      style={[
        styles.mainView,
        { backgroundColor: colors.card, flexDirection: viewRTLStyle },
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.drawer}
        onPress={toggleDrawer}>
        <Drawer />
      </TouchableOpacity>
      <View style={styles.logo}>
        {isDark ? (
          <Image
            source={Images.darkLogo}
            resizeMode="contain"
            style={[
              styles.darkLogoImg,
              { alignSelf: viewSelfRTLStyle },
              isRTL ? { right: windowWidth(12) } : { right: windowWidth(0) },
            ]}
          />
        ) : (
          <Image
            source={Images.logo2}
            resizeMode="contain"
            style={[
              styles.logoImg,
              { alignSelf: viewSelfRTLStyle },
              isRTL ? { right: windowWidth(12) } : { right: windowWidth(0) },
            ]}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.mainLogoView}
        activeOpacity={0.8}
        onPress={props.searchPress}>
        <Search />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.mainLogoView}
        activeOpacity={0.8}
        onPress={props.notificationPress}>
        <Notification />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.mainLogoView}
        activeOpacity={0.8}
        onPress={props.wishlistPress}>
        <Wishlist />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainLogoView}
        activeOpacity={0.8}
        onPress={props.cartPress}>
        <Cart width={windowWidth(24)} height={windowHeight(24)} />
      </TouchableOpacity>
    </View>
  );
}
