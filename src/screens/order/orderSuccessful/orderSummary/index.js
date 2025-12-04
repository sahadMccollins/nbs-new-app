import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import Data from '@utils/json';
import OrderDetails from '../../../dashboard/cart/orderDetails';
import {useValues} from '@App';

export default orderSummary = props => {
  const {t, colors} = props;
  const order = Data.order;
  const {viewRTLStyle, textRTLStyle, isRTL, currSymbol, currValue} =
    useValues();
  return (
    <View style={styles.mainView}>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('orderSuccess.orderSummary')}
      </Text>
      <FlatList
        data={order}
        style={styles.container}
        ItemSeparatorComponent={() => (
          <View
            style={[styles.orderSeperator, {backgroundColor: colors.brandsBg}]}
          />
        )}
        renderItem={({item, index}) => (
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <Image source={item.image} style={styles.imageStyle} />
            <View style={styles.textContainer}>
              <Text style={[styles.name, {color: colors.text}]}>
                {t(item.name)}
              </Text>
              <View
                style={[
                  styles.row,
                  {
                    flexDirection: viewRTLStyle,
                    marginHorizontal: isRTL ? 10 : 0,
                  },
                ]}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: colors.subText, textAlign: textRTLStyle},
                  ]}>
                  {t('orderSuccess.size')}
                </Text>
                <Text style={styles.textStyle}> : </Text>
                <Text style={[styles.textStyle, {color: colors.subText}]}>
                  {t(item.size)}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: colors.subText,
                      textAlign: textRTLStyle,
                      marginHorizontal: 6,
                    },
                  ]}>
                  {t('orderSuccess.qty')}
                </Text>
                <Text style={styles.textStyle}> : </Text>
                <Text style={styles.textStyle}> 1 </Text>
              </View>
              <Text
                style={[
                  styles.price,
                  {color: colors.text, textAlign: textRTLStyle},
                ]}>
                {currSymbol}
                {(item.price * currValue).toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      />
      <OrderDetails t={t} colors={colors} />
    </View>
  );
};
