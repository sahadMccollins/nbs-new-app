import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {useValues} from '@App';

export default function Wallets(props) {
  const {wallets, t, colors} = props;
  const {textRTLStyle, viewRTLStyle,currSymbol, currValue} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('paymentCard.wallets')}
      </Text>
      <FlatList
        data={wallets}
        renderItem={({item}) => (
          <View
            style={[
              styles.row,
              {backgroundColor: colors.cuponsbg, flexDirection: viewRTLStyle},
            ]}>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <Image source={item.image} style={styles.imageStyle} />
              <View>
                <Text
                  style={[
                    styles.name,
                    {color: colors.text, textAlign: textRTLStyle},
                  ]}>
                  {t(item.name)}
                </Text>
                <View
                  style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                  <Text style={styles.balance}>
                    {t('paymentCard.balance')}:
                  </Text>
                  <Text style={[styles.amount, {color: colors.text}]}>
                    {currSymbol}{(25.00 * currValue).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.delinkView}>
              <Text style={styles.deLink}>{t('paymentCard.delink')}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
