import React from 'react';
import {ScrollView,ImageBackground} from 'react-native';
import {mapImage, darkmapsection} from '@utils/images/images';
import {Header, Divider} from '@commonComponents';
import ProductSection from './productSection';
import {useTranslation} from 'react-i18next';
import InvoiceSection from './invoiceSection';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {useValues} from '@App';
import OrderTracker from './orderTracker';
import appFonts from '@theme/appFonts';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderDescription({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {isDark} = useValues();
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.containerStyle}> 
        <ImageBackground   source={isDark ? darkmapsection : mapImage}
          style={styles.mapStyle}>
        <Header text={t('orderDetails.orderDetail')} navigation={navigation} textStyle={{ fontFamily: appFonts.LatoMedium}} />
        </ImageBackground>
        <ProductSection t={t} colors={colors} />
        <OrderTracker colors={colors} t={t} />
        <Divider />
        <InvoiceSection t={t} colors={colors} />
      </ScrollView>
    </SafeAreaView>
  );
}
