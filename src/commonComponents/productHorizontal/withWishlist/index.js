import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Cart, Remove, DropDown} from '@utils/icons';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default withWishlist = props => {
  const {onPressmoveToWishlist, icon} = props;
  const {colors} = useTheme();
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View>
      <View
        style={[
          styles.dropDowns,
          {
            flexDirection: viewRTLStyle,
          },
        ]}>
        <View
          style={[
            styles.dropDownValue,
            {backgroundColor: colors.product, flexDirection: viewRTLStyle},
          ]}>
          <Text style={[styles.dropDown, {color: props.colors.text}]}>
            Qty: 1
          </Text>
          <DropDown height={windowHeight(12)} width={windowWidth(12)} />
        </View>
        <View
          style={[
            styles.dropDownValue,
            {
              marginLeft: windowHeight(12),
              backgroundColor: colors.product,
              flexDirection: viewRTLStyle,
            },
          ]}>
          <Text
            style={[
              styles.dropDown,
              {color: props.colors.text, textAlign: textRTLStyle},
            ]}>
            Size: S
          </Text>
          <DropDown height={windowHeight(12)} width={windowWidth(12)} />
        </View>
      </View>
      <View style={[styles.line, {backgroundColor: colors.product}]} />
      <View style={[styles.options, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
          onPress={onPressmoveToWishlist}>
          {icon}
          <Text style={[styles.optionText, {color: props.colors.text}]}>
            {props.t('cart.moveTowishlist')}
          </Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
          onPress={onPressmoveToWishlist}>
          <Remove />
          <Text
            style={[
              styles.optionText,
              {color: props.colors.text, top: windowHeight(2)},
            ]}>
            {props.t('cart.remove')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
