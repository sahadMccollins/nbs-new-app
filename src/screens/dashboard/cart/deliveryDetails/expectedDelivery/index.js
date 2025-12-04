import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import { useValues } from '@App';


export default expectedDelivery = props => {
  const {t, data, colors} = props;
  const {viewRTLStyle,textRTLStyle} = useValues()
  return (
    <View style={styles.mainView}>
      <Text style={[styles.title, {color: colors.text}]}>
        {t('deliveryDetails.expectedDelivery')}
      </Text>
      <FlatList
        data={data}
        contentContainerStyle={styles.scrollView}
        style={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({item, index}) => (
          <View
            style={[styles.rowContainer, {backgroundColor: colors.product,flexDirection:viewRTLStyle}]}>
            <Image source={item.image} style={styles.imageStyle} />
            <View style={styles.textContainer}>
              <Text style={[styles.name, {color: colors.subText}]}>
                {t(item.name)}
              </Text>
              <View style={[styles.row,{flexDirection:viewRTLStyle}]}>
                <Text style={[styles.deliveryText, {color: colors.text}]}>
                  {t('deliveryDetails.deliveryBy')}
                </Text>
                <Text style={styles.date}>{t(item.date)}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
