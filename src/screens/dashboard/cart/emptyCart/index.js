import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import styles from './style';
import Images from '@utils/images/images';

export default emptyCart = props => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <View style={[styles.mainView, {backgroundColor: colors.card}]}>
      <Image source={Images.emptyCart} />
      <View style={styles.blankView}></View>
      <Text style={[styles.cartEmpty, {color: colors.text}]}>
        {t('emptyCart.title')}
      </Text>
      <Text style={[styles.addCart, {color: colors.subText}]}>
        {t('emptyCart.discription')}
      </Text>
      <TouchableOpacity activeOpacity={1} style={styles.btnView}>
        <Text style={styles.btn}>{t('onBoarding.startShopping')}</Text>
      </TouchableOpacity>
    </View>
  );
};
