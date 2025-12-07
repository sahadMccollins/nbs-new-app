import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, Button } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { fontSizes } from '@theme/appConstant';
import Images from '@utils/images/images';
import { useTheme } from '@react-navigation/native';
import MenuItem from '@otherComponent/drawerComponents/menuItem';
import Data from '@utils/json';
import styles from './style';
import { MultiLangauge, CommonModal, CurrencyConverter } from '@otherComponent';
import { useValues } from '@App';
import LogOut from '@otherComponent/logoutButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCustomer } from '../../../context/customerContext';

export function profile({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const { viewRTLStyle, viewSelfRTLStyle } = useValues();
  const { customer } = useCustomer();

  const goToScreen = key => {
    if (key == 0) {
    } else if (key == 1) {
    }
    if (key == 2) {
      navigation.navigate('Pages');
    } else if (key == 3) {
      navigation.navigate('OrderHistory');
    } else if (key == 4) {
      navigation.navigate('wishList');
    } else if (key == 5) {
      navigation.navigate('PaymentCard');
    } else if (key == 6) {
      navigation.navigate('SavedAddress');
    } else if (key == 7) {
      visibleModal();
    } else if (key == 8) {
      visibleCurrencyModal();
    } else if (key == 9) {
      navigation.navigate('Notification');
    } else if (key == 10) {
      navigation.navigate('Settings');
    } else if (key == 11) {
      navigation.navigate('ProfileSettings');
    } else if (key == 12) {
      navigation.navigate('TermsCondition');
    } else if (key == 13) {
      navigation.navigate('HelpCenter');
    }
  };

  const visibleModal = () => {
    setShowModal(!showModal);
  };
  const visibleCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  };

  return (
    <SafeAreaView>
      <View>
        <Header text={t('profile.profile')} navigation={navigation} />
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.profile,
              { backgroundColor: colors.product, flexDirection: viewRTLStyle },
            ]}>
            <Image
              source={Images.user}
              resizeMode="contain"
              style={styles.profileImg}
            />
            <View
              style={[styles.profileDetail, { alignItems: viewSelfRTLStyle }]}>
              <Text style={[styles.userName, { color: colors.text }]}>
                {customer ? `${customer.firstName} ${customer.lastName}` : t('profile.userName')}
              </Text>
              <Text style={styles.userEmail}>{customer ? customer.email : t('profile.userEmail')}</Text>
              {/* <Button
                text={t('profile.edit')}
                style={styles.button}
                fontSize={fontSizes.FONT16}
                t={t}
              /> */}
            </View>
          </View>
          {Data.profileItems.map((items, key) => (
            <MenuItem
              icon={items.icons}
              text={items.name}
              show={key == 11 ? true : false}
              showLine={key == 13 ? false : true}
              description={items.description}
              showSwitch={items.showSwitch}
              onPress={() => goToScreen(key)}
              showBg
              t={t}
              darkModeSwitch={key == 0 ? true : false}
              rtlSwitch={key == 1 ? true : false}
            />
          ))}
          <LogOut navigation={navigation} />
        </ScrollView>
        <CommonModal
          modal={
            <MultiLangauge
              onPress={visibleModal}
              navigation={navigation}
              t={t}
              from="profile"
            />
          }
          showModal={showModal}
          visibleModal={visibleModal}
        />
        <CommonModal
          modal={
            <CurrencyConverter
              onPress={visibleCurrencyModal}
              navigation={navigation}
              from="profile"
            />
          }
          showModal={showCurrencyModal}
          visibleModal={visibleCurrencyModal}
        />
      </View>
    </SafeAreaView>
  );
}
