import React from 'react';
import { ScrollView } from 'react-native';
import { Header, Divider } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import TextInput from './textInput';
import AddressTypes from './addressTypes';
import { windowHeight } from '@theme/appConstant';
import ButtonContainer from '@commonComponents/buttonContainer';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyAddress } from '../../../../hooks/useShopifyAddress';

export default function addNewAddress({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { addAddress } = useShopifyAddress();

  // All form fields stored here
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    pinCode: ""
  });

  const updateField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleAddAddress = async () => {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.mobileNumber,
      address1: form.address,
      city: form.city,
      province: form.state,
      zip: form.pinCode,
      country: "AE"
    };

    const res = await addAddress(payload);

    if (res) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Header text={t('addNewAddress.addNewAddress')} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: windowHeight(120) }}>
        <TextInput t={t} form={form} updateField={updateField} />
        <Divider />
        {/* <AddressTypes t={t} colors={colors} /> */}
      </ScrollView>
      <ButtonContainer
        t={t}
        colors={colors}
        btnTitle={t('addNewAddress.addAddress')}
        text={t('addNewAddress.reset')}
        btnClick={handleAddAddress}
        bottom={5}
      />
    </SafeAreaView>
  );
}
