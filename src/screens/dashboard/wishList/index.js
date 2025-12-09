import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import Data from '@utils/json';
import styles from './style';
import { BottomDialogModal } from '@otherComponent';
import CartModal from '@otherComponent/cartModal';
import { windowHeight } from '@theme/appConstant';
import CartHorizontal from '@otherComponent/cartHorizontal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyWishlist } from '../../../hooks/useShopifyWishlist';
import { useWishlist } from '../../../context/wishlistContext';

export function wishList({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  // const wishlist = Data.wishlist;
  const [showModal, setShowModal] = useState(false);
  const { addToWishlist, removeFromWishlist, toggleProduct, isInWishlist, getCount } = useShopifyWishlist();
  const { wishlist } = useWishlist();
  const onPressAddToCart = () => {
    addToCart();
  };
  const addToCart = () => {
    setShowModal(!showModal);
  };
  const onPressRemove = () => {
    addToCart();
  };

  return (
    <SafeAreaView>
      <View style={{ height: '100%', width: '100%' }}>
        <Header
          text={
            t('wishList.yourWishlist') +
            (getCount() > 0 ? ` (${getCount()})` : '')
          }
          navigation={navigation}
          showIcon
        />

        {wishlist.length === 0 ? (
          // 👉 EMPTY STATE
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
              {t('wishList.emptyWishlist')}
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: colors.text,
                textAlign: 'center',
              }}
            >
              {t('wishList.emptyWishlistDesc')}
            </Text>
          </View>

        ) : (
          // 👉 WISHLIST ITEMS
          <CartHorizontal
            products={wishlist}
            t={t}
            colors={colors}
            showPrice
            showDivider
            productStyle={styles.products}
            setShowModal={setShowModal}
            onPressAddToCart={onPressAddToCart}
            onPressRemove={onPressRemove}
            containerStyle={windowHeight(50)}
            showCart
            navigation={navigation}
          />
        )}
        {/* <CartHorizontal
          products={wishlist}
          t={t}
          colors={colors}
          showPrice
          showDivider
          productStyle={styles.products}
          setShowModal={setShowModal}
          onPressAddToCart={onPressAddToCart}
          onPressRemove={onPressRemove}
          containerStyle={windowHeight(50)}
          showCart
          navigation={navigation}
        /> */}
      </View>
      {/* <BottomDialogModal
        modal={
          <CartModal
            onPress={showModal}
            t={t}
            setShowModal={setShowModal}
            showModal={showModal}
            title={t('wishList.addToCart')}
          />
        }
        showModal={showModal}
        visibleModal={() => setShowModal(!showModal)}
      /> */}
    </SafeAreaView>
  );
}
