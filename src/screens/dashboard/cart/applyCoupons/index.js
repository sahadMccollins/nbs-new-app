import React from 'react';
import { ScrollView } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import Cupon from './coupons';
import CouponList from './couponList';
import Data from '@utils/json';
import ButtonContainer from '@commonComponents/buttonContainer';
import { windowHeight } from '@theme/appConstant';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function applyCoupon({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { currSymbol, currValue } = useValues()
  return (
    <SafeAreaView>
      <Header text={t('cart.coupons')} navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: windowHeight(120) }}>
        <Cupon t={t} colors={colors} />
        <CouponList t={t} colors={colors} cupons={Data.cupons} />
      </ScrollView>
      <ButtonContainer
        t={t}
        colors={colors}
        curruncyIcon={currSymbol}
        text={t((currValue * 27.00).toFixed(2))}
        subText={t('cupons.maximumSavings')}
        btnTitle={'cupons.apply'}
      />
    </SafeAreaView>
  );
}
