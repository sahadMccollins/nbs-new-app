import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioButton from '@commonComponents/radioButton';
import {Button} from '@commonComponents';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default netBanking = props => {
  const {t, netBankingData} = props;
  const [selectRadioBtn, setRadioBtn] = useState();

  return (
    <View>
      <RadioButton
        selectRadioBtn={selectRadioBtn}
        setRadioBtn={setRadioBtn}
        data={netBankingData}
      />
      <Button
        text={'paymentDetails.makePayment'}
        style={styles.buttonStyle}
        fontSize={fontSizes.FONT20}
        t={t}
        onPress={props.onSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '40%',
    backgroundColor: appColors.primary,
    height: windowHeight(40),
  },
});
