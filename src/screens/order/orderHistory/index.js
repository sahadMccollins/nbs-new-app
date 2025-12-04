import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, Divider} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import SearchBar from '@commonComponents/searchBar';
import OpenOrders from './openOrders';
import PastOrders from './pastOrders';
import {BottomDialogModal, CommonModal} from '@otherComponent';
import OrderFilterModal from '@otherComponent/orderFilterModal';
import OrderReviewModal from '@otherComponent/orderReviewModal';
import styles from './styles';

export default function OrderHistory({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const visibleModal = () => {
    setShowModal(!showModal);
  };
  const onFilterPress = () => {
    setShowOrderModal(!showOrderModal);
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        text={t('orderHistory.orderHistory')}
        navigation={navigation}
        textStyle={styles.textStyle}
      />
      <ScrollView>
        <SearchBar t={t} colors={colors} onFilterPress={onFilterPress} />
        <OpenOrders t={t} colors={colors} navigation={navigation} />
        <Divider />
        <PastOrders
          t={t}
          colors={colors}
          visibleModal={visibleModal}
          navigation={navigation}
        />
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
  );
}
