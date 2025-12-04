import React from 'react';
import {View, Text} from 'react-native';
import StarRating from '@commonComponents/starRating';
import styles from './styles';
import {useValues} from '@App';

export default productDescription = props => {
  const {t} = props;
  const {viewRTLStyle, textRTLStyle,currSymbol, currValue} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.name,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {t('product.discription')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: props.colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('product.content')}
      </Text>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <StarRating />
        <Text style={[styles.rating, {color: props.colors.subText}]}>
          {t('product.ratings')}
        </Text>
      </View>
      <View style={[styles.priceView, {flexDirection: viewRTLStyle}]}>
        <Text style={[styles.discountPrice, {color: props.colors.text}]}>
          {currSymbol}{(currValue * 32.00).toFixed(2)}
        </Text>
        <Text style={[styles.price, {color: props.colors.subText}]}>
        {currSymbol}{(currValue * 35.00).toFixed(2)}
        </Text>
        <Text style={styles.discount}>(20 % {t('product.off')})</Text>
      </View>
      <Text style={[styles.text, {textAlign: textRTLStyle}]}>
        {t('product.inclusive')}
      </Text>
    </View>
  );
};
