import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Images from '@utils/images/images';
import MenuItem from './menuItem';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';
import { MultiLangauge, CommonModal, CurrencyConverter } from '../';
import styles from './styles';
import { DrawerArrow } from '@utils/icons';
import LogOut from '../logoutButton';
import { useCustomer } from '../../context/customerContext';

export default drawerComponent = props => {
  const [showModal, setShowModal] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const { customer } = useCustomer();
  const { colors } = useTheme();
  const t = props.t;

  // const goToScreen = key => {
  //   if (key === 0) {
  //   } else if (key === 1) {
  //   } else if (key === 2) {
  //     props.navigation.navigate('Pages');
  //   } else if (key === 3) {
  //     props.navigation.navigate('Home');
  //   } else if (key === 4) {
  //     props.navigation.navigate('CategoryStackScreen');
  //   } else if (key === 5) {
  //     props.navigation.navigate('OrderHistory');
  //   } else if (key === 6) {
  //     props.navigation.navigate('wishList');
  //   } else if (key === 7) {
  //     props.navigation.navigate('profile');
  //   } else if (key === 8) {
  //     visibleModal();
  //   } else if (key == 9) {
  //     visibleCurrencyModal();
  //   } else if (key == 10) {
  //     props.navigation.navigate('Notification');
  //   } else if (key == 11) {
  //     props.navigation.navigate('Settings');
  //   } else if (key == 12) {
  //     props.navigation.navigate('AboutUs');
  //   } else if (key == 13) {
  //     props.navigation.navigate('HelpCenter');
  //   }
  // };

  const goToScreen = path => {
    if (path === 'visibleModal') {
      setShowModal(!showModal);
    } else {
      props.navigation.navigate(path);
    }
  };

  const visibleModal = () => {
    setShowModal(!showModal);
  };
  const visibleCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  };

  return (
    <View>
      <CommonModal
        modal={
          <MultiLangauge
            onPress={visibleModal}
            navigation={props.navigation}
            t={t}
            from="drawer"
          />
        }
        showModal={showModal}
        visibleModal={visibleModal}
      />
      <CommonModal
        modal={
          <CurrencyConverter
            onPress={visibleCurrencyModal}
            navigation={props.navigation}
            from="drawer"
          />
        }
        showModal={showCurrencyModal}
        visibleModal={visibleCurrencyModal}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.mainView, { backgroundColor: colors.brandsBg }]}>
        <View style={[styles.imageView, { borderBottomColor: colors.line }]}>
          <Image source={Images.user} resizeMode="contain" style={styles.img} />
          <Text style={[styles.name, { color: colors.text }]}>
            {customer ? `${customer.firstName} ${customer.lastName}` : t('drawerArr.name')}
          </Text>
          {/* <DrawerArrow /> */}
        </View>
        <View style={[styles.menuItem, { backgroundColor: colors.background }]}>
          {Data.drawerItems.map((items, key) => (
            <MenuItem
              icon={items.icons}
              text={items.name}
              show={key == 10 ? true : false}
              showLine={key == 10 ? false : true}
              description={items.description}
              showSwitch={items.showSwitch}
              // onPress={() => goToScreen(key)}
              onPress={() => goToScreen(items.path)}
              t={t}
              darkModeSwitch={key == 0 ? true : false}
              rtlSwitch={key == 1 ? true : false}
            />
          ))}
          <View style={styles.logoutBtn}>
            <LogOut navigation={props.navigation} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
