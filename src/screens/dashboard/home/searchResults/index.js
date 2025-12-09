import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { windowHeight } from '@theme/appConstant';
import SearchBar from '@commonComponents/searchBar';
import Categorys from './categorys';
import Filter from './filter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSearchStore } from '../../../../context/searchContext';

/** ------------------------------------------------------------------
 * COMPONENT
 * ------------------------------------------------------------------*/
export default function SearchResults({ navigation, route }) {
  const colors = useTheme();
  const { t } = useTranslation();
  const { term } = route.params || {};

  const { products } = useSearchStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text={`${t('search.resultFor')} "${term}"`}
        // showText
        // showIcon
        // notificationIcon
        // showWishListIcon
        // subText={t('shopPage.numProducts')}
        navigation={navigation}
      />

      <View style={{ flex: 1 }}>
        <View style={{ marginTop: windowHeight(3) }} />
        <Categorys products={products} t={t} navigation={navigation} />
      </View>

      {/* {products && (
        <View style={{ paddingVertical: 24 }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )} */}
    </SafeAreaView>
  );
}