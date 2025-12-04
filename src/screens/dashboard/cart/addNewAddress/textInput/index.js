import React, {useState} from 'react';
import {View} from 'react-native';
import DropDown from '@commonComponents/dropdown';
import Data from '@utils/json';
import styles from './styles';
import {Input} from '@commonComponents';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
export default textInput = props => {
  const {t} = props;
  const country = Data.country;
  const state = Data.states;
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [fullName, setfullName] = useState('');
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
      <DropDown
        name={t('wallets.countryRegion')}
        data={country}
        SelectedItem={SelectedCountry}
        selectedItem={countryName}
        height={windowHeight(50)}
      />
      <Input
        placeholder={t('addNewAddress.fullName')}
        onChangeText={fullName => setfullName(fullName)}
        value={fullName}
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
        placeholder={t('checkDelivery.pinCode')}
        onChangeText={pinCode => setPinCode(pinCode)}
        value={pinCode}
        fontSize={fontSizes.FONT17}
        keyboardType={'phone-pad'}
      />
      <Input
        placeholder={t('addNewAddress.address')}
        onChangeText={address => setAddress(address)}
        value={address}
        fontSize={fontSizes.FONT17}
      />
      <Input
        placeholder={t('addNewAddress.area')}
        onChangeText={area => setArea(area)}
        value={area}
        fontSize={fontSizes.FONT17}
      />
      <Input
        placeholder={t('addNewAddress.landmark')}
        onChangeText={landMark => setLandMark(landMark)}
        value={landMark}
        fontSize={fontSizes.FONT17}
      />
      <Input
        placeholder={t('addNewAddress.town/city')}
        onChangeText={city => setCity(city)}
        value={city}
        fontSize={fontSizes.FONT17}
      />
      <View style={{height: windowHeight(20)}}></View>
      <DropDown
        name={t('addNewAddress.state/province/region')}
        data={state}
        SelectedItem={SelectedState}
        selectedItem={stateName}
        width={windowWidth(180)}
        height={windowHeight(50)}
      />
    </View>
  );
};
