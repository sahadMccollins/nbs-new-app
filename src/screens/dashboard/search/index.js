import React from 'react';
import { ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import styles from './style';
import Header from './header';
import RecentSearch from './recentSearch';
import Recommended from './recommended';
import TrendingCategory from './trendingCategory';
import TopBrands from '../../../otherComponent/topBrands';
import Data from '@utils/json';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const searchArr = Data.recentSearch;

  const recommended = Data.recommended;

  const trendingCategory = Data.trendingCategory;

  const brands = Data.topBrands;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header t={t} colors={colors} navigation={navigation} />
        <RecentSearch
          t={t}
          colors={colors}
          searchArr={searchArr}
          navigation={navigation}
        />
        <Recommended
          t={t}
          colors={colors}
          recommended={recommended}
          navigation={navigation}
        />
        <TrendingCategory
          t={t}
          colors={colors}
          trendingCategory={trendingCategory}
          navigation={navigation}
        />
        <TopBrands
          colors={colors}
          t={t}
          brands={brands}
          title={'homePage.biggestDeals'}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
