import React, { useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header, Divider } from '@commonComponents';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { windowHeight, windowWidth } from '@theme/appConstant';
import OrderDetails from '../orderDetails';
import ButtonContainer from '@commonComponents/buttonContainer';
import appColors from '@theme/appColors';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../../../context/cartContext';
import { useCustomer } from '../../../../context/customerContext';

export default function payment({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const { currSymbol, currValue } = useValues();
  const { cart } = useCart();
  const { customer } = useCustomer();

  return (
    <SafeAreaView>
      <Header
        text={t('checkout.title')}
        showText
        subText={t('checkout.subTitle')}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
