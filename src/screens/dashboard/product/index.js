import React, {useState} from 'react';
import { ScrollView, View} from 'react-native';
import {Header, Divider} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import Slider from './slider';
import ProductDescription from './productDescription';
import SizeSection from './sizeSection';
import Data from '@utils/json';
import ColorSection from './colorSection';
import QuantitySection from './quantitySection';
import OfferSection from './offerSection';
import PolicySection from './policySection';
import ProductDetail from './productDetail';
import ReViewSection from './reviewSection';
import CheckDelivery from './checkDelivery';
import YouMayLike from '../cart/youMayLike';
import ButtonContainer from './ButtonContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function product({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [selectedColor, setSelectedColor] = useState(0);
  const setColor = val => {
    setSelectedColor(val);
  };
  return (
    <SafeAreaView style={{paddingBottom: windowHeight(48)}}>
      <Header
        text={t('product.name')}
        showWishListIcon
        showText
        textStyle={{marginTop: windowHeight(15)}}
        showIcon
        shareIcon
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: windowHeight(80)}}
        style={{backgroundColor: colors.card}}>
        <Slider t={t} colors={colors} selectedColor={selectedColor} />
        <View style={{height: windowHeight(30)}}></View>
        <ProductDescription colors={colors} t={t} />
        <Divider />
        <SizeSection
          title={t('orderSuccess.size')}
          sizes={Data.sizes}
          t={t}
          colors={colors}
        />
        <ColorSection
          t={t}
          colors={colors}
          selectColors={Data.selectColors}
          setColor={setColor}
          title
          marginVertical={windowHeight(20)}
        />
        <QuantitySection t={t} colors={colors} />
        <Divider />
        <OfferSection t={t} colors={colors} />
        <Divider />
        <PolicySection t={t} colors={colors} />
        <Divider />
        <ProductDetail
          t={t}
          productDetails={Data.productDetails}
          colors={colors}
        />
        <Divider />
        <ReViewSection t={t} reviews={Data.customerReview} colors={colors} />
        <Divider />
        <CheckDelivery t={t} colors={colors} />
        <Divider />
        <YouMayLike
          t={t}
          colors={colors}
          mayLike={Data.mayLike}
          title={t('checkDelivery.similarProducts')}
          navigation={navigation}
        />
      </ScrollView>
      <ButtonContainer navigation={navigation} t={t} colors={colors} />
    </SafeAreaView>
  );
}
