import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import styles from './style';
import { Arrow, SearchNew, Camera } from '@utils/icons';
import RecentSearch from './recentSearch';
import Recommended from './recommended';
import appColors from '@theme/appColors';
import Data from '@utils/json';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifySearch } from '../../../hooks/useShopifySearch';
import Header from './header';
import { useSearchStore } from '../../../context/searchContext';

export default function Search({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState("");

  const {
    fetchSearchProducts,
    fetchSearchSuggestions,
  } = useShopifySearch();
  const { suggestedSearch } = useSearchStore();

  const searchArr = Data.recentSearch;

  const recommended = Data.recommended;

  useEffect(() => {
    if (!searchText || searchText.length < 2) return;

    const timer = setTimeout(() => {
      fetchSearchSuggestions(searchText);
      fetchSearchProducts(searchText);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Header t={t} colors={colors} navigation={navigation} /> */}

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
          <View style={[styles.camera, { backgroundColor: colors.cuponsbg }]}>
            <View style={styles.search}>
              <TextInput
                placeholder={t('search.search')}
                placeholderTextColor={appColors.grey}
                value={searchText}
                onChangeText={term => setSearchText(term)}
                style={[styles.input, { color: colors.text }]}
                onSubmitEditing={() => {
                  navigation.navigate("SearchResults", { term: searchText });
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SearchResults", { term: searchText });
              }} >
              <SearchNew colors={appColors.search} />
            </TouchableOpacity>
          </View>
        </View>

        <RecentSearch
          t={t}
          colors={colors}
          searchArr={suggestedSearch}
          navigation={navigation}
        />
        <Recommended
          t={t}
          colors={colors}
          recommended={recommended}
          navigation={navigation}
        />
        {/* <TrendingCategory
          t={t}
          colors={colors}
          trendingCategory={trendingCategory}
          navigation={navigation}
        /> */}
        {/* <TopBrands
          colors={colors}
          t={t}
          brands={brands}
          title={'homePage.biggestDeals'}
          navigation={navigation}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
