import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '@App';

export default cuponList = props => {
  const {t, colors, cupons} = props;
  const {viewRTLStyle,textRTLStyle,currSymbol, currValue} = useValues();

  return (
    <View style={styles.container}>
      <FlatList
        data={cupons}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={[styles.seperator, {backgroundColor: colors.product}]} />
        )}
        renderItem={({item}) => (
          <View style={styles.mainContainer}>
            <View style={[styles.row, {justifyContent: 'space-between',flexDirection:viewRTLStyle}]}>
              <View style={[styles.row,{flexDirection:viewRTLStyle}]}>
                <Text style={[styles.name, {color: colors.text}]}>
                  {t(item.name)}
                </Text>
                <View
                  style={[styles.mainView, {backgroundColor: colors.product}]}>
                  <Text style={[styles.cupon, {color: colors.subText}]}>
                    {t('cupons.save')}
                  </Text>
                  <Text style={[styles.cupon, {color: colors.subText}]}>
                    {currSymbol}{t((item.amount * currValue).toFixed(2))}
                  </Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={1} style={styles.applyText}>
                <Text style={styles.applyText}>{t('cupons.apply')}</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.disc, {color: colors.subText}]}>
              {t(item.disc)}
            </Text>
            <TouchableOpacity activeOpacity={1} style={[styles.viewText]}>
              <Text style={[styles.viewText,{textAlign:textRTLStyle}]}> {t('cupons.viewT&C')}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
