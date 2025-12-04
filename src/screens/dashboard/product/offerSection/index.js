import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import {coupenCode} from '../../../../utils/images/images';
import {useValues} from '@App';

export default offerSection = props => {
  const {t} = props;
  const {viewRTLStyle, textRTLStyle, viewSelfRTLStyle} = useValues();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {t('OffersForYou.OffersForYou')}
      </Text>
      <View style={styles.txtView}>
        <Text
          style={[
            styles.offer,
            {color: props.colors.text, textAlign: textRTLStyle},
          ]}>
          {t('OffersForYou.name')}
        </Text>
        <Text
          style={[
            styles.discription,
            {color: props.colors.subText, textAlign: textRTLStyle},
          ]}>
          {t('OffersForYou.discription')}
        </Text>
        <View
          style={[
            styles.row,
            {flexDirection: viewRTLStyle, alignItems: viewSelfRTLStyle},
          ]}>
          <ImageBackground
            source={coupenCode}
            resizeMode={'contain'}
            style={styles.image}>
            <Text style={[styles.cupon, {color: props.colors.text}]}>
              {t('OffersForYou.MULTIKART10')}
            </Text>
          </ImageBackground>
          <TouchableOpacity activeOpacity={0.7} style={styles.copyText}>
            <Text style={[styles.copyText, {color: props.colors.subText}]}>
              {t('OffersForYou.tapToCopy')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
