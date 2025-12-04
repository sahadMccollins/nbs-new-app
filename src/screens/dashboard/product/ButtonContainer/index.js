import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Wishlist, Cart} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default buttonContainer = props => {
  const {t, colors} = props;
  const {viewRTLStyle} = useValues();

  return (
    <View
      style={[
        styles.mainView,
        {
          backgroundColor: colors.card,
          borderTopColor: colors.divider,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
        <Wishlist color={colors.text} />
        <Text style={[styles.text, {color: colors.text}]}>
          {t('tabBar.wishList')}
        </Text>
      </View>
      <View>
        <View
          style={[
            styles.verticleLine,
            {backgroundColor: colors.divider},
          ]}></View>
      </View>
      <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
        <Cart color={appColors.primary} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('cart');
          }}>
          <Text style={styles.cartText}>{t('checkDelivery.addToBag')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
