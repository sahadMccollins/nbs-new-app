import React, { useEffect, useMemo } from 'react';
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
import { useCollections } from '../../../context/collectionContext';

const COLLECTION_IDS = [
  "gid://shopify/Collection/439668539604",
  "gid://shopify/Collection/443266466004",
  "gid://shopify/Collection/443234615508",
  "gid://shopify/Collection/443234746580",
  "gid://shopify/Collection/439668572372",
  "gid://shopify/Collection/443235369172"
];

const DEALS_OF_DAY_ID = "gid://shopify/Collection/439668539604";
const NEW_ARRIVALS_ID = "gid://shopify/Collection/439668572372";
const GENERATOR_COLLECTION_ID = "gid://shopify/Collection/443266466004";
const WATER_PUMP_COLLECTION_ID = "gid://shopify/Collection/443234746580";
const POWER_STATION_COLLECTION_ID = "gid://shopify/Collection/443234615508";
const BATTERY_COLLECTION_ID = "gid://shopify/Collection/443235369172";

export function home(props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { collections, loading, error, fetchCollectionsById, refreshCollections } =
    useCollections();

  const dealsOfDayCollection = useMemo(() => {
    return collections.find(collection => collection.id === DEALS_OF_DAY_ID);
  }, [collections]);

  const newArrivalCollection = useMemo(() => {
    return collections.find(collection => collection.id === NEW_ARRIVALS_ID);
  }, [collections]);

  // const newGeneratorCollection = useMemo(() => {
  //   return collections.find(collection => collection.id === GENERATOR_COLLECTION_ID);
  // }, [collections]);

  // const newWaterPumpCollection = useMemo(() => {
  //   return collections.find(collection => collection.id === WATER_PUMP_COLLECTION_ID);
  // }, [collections]);

  // const newPowerStationCollection = useMemo(() => {
  //   return collections.find(collection => collection.id === POWER_STATION_COLLECTION_ID);
  // }, [collections]);

  // const newBatteryCollection = useMemo(() => {
  //   return collections.find(collection => collection.id === BATTERY_COLLECTION_ID);
  // }, [collections]);

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

  useEffect(() => {
    fetchCollectionsById(COLLECTION_IDS);
  }, []);

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
        <DealOfDay
          collection={dealsOfDayCollection}
          loading={loading}
          t={t}
          colors={colors}
          navigation={props.navigation}
        />
        <Divider marginVertical={windowHeight(20)} />
        <FindYourStyle
        collections={collections}
         navigation={props.navigation}
          t={t} 
          colors={colors}
           />
        {/* <SaleStart t={t} colors={colors} /> */}
        <BiggestDeals navigation={props.navigation} t={t} colors={colors} />
        <Divider marginVertical={windowHeight(8)} />
        <KidsCorner
          collection={newArrivalCollection}
          loading={loading}
          t={t}
          navigation={props.navigation}
          colors={colors}
        />
        {/* <OfferCorner navigation={props.navigation} t={t} colors={colors} /> */}
        <View style={styles.view} />
      </ScrollView>
    </SafeAreaView>
  );
}
