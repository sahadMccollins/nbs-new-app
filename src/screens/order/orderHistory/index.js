import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Divider } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import SearchBar from '@commonComponents/searchBar';
import OpenOrders from './openOrders';
import PastOrders from './pastOrders';
import { BottomDialogModal, CommonModal } from '@otherComponent';
import OrderFilterModal from '@otherComponent/orderFilterModal';
import OrderReviewModal from '@otherComponent/orderReviewModal';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyOrder } from '../../../hooks/useShopifyOrder';

export default function OrderHistory({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const { orders, loading, fetchOrders } = useShopifyOrder();
  const [showModal, setShowModal] = useState(false);
  const visibleModal = () => {
    setShowModal(!showModal);
  };
  const onFilterPress = () => {
    setShowOrderModal(!showOrderModal);
  };

  useEffect(() => {
    fetchOrders();
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header
          text={t('orderHistory.orderHistory')}
          navigation={navigation}
          textStyle={styles.textStyle}
        />
        <ScrollView>
          {/* <SearchBar t={t} colors={colors} onFilterPress={onFilterPress} /> */}
          <OpenOrders orders={orders} t={t} colors={colors} navigation={navigation} />
          {/* <Divider />
          <PastOrders
            t={t}
            colors={colors}
            visibleModal={visibleModal}
            navigation={navigation}
          /> */}
        </ScrollView>
        <CommonModal
          modal={
            <OrderReviewModal t={t} setShowModal={setShowModal} colors={colors} />
          }
          showModal={showModal}
          visibleModal={visibleModal}
          onPress={visibleModal}
        />
        <BottomDialogModal
          modal={
            <OrderFilterModal
              onPress={showOrderModal}
              navigation={navigation}
              t={t}
              setShowOrderModal={setShowOrderModal}
              colors={colors}
            />
          }
          showModal={showOrderModal}
          visibleModal={() => setShowOrderModal(!showOrderModal)}
        />
      </View>
    </SafeAreaView>
  );
}
