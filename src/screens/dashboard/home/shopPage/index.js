import React, {useState} from 'react';
import { ScrollView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Header} from '@commonComponents';
import Data from '@utils/json';
import {useTranslation} from 'react-i18next';
import {windowHeight} from '@theme/appConstant';
import SearchBar from '@commonComponents/searchBar';
import Categorys from './categorys';
import Filter from './filter';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function shopPage({navigation}) {
  const colors = useTheme();
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const onFilterPress = () => {
    setModalVisible(!modalVisible);
  };
  const categorys = Data.categorys;

  return (
    <SafeAreaView>
      <Header
        text={t('paymentCard.allCollection')}
        showText
        showIcon
        notificationIcon
        showWishListIcon
        subText={t('shopPage.numProducts')}
        navigation={navigation}
      />
      <ScrollView style={{marginBottom: windowHeight(70)}}>
        <View style={{marginTop: windowHeight(3)}}></View>
        <SearchBar
          t={t}
          colors={colors}
          cameraIcon
          onFilterPress={onFilterPress}
        />

        <Categorys categorys={categorys} t={t} navigation={navigation} />
        <Filter
          t={t}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
