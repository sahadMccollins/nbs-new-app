import React from 'react';
import { View, ScrollView } from 'react-native';
import { HomeHeader, Divider } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import Category from './category';
import Slider from './slider';
import DealOfDay from './dealsOfDay';
import FindYourStyle from './findYourStyle';
import SaleStart from './saleStart';
import BiggestDeals from './biggestDeals';
import KidsCorner from './KidsCorner';
import OfferCorner from './offerCorner';
import styles from './style';
import { windowHeight } from '@theme/appConstant';
import { SafeAreaView } from 'react-native-safe-area-context';

export function home(props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const goToSearch = () => {
    props.navigation.navigate('Search');
  };
  const goToNotification = () => {
    props.navigation.navigate('Notification');
  };
  const goToWishlist = () => {
    props.navigation.navigate('wishList');
  };
  const goToCart = () => {
    props.navigation.navigate('cart');
  };

  return (
    <SafeAreaView>
      <HomeHeader
        navigationProps={props.navigation}
        searchPress={goToSearch}
        notificationPress={goToNotification}
        wishlistPress={goToWishlist}
        cartPress={goToCart}
        navigation={props.navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category navigation={props.navigation} t={t} colors={colors} />
        <Divider marginVertical={windowHeight(8)} />
        <Slider t={t} colors={colors} navigation={props.navigation} />
        <DealOfDay t={t} colors={colors} navigation={props.navigation} />
        <Divider marginVertical={windowHeight(20)} />
        <FindYourStyle navigation={props.navigation} t={t} colors={colors} />
        <SaleStart t={t} colors={colors} />
        <BiggestDeals navigation={props.navigation} t={t} colors={colors} />
        <Divider marginVertical={windowHeight(8)} />
        <KidsCorner navigation={props.navigation} t={t} colors={colors} />
        <OfferCorner navigation={props.navigation} t={t} colors={colors} />
        <View style={styles.view} />
      </ScrollView>
    </SafeAreaView>
  );
}
