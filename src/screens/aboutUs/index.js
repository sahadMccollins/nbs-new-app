import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import ContentSection from './contentSection';
import {windowWidth} from '@theme/appConstant';
import Brands from '@otherComponent/topBrands';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';

export default function aboutUs({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const brands = Data.topBrands;

  return (
    <View>
      <Header text={t('drawerArr.aboutUs')} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: windowWidth(20),
          marginBottom: windowWidth(90),
        }}>
        <ContentSection t={t} colors={colors} />
        <Brands
          colors={colors}
          t={t}
          brands={brands}
          text={'homePage.biggestDeals'}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}
