import React, { useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Header, Divider } from '@commonComponents';
import Data from '@utils/json';
import { useTranslation } from 'react-i18next';
import AddressDetails from './addressDetail';
import BtnContainer from './btnContainer';
import ExpectedDelivery from './expectedDelivery';
import ButtonContainer from '@commonComponents/buttonContainer';
import appColors from '@theme/appColors';
import { windowHeight } from '@theme/appConstant';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyAddress } from '../../../../hooks/useShopifyAddress';
import { useCart } from '../../../../context/cartContext';

export default function deliveryDetails({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { currSymbol, currValue } = useValues();
  const { addresses, loading, error, fetchAddresses, deleteAddress } = useShopifyAddress();
  const { cart } = useCart();

  useEffect(() => {
    fetchAddresses();
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchAddresses();   // ⬅️ This makes address refresh after adding
  //   }, [])
  // );

  const totalAmount = useMemo(() => {
    if (!cart || !Array.isArray(cart)) return 0;

    let total = 0;

    cart.forEach(item => {
      const price = Number(item?.price) || 0;
      const qty = Number(item?.quantity) || 1;
      total += price * qty;
    });

    return total;
  }, [cart]);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Header
        text={t('deliveryDetails.deliveryDetails')}
        showText
        subText={t('deliveryDetails.steps')}
        navigation={navigation}
        searchIcon
        // notificationIcon
        showWishListIcon
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: windowHeight(90),
        }}>
        <AddressDetails address={addresses} t={t} colors={colors} deleteAddress={deleteAddress} />
        <BtnContainer t={t} navigation={navigation} colors={colors} />
        <Divider />
        {/* <ExpectedDelivery
          data={Data.expectedDeliveryData}
          t={t}
          colors={colors}
        /> */}
      </ScrollView>
      <ButtonContainer
        t={t}
        colors={colors}
        curruncyIcon={currSymbol}
        text={`${(totalAmount * currValue).toFixed(2)}`}
        btnTitle={t('deliveryDetails.ProceedPayment')}
        subText={t('cart.viewDetails')}
        subTextColor={appColors.primary}
        btnClick={() => {
          navigation.navigate('Checkout');
        }}
        bottom={5}
      />
    </SafeAreaView>
  );
}
