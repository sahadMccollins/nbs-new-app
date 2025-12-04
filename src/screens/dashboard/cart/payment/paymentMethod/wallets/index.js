import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import DropDown from '@commonComponents/dropdown';
import RadioButton from '@commonComponents/radioButton';
import Data from '@utils/json';
import {windowHeight} from '@theme/appConstant';

export default wallets = props => {
  const {t, wallets} = props;
  const [selectRadioBtn, setRadioBtn] = useState();

  const Banks = Data.chooseBank;
  const [selectedItem, setSelectedItem] = useState();

  const SelectedItem = val => {
    setSelectedItem(val);
  };

  return (
    <View style={styles.container}>
      <RadioButton
        selectRadioBtn={selectRadioBtn}
        setRadioBtn={setRadioBtn}
        data={wallets}
      />
      <View style={styles.blankView}></View>
      <DropDown
        name={t('wallets.countryRegion')}
        data={Banks}
        SelectedItem={SelectedItem}
        selectedItem={selectedItem}
        height={windowHeight(45)}
      />
    </View>
  );
};
