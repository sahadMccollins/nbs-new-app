import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Cart, Remove} from '@utils/icons';
import {useValues} from '@App';

export default withAddToCart = props => {
  const {t, onPressAddToCart, onPressRemove, colors} = props;
  const {viewRTLStyle} = useValues();

  return (
    <View>
      <View style={[styles.line, {backgroundColor: colors.product}]} />
      <View style={[styles.options, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
          onPress={onPressAddToCart}>
          <Cart height={'15'} width={'15'} />
          <Text
            style={[styles.optionText, {color: props.colors.text, top: -2}]}>
            {props.t('wishList.addToCart')}
          </Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
          onPress={onPressRemove}>
          <Remove height={'14'} width={'14'} />
          <Text style={[styles.optionText, {color: props.colors.text}]}>
            {props.t('cart.remove')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
