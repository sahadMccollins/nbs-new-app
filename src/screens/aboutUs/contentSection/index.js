import React from 'react';
import {View, Text, Image} from 'react-native';
import {aboutUs} from '@utils/images/images';
import styles from './styles';
import {Users} from '@assets/icons/users';
import {Stores} from '@assets/icons/stores';
import {Order} from '@assets/icons/order';
import {Brands} from '@assets/icons/brands';
import {windowHeight, fontSizes} from '@theme/appConstant';
import {useValues} from '@App';

export default contentSection = props => {
  const {t, colors} = props;
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('aboutUs.introduction')}
      </Text>
      <Image source={aboutUs} style={styles.image} />
      <Text style={[styles.subTitle, {color: colors.text}]}>
        {t('aboutUs.subTitle')}
      </Text>
      <Text style={[styles.discription, {color: colors.subText}]}>
        {t('aboutUs.content')}
      </Text>
      <Text
        style={[
          styles.discription,
          {marginBottom: windowHeight(12), color: colors.subText},
        ]}>
        {t('aboutUs.content1')}
      </Text>
      <View style={styles.rowContainer}>
        <View style={[styles.mainContainer, {backgroundColor: colors.product}]}>
          <View style={styles.row}>
            <Users />
            <Text style={[styles.textStyle, {color: colors.text}]}>
              {' '}
              {t('aboutUs.users')}
            </Text>
          </View>
          <Text style={styles.content}>{t('aboutUs.userContent')}</Text>
        </View>
        <View style={[styles.mainView, {backgroundColor: colors.product}]}>
          <View style={styles.row}>
            <Stores />
            <Text style={[styles.textStyle, {color: colors.text}]}>
              {t('aboutUs.stores')}
            </Text>
          </View>
          <Text style={[styles.content, {width: '80%', color: colors.subText}]}>
            {t('aboutUs.storeContent')}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.mainContainer, {backgroundColor: colors.product}]}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Order />
            <Text style={[styles.textStyle, {color: colors.text}]}>
              {' '}
              {t('aboutUs.orders')}
            </Text>
          </View>
          <Text style={[styles.content, {color: colors.subText}]}>
            {t('aboutUs.orderContent')}
          </Text>
        </View>
        <View style={[styles.mainView, {backgroundColor: colors.product}]}>
          <View style={styles.row}>
            <Brands />
            <Text
              style={[
                styles.textStyle,
                {color: colors.text, textAlign: textRTLStyle},
              ]}>
              {t('aboutUs.brands')}
            </Text>
          </View>
          <Text
            style={[
              styles.content,
              {width: '80%', color: colors.subText, textAlign: textRTLStyle},
            ]}>
            {t('aboutUs.brandContent')}
          </Text>
        </View>
      </View>
      <Text
        style={[
          styles.discription,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('aboutUs.content2')}
      </Text>
      <View style={styles.blankView}></View>
      <Text
        style={[
          styles.title,
          {
            fontSize: fontSizes.FONT22,
            color: colors.text,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('aboutUs.ourBrands')}
      </Text>
      <Text
        style={[
          styles.discription,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('aboutUs.brandDiscription')}
      </Text>
    </View>
  );
};
