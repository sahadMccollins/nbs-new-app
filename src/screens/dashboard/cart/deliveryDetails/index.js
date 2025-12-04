import React from 'react';
import {ScrollView} from 'react-native';
import {Header, Divider} from '@commonComponents';
import Data from '@utils/json';
import {useTranslation} from 'react-i18next';
import AddressDetails from './addressDetail';
import BtnContainer from './btnContainer';
import ExpectedDelivery from './expectedDelivery';
import ButtonContainer from '@commonComponents/buttonContainer';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function deliveryDetails({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {currSymbol, currValue} = useValues();
  return (
    <SafeAreaView>
      <Header
        text={t('deliveryDetails.deliveryDetails')}
        showText
        subText={t('deliveryDetails.steps')}
        navigation={navigation}
        searchIcon
        notificationIcon
        showWishListIcon
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: windowHeight(90),
        }}>
        <AddressDetails address={Data.deliveryDetails} t={t} colors={colors} />
        <BtnContainer t={t} navigation={navigation} colors={colors} />
        <Divider />
        <ExpectedDelivery
          data={Data.expectedDeliveryData}
          t={t}
          colors={colors}
        />
      </ScrollView>
      <ButtonContainer
        t={t}
        colors={colors}
        curruncyIcon={currSymbol}
        text={(27.0 * currValue).toFixed(2)}
        btnTitle={t('deliveryDetails.ProceedPayment')}
        subText={t('cart.viewDetails')}
        subTextColor={appColors.primary}
        btnClick={() => {
          navigation.navigate('Payment');
        }}
      />
    </SafeAreaView>
  );
}
