import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import AddressDetails from '../../cart/deliveryDetails/addressDetail'
import BtnContainer from '../../cart/deliveryDetails/btnContainer'
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import Data from '@utils/json';
import { useShopifyAddress } from '../../../../hooks/useShopifyAddress';
import { SafeAreaView } from 'react-native-safe-area-context';


const savedAddress = ({ navigation }) => {
  const { t } = useTranslation()
  const { colors } = useTheme();
  const { addresses, loading, error, fetchAddresses, deleteAddress } = useShopifyAddress();

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          text={t('profile.savedAddress')}
          navigation={navigation}
        />
        <AddressDetails address={addresses} t={t} colors={colors} deleteAddress={deleteAddress} />
        <BtnContainer t={t} navigation={navigation} colors={colors} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default savedAddress

