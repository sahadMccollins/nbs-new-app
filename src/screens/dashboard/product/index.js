import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { Header, Divider } from '@commonComponents';
import { windowHeight } from '@theme/appConstant';
import { useTranslation } from 'react-i18next';
import { useRoute, useTheme } from '@react-navigation/native';
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
import { useShopifyProduct } from '../../../hooks/useShopifyProduct';


export default function product({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const route = useRoute();
  const productId = route.params?.productId;
  const {
    fetchProductData,
    fetchRecommendedProductsData,
    product,
    recommendedProducts,
    loading
  } = useShopifyProduct();

  const [selectedColor, setSelectedColor] = useState(0);
  const setColor = val => {
    setSelectedColor(val);
  };

  useEffect(() => {
    fetchProductData(productId)
    fetchRecommendedProductsData(productId)
  }, [])

  // ✅ Full-screen centered loader
  if (loading && !product) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary || "#000"} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ paddingBottom: windowHeight(48) }}>
      <Header
        text={product?.title}
        showWishListIcon
        showText
        textStyle={{ marginTop: windowHeight(15) }}
        showIcon
        shareIcon
        navigation={navigation}
      />

      <ScrollView
        contentContainerStyle={{ paddingBottom: windowHeight(80) }}
        style={{ backgroundColor: colors.card }}
      >
        <Slider images={product?.images} t={t} colors={colors} selectedColor={selectedColor} />
        <View style={{ height: windowHeight(30) }} />
        <ProductDescription colors={colors} t={t} product={product} />
        <Divider />

        <SizeSection
          title={t('orderSuccess.size')}
          link={product?.supportingFile}
          t={t}
          colors={colors}
        />

        {/* <ColorSection
          t={t}
          colors={colors}
          selectColors={Data.selectColors}
          setColor={setSelectedColor}
          title
          marginVertical={windowHeight(20)}
        /> */}

        {/* <QuantitySection t={t} colors={colors} /> */}
        <Divider />

        {/* <OfferSection t={t} colors={colors} /> */}
        {/* <Divider /> */}

        <ProductDetail
          t={t}
          productDetails={Data.productDetails}
          colors={colors}
        />
        <Divider />

        <PolicySection t={t} colors={colors} />
        <Divider />

        {/* <ReViewSection t={t} reviews={Data.customerReview} colors={colors} /> */}
        {/* <Divider /> */}

        {/* <CheckDelivery t={t} colors={colors} /> */}
        {/* <Divider /> */}

        <YouMayLike
          t={t}
          colors={colors}
          title={t('checkDelivery.similarProducts')}
          navigation={navigation}
          recommendedProducts={recommendedProducts}
        />
      </ScrollView>

      <ButtonContainer item={product} navigation={navigation} t={t} colors={colors} />
    </SafeAreaView>
  );
}
