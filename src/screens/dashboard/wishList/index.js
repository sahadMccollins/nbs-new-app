import React, {useState} from 'react';
import { View} from 'react-native';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import Data from '@utils/json';
import styles from './style';
import {BottomDialogModal} from '@otherComponent';
import CartModal from '@otherComponent/cartModal';
import {windowHeight} from '@theme/appConstant';
import CartHorizontal from '@otherComponent/cartHorizontal';
import { SafeAreaView } from 'react-native-safe-area-context';

export function wishList({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const wishlist = Data.wishlist;
  const [showModal, setShowModal] = useState(false);
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
      <View style={{height: '100%', width: '100%'}}>
        <Header
          text={t('wishList.yourWishlist')}
          navigation={navigation}
          showIcon
        />
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
      </View>
      <BottomDialogModal
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
      />
    </SafeAreaView>
  );
}
