import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Header, Divider} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import {checkCircle} from '@utils/images/images';
import {windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import ButtonContainer from '@commonComponents/buttonContainer';
import OrderDetails from './orderDetails';
import OrderSummary from './orderSummary';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderSuccessful({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <SafeAreaView>
      <Header text={t('orderSuccess.orderPlaced')} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.order}>
        <View style={styles.circleView}>
          <Image source={checkCircle} style={styles.circleImage} />
        </View>
        <Text style={styles.title}>{t('orderSuccess.orderSuccessfully')}</Text>
        <Text style={[styles.subTitle, {color: colors.text}]}>
          {t('orderSuccess.paymentSuccessful')}
        </Text>
        <OrderDetails t={t} colors={colors} />
        <Divider marginTop={windowHeight(16)} />
        <OrderSummary t={t} colors={colors} />
      </ScrollView>
      <ButtonContainer
        t={t}
        colors={colors}
        text={t('orderSuccess.trackOrder')}
        btnTitle={t('orderSuccess.continueShopping')}
        btnClick={() => {
          navigation.navigate('ShopPage');
        }}
      />
    </SafeAreaView>
  );
}
