import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { windowHeight } from '@theme/appConstant';
import { Divider } from '@commonComponents';
import Support from './support';
import YouMayLike from './youMayLike';
import PlaceOrder from './placeOrder';
import Coupons from './coupons';
import OrderDetails from './orderDetails';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';
import styles from './style';
import CartModal from '../../../otherComponent/cartModal';
import { BottomDialogModal } from '@otherComponent';
import CartHorizontal from '../../../otherComponent/cartHorizontal';
import { SafeAreaView } from 'react-native-safe-area-context';

export function cart({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const cartList = Data.cartList;
  const mayLike = Data.mayLike;
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState('');

  const goTowishList = () => {
    navigation.navigate('wishList');
  };
  const onPressmoveToWishlist = () => {
    setTitle(t('cart.moveTowishlist'));
    setShowModal(!showModal);
  };
  const onPressRemove = () => {
    setTitle(t('cart.remove'));
    addToCart();
  };

  return (
    <SafeAreaView>
      <Header
        text={t('cart.shoppingCart')}
        showWishListIcon
        showText
        subText={t('cart.steps')}
        navigation={navigation}
        onWishlistPress={goTowishList}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.details}>
        <CartHorizontal
          products={cartList}
          t={t}
          showWishlist
          colors={colors}
          showPrice
          showDivider
          productStyle={styles.products}
          setShowModal={setShowModal}
          onPressmoveToWishlist={onPressmoveToWishlist}
          onPressRemove={onPressRemove}
          navigation={navigation}
        />
        <YouMayLike
          t={t}
          colors={colors}
          mayLike={mayLike}
          title={t('cart.youMay')}
          navigation={navigation}
        />
        <Divider marginTop={windowHeight(16)} />
        <Coupons t={t} colors={colors} navigation={navigation} showSideArrow />
        <Divider marginTop={windowHeight(4)} />
        <OrderDetails
          title
          applyCoupon
          t={t}
          colors={colors}
          navigation={navigation}
        />
        <Divider marginTop={windowHeight(20)} />
        <Support t={t} colors={colors} />
      </ScrollView>
      <PlaceOrder t={t} colors={colors} navigation={navigation} />
      <BottomDialogModal
        modal={
          <CartModal
            onPress={showModal}
            t={t}
            setShowModal={setShowModal}
            showModal={showModal}
            title={title}
            paddingBottom={'14%'}
          />
        }
        showModal={showModal}
        visibleModal={() => setShowModal(!showModal)}
      />
    </SafeAreaView>
  );
}
