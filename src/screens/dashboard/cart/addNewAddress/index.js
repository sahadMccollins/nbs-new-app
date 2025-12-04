import React from 'react';
import { ScrollView} from 'react-native';
import {Header, Divider} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import TextInput from './textInput';
import AddressTypes from './addressTypes';
import {windowHeight} from '@theme/appConstant';
import ButtonContainer from '@commonComponents/buttonContainer';
import {useTheme} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function addNewAddress({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <Header text={t('addNewAddress.addNewAddress')} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: windowHeight(120)}}>
        <TextInput t={t} />
        <Divider />
        <AddressTypes t={t} colors={colors} />
      </ScrollView>
      <ButtonContainer
        t={t}
        colors={colors}
        btnTitle={t('addNewAddress.addAddress')}
        text={t('addNewAddress.reset')}
        btnClick={() => {navigation.goBack()}}
      />
    </SafeAreaView>
  );
}
