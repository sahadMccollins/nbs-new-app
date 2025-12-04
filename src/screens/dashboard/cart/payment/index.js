import React, {useRef} from 'react';
import { ScrollView, Text, View} from 'react-native';
import {Header, Divider} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Promotions from './promotions';
import Data from '@utils/json';
import PaymentMethod from './paymentMethod';
import {windowHeight, windowWidth} from '@theme/appConstant';
import OrderDetails from '../orderDetails';
import ButtonContainer from '@commonComponents/buttonContainer';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function payment({navigation}) {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const scrollViewRef = useRef();
  const {currSymbol, currValue} = useValues();

  const bottom = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  return (
    <SafeAreaView>
      <Header
        text={t('paymentDetails.paymentDetails')}
        showText
        subText={t('paymentDetails.steps')}
        navigation={navigation}
      />
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          paddingBottom: windowHeight(150),
        }}>
        <Promotions t={t} colors={colors} offers={Data.offers} />
        <Divider />
        <PaymentMethod
          t={t}
          colors={colors}
          paymentOptions={Data.paymentOption}
          onPress={bottom}
        />
        <OrderDetails
          paddingHorizontal={windowWidth(30)}
          applyCoupon
          t={t}
          colors={colors}
          navigation={navigation}
        />
        <ButtonContainer
          t={t}
          colors={colors}
          curruncyIcon={currSymbol}
          text={(27.0 * currValue).toFixed(2)}
          btnTitle={t('paymentCard.payNow')}
          subText={t('cart.viewDetails')}
          subTextColor={appColors.primary}
          btnClick={() => {
            navigation.navigate('OrderSuccessful');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
