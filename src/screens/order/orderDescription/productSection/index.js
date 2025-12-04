import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {product15} from '@utils/images/images';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default productSection = props => {
  const {t, colors} = props;
  const {textRTLStyle, viewRTLStyle} = useValues();
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={[styles.boxView, {backgroundColor: colors.card}]}>
          <View
            style={[
              styles.row,
              {padding: windowHeight(10), flexDirection: viewRTLStyle},
            ]}>
            <Image source={product15} style={styles.imageStyle} />
            <View style={styles.textView}>
              <Text style={[styles.name, {color: colors.text}]}>
                {t('products.productName1')}
              </Text>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <Text style={[styles.textStyle, {color: colors.subText}]}>
                  {t('orderSuccess.size')} : {t('sizes.small')}
                </Text>
                <Text style={[styles.textStyle, {color: colors.subText}]}>
                  {t('orderSuccess.qty')}
                </Text>
                <Text> : </Text>
                <Text>1</Text>
              </View>
              <Text
                style={[
                  styles.name,
                  {color: colors.text, textAlign: textRTLStyle},
                ]}>
                $32.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
