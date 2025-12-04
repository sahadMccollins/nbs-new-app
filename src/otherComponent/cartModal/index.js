import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useValues} from '@App';
import {useTheme} from '@react-navigation/native';

export default function CartModal(props) {
  const {t, title} = props;
  const {colors} = useTheme();
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.modal,
        {
          backgroundColor: colors.background,
          paddingBottom: props.paddingBottom ? props.paddingBottom : null,
        },
      ]}>
      <View style={styles.margin}>
        <Text
          style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
          {title}
        </Text>
        <Text
          style={[
            styles.subTitle,
            {color: colors.subText, textAlign: textRTLStyle},
          ]}>
          {t('cartModal.removeDesc')}
        </Text>
        <View
          style={[
            styles.bottomContainer,
            {
              backgroundColor: colors.background,
              flexDirection: viewRTLStyle,
            },
          ]}>
          <TouchableOpacity activeOpacity={1}>
            <Text style={[styles.wishlistStyle, {color: colors.text}]}>
              {t('cartModal.moveToWishlist')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.removeStyle}>{t('cart.remove')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
