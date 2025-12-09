import React, { useState } from 'react';
import { View } from 'react-native';
import DropDown from '@commonComponents/dropdown';
import Data from '@utils/json';
import styles from './styles';
import { Input } from '@commonComponents';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import { useShopifyAddress } from '../../../../../hooks/useShopifyAddress';


export default textInput = props => {
  const { t, form, updateField } = props;
  const state = Data.states;
  const { addAddress } = useShopifyAddress();
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState(t(Data.states[0].name));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState();
  const [pinCode, setPinCode] = useState();
  const [address, setAddress] = useState();
  const [area, setArea] = useState();
  const [landMark, setLandMark] = useState();
  const [city, setCity] = useState();
  const SelectedCountry = val => {
    setCountryName(val);
  };
  const SelectedState = val => {
    setStateName(val);
  };



  return (
    <View style={styles.container}>
      {/* <Input
        placeholder={t('addNewAddress.firstName')}
        onChangeText={firstName => setFirstName(firstName)}
        value={firstName}
        fontSize={fontSizes.FONT17}

      />
      <Input
        placeholder={t('addNewAddress.lastName')}
        onChangeText={lastName => setLastName(lastName)}
        value={lastName}
        fontSize={fontSizes.FONT17}

      />
      <Input
        placeholder={t('profileSettings.mobileNumber')}
        onChangeText={mobileNumber => setMobileNumber(mobileNumber)}
        value={mobileNumber}
        fontSize={fontSizes.FONT17}
        keyboardType={'phone-pad'}
      />
      <Input
        placeholder={t('addNewAddress.address')}
        onChangeText={address => setAddress(address)}
        value={address}
        fontSize={fontSizes.FONT17}
      /> */}
      {/*       
      <Input
        placeholder={t('addNewAddress.city/district')}
        onChangeText={city => setCity(city)}
        value={city}
        fontSize={fontSizes.FONT17}
      />
      <View style={{ height: windowHeight(20) }}></View>
      <DropDown
        name={t('addNewAddress.emirate')}
        data={state}
        SelectedItem={SelectedState}
        selectedItem={stateName}
        width={windowWidth(180)}
        height={windowHeight(50)}
      />

      <Input
        placeholder={t('checkDelivery.pinCode')}
        onChangeText={pinCode => setPinCode(pinCode)}
        value={pinCode}
        fontSize={fontSizes.FONT17}
        keyboardType={'phone-pad'}
      />
      <View style={{ height: windowHeight(20) }}></View> */}

      <Input
        placeholder={t('addNewAddress.firstName')}
        value={form.firstName}
        onChangeText={v => updateField("firstName", v)}
        fontSize={fontSizes.FONT17}
      />

      <Input
        placeholder={t('addNewAddress.lastName')}
        value={form.lastName}
        onChangeText={v => updateField("lastName", v)}
        fontSize={fontSizes.FONT17}
      />

      <Input
        placeholder={t('profileSettings.mobileNumber')}
        value={form.mobileNumber}
        onChangeText={v => updateField("mobileNumber", v)}
        fontSize={fontSizes.FONT17}
        keyboardType="phone-pad"
      />

      <Input
        placeholder={t('addNewAddress.address')}
        value={form.address}
        onChangeText={v => updateField("address", v)}
        fontSize={fontSizes.FONT17}
      />

      <Input
        placeholder={t('addNewAddress.city/district')}
        value={form.city}
        onChangeText={v => updateField("city", v)}
        fontSize={fontSizes.FONT17}
      />

      <View style={{ height: windowHeight(20) }} />

      <DropDown
        name={t('addNewAddress.emirate')}
        data={state}
        selectedItem={form.state}
        SelectedItem={(v) => updateField("state", v)}
        width={windowWidth(180)}
        height={windowHeight(50)}
      />

      <Input
        placeholder={t('checkDelivery.pinCode')}
        value={form.pinCode}
        onChangeText={v => updateField("pinCode", v)}
        fontSize={fontSizes.FONT17}
        keyboardType="phone-pad"
      />

      <View style={{ height: windowHeight(20) }} />

    </View>
  );
};
