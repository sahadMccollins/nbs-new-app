import React from 'react'
import {ScrollView } from 'react-native'
import AddressDetails from '../../cart/deliveryDetails/addressDetail'
import BtnContainer from '../../cart/deliveryDetails/btnContainer'
import {Header} from '@commonComponents';
import { useTranslation } from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import Data from '@utils/json';


const savedAddress = ({navigation}) => {
    const {t} = useTranslation()
    const {colors} = useTheme();
  return (
    <ScrollView>
        <Header
        text={t('profile.savedAddress')}
        navigation={navigation}
      />
       <AddressDetails address={Data.deliveryDetails} t={t} colors={colors} />
        <BtnContainer t={t} navigation={navigation} colors={colors} />
    </ScrollView>
  )
}

export default savedAddress

