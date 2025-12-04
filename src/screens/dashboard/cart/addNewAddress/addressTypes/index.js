import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import Data from '@utils/json';
import Checksquare from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-vector-icons/Fontisto';
import { windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default addressTypes = props => {
  const {t, colors} = props;
  const {textRTLStyle, viewRTLStyle} = useValues();

  const [selectedAddress, setSelectedAddress] = useState();
  const [checkBox, setCheckBox] = useState(false);

  const addressTypes = Data.addressTypes;

  const onSelectRadioBtn = val => {
    addressTypes.map(item => {
      if (val == item.id) {
        if (item.selected == true) {
          !item.selected;
        } else {
          item.selected = true;
          setSelectedAddress(t(item.name));
        }
      } else {
        item.selected = false;
      }
    });
  };

  const onCheckBox = () => {
    setCheckBox(!checkBox);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
        {t('addNewAddress.typeOfAddress')}
      </Text>
      <View style={[styles.row,{marginVertical:windowHeight(6),flexDirection:viewRTLStyle}]}>
        {addressTypes.map((item, index) => (
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onSelectRadioBtn(index)}
              style={styles.radioButton}>
              {item.selected == true && <View style={styles.radioButtonIcon} />}
            </TouchableOpacity>
            <Text style={[styles.name, {color: colors.subText}]}>
              {t(item.name)}
            </Text>
          </View>
        ))}
      </View>
      <View style={[styles.row,{flexDirection:viewRTLStyle}]}>
        <View style={styles.checkBox}>
          <TouchableOpacity onPress={onCheckBox}>
            {checkBox ? (
              <Checksquare
                name="checksquare"
                size={22}
                color={appColors.primary}
              />
            ) : (
              <Checkbox
                name="checkbox-passive"
                size={18}
                color={appColors.border}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.textStyle, {color: colors.subText}]}>
          {t('addNewAddress.defaultAddress')}
        </Text>
      </View>
    </View>
  );
};
