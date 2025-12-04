import React, {useState} from 'react';
import { ScrollView} from 'react-native';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import TrendingCategory from '../../search/trendingCategory';
import Brands from '@otherComponent/topBrands';
import Category from './category';
import SubCategory from './subCategory';
import { SafeAreaView } from 'react-native-safe-area-context';

export function innerCategory({navigation}) {
  const {t} = useTranslation();
  const trendingCategory = Data.trendingCategory;
  const subCategory = Data.subCategory;
  const brands = Data.topBrands;
  const {colors} = useTheme();
  const [openCat, setOpenCat] = useState(null);

  return (
    <SafeAreaView>
      <Header
        showIcon
        showWishListIcon
        text={t('category.categories')}
        navigation={navigation}
        notificationIcon
        searchIcon
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Category colors={colors} t={t} />
        <SubCategory colors={colors} t={t} navigation={navigation} />
        <TrendingCategory
          colors={colors}
          t={t}
          trendingCategory={trendingCategory}
          text
          navigation={navigation}
        />
        <Brands
          colors={colors}
          title
          t={t}
          brands={brands}
          text={'homePage.biggestDeals'}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
