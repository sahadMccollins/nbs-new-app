import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import { useValues } from '@App';

export default promotions = props => {
  const {t, offers, colors} = props;
  const [showMore, setShowMore] = useState(false);
  const displayShowMore = () => {
    setShowMore(!showMore);
  };

  const {textRTLStyle} = useValues()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
        {t('paymentDetails.offers&promotions')}
      </Text>
      <FlatList
        data={offers}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            {item.showMore == false && (
              <View
                style={[
                  styles.mainContainer,
                  {backgroundColor: colors.product},
                ]}>
                <Text style={[styles.discription,{textAlign:textRTLStyle}]}>{t(item.offerDesc)}</Text>
              </View>
            )}
            {showMore && item.showMore && (
              <View
                style={[
                  styles.mainContainer,
                  {backgroundColor: colors.product},
                ]}>
                <Text style={styles.discription}>{t(item.offerDesc)}</Text>
              </View>
            )}
          </View>
        )}
      />
      {showMore ? (
        <TouchableOpacity activeOpacity={1} onPress={() => displayShowMore()}>
          <Text style={styles.showMore}>{t('paymentDetails.showLess')}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={1} onPress={() => displayShowMore()}>
          <Text style={styles.showMore}>{t('paymentDetails.showMore')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
