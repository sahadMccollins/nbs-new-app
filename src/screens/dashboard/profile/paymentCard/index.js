import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {Header, Divider} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import Data from '@utils/json';
import PaymentSlider from './paymentSlider';
import Wallets from './wallets';
import AddNewCard from './addNewCard';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function paymentCard({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {textRTLStyle} = useValues();

  return (
    <SafeAreaView>
      <Header text={t('paymentCard.payments')} navigation={navigation} />
      <ScrollView contentContainerStyle={{paddingBottom: windowHeight(150)}}>
        <View style={styles.margin}>
          <Text
            style={[
              styles.title,
              {color: colors.text, textAlign: textRTLStyle},
            ]}>
            {t('paymentCard.savedCards')}
          </Text>
          <PaymentSlider data={Data.paymentSlider} t={t} colors={colors} />
        </View>
        <Divider />
        <View style={styles.margin}></View>
        <Wallets wallets={Data.wallets} t={t} colors={colors} />
      </ScrollView>
      <AddNewCard t={t} colors={colors} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(20),
  },
  title: {
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT22,
    paddingHorizontal: windowWidth(10),
  },
});
