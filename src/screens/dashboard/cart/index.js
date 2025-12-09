import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
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
import { useCart } from '../../../context/cartContext';

export function cart({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { cart } = useCart();
  // const cartList = Data.cartList;
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
    // <SafeAreaView >
    //   <Header
    //     text={t('cart.shoppingCart')}
    //     showWishListIcon
    //     showText
    //     subText={t('cart.steps')}
    //     navigation={navigation}
    //     onWishlistPress={goTowishList}
    //   />
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={styles.details}>
    //     {cart.length === 0 ? (
    //       <View
    //         style={{
    //           flex: 1,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           paddingHorizontal: 20,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             fontSize: 16,
    //             color: colors.text,
    //             textAlign: 'center',
    //             fontWeight: '800',
    //             marginBottom: 8,
    //             textTransform: 'uppercase',
    //           }}
    //         >
    //           Empty Cart
    //         </Text>

    //         <Text
    //           style={{
    //             fontSize: 14,
    //             color: colors.text,
    //             textAlign: 'center',
    //           }}
    //         >
    //           Your cart is currently empty. Add items to place an order.
    //         </Text>
    //       </View>
    //     ) : (
    //       <>
    //         <CartHorizontal
    //           products={cart}
    //           t={t}
    //           showWishlist
    //           colors={colors}
    //           showPrice
    //           showDivider
    //           productStyle={styles.products}
    //           setShowModal={setShowModal}
    //           onPressmoveToWishlist={onPressmoveToWishlist}
    //           onPressRemove={onPressRemove}
    //           navigation={navigation}
    //         />

    //         <OrderDetails
    //           title
    //           applyCoupon
    //           t={t}
    //           colors={colors}
    //           navigation={navigation}
    //         />
    //         <Divider marginTop={windowHeight(20)} />
    //         <Support t={t} colors={colors} />
    //       </>
    //     )}
    //   </ScrollView>
    //   {/* <PlaceOrder t={t} colors={colors} navigation={navigation} /> */}
    //   {cart.length > 0 && (
    //     <PlaceOrder t={t} colors={colors} navigation={navigation} />
    //   )}

    //   <BottomDialogModal
    //     modal={
    //       <CartModal
    //         onPress={showModal}
    //         t={t}
    //         setShowModal={setShowModal}
    //         showModal={showModal}
    //         title={title}
    //         paddingBottom={'14%'}
    //       />
    //     }
    //     showModal={showModal}
    //     visibleModal={() => setShowModal(!showModal)}
    //   />
    // </SafeAreaView>


    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text={t('cart.shoppingCart')}
        showWishListIcon
        showText
        subText={t('cart.steps')}
        navigation={navigation}
        onWishlistPress={goTowishList}
      />

      {cart.length === 0 ? (
        // ⚡ NO SCROLL VIEW → CENTER WORKS PERFECTLY
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.text,
              textAlign: 'center',
              fontWeight: '800',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            {t('cart.emptyCart')}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.text,
              textAlign: 'center',
            }}
          >
            {t('cart.emptyCartDesc')}
          </Text>
        </View>
      ) : (
        // ⚡ NORMAL CART SCROLL VIEW
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.details}
          >
            <CartHorizontal
              products={cart}
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
        </>
      )}

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
