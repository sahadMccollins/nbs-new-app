import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@commonComponents';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import styles from './style';
import {useValues} from '@App';

export default placeOrder = props => {
  const {t, colors} = props;
  const {viewRTLStyle, currSymbol, currValue} = useValues();

  const goToDeliveryDetails = () => {
    props.navigation.navigate('DeliveryDetails');
  };

  return (
    <View
      style={[
        styles.mainView,
        {backgroundColor: colors.card, flexDirection: viewRTLStyle},
      ]}>
      <View>
        <Text style={[styles.price, {color: colors.text}]}>
          {currSymbol}
          {(270.0 * currValue).toFixed(2)}
        </Text>
        <Text style={[styles.price, {color: appColors.primary}]}>
          {t('cart.viewDetails')}
        </Text>
      </View>
      <Button
        style={styles.order}
        fontSize={fontSizes.FONT18}
        text={'cart.placeOrder'}
        t={t}
        onPress={goToDeliveryDetails}
      />
    </View>
  );
};
