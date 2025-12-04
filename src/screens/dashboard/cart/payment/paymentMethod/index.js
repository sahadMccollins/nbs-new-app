import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import style from './styles';
import DebitCard from './debitCard';
import Wallets from './wallets';
import NetBanking from './netBanking';
import Data from '@utils/json';
import {useValues} from '@App';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default paymentMethod = props => {
  const {t, paymentOptions, onPress, colors} = props;
  const [selectedpayment, setSelectedPayment] = useState(0);
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();

  const onSelect = val => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedPayment(val);
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Text
          style={[style.title, {color: colors.text, textAlign: textRTLStyle}]}>
          {t('paymentDetails.paymentMethod')}
        </Text>
        <FlatList
          data={paymentOptions}
          contentContainerStyle={style.scrollView}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                activeOpacity={1}
                style={[style.mainView, {backgroundColor: colors.product}]}>
                <View style={[style.row, {flexDirection: viewRTLStyle}]}>
                  {isDark ? (
                    <Image source={item.darkImg} style={style.image} />
                  ) : (
                    <Image source={item.image} style={style.image} />
                  )}
                  <Text style={[style.name, {color: colors.text}]}>
                    {t(item.name)}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      onSelect(index), onPress;
                    }}
                    style={[
                      style.radioButton,
                      {backgroundColor: colors.styleBackground},
                    ]}>
                    {index == selectedpayment && (
                      <View style={style.radioButtonIcon} />
                    )}
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              {index == selectedpayment && selectedpayment == 1 && (
                <DebitCard t={t} colors={colors} onSelect={onSelect} />
              )}
              {index == selectedpayment && selectedpayment == 2 && (
                <Wallets t={t} colors={colors} wallets={Data.paymentwallets} />
              )}
              {index == selectedpayment && selectedpayment == 3 && (
                <NetBanking
                  t={t}
                  colors={colors}
                  netBankingData={Data.netBankingData}
                  onSelect={onSelect}
                />
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};
