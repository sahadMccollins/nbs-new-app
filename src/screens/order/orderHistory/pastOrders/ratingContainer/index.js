import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Rating} from '@assets/icons/rating';
import {HelpCircle} from '@assets/icons/helpCircle';
import styles from './styles';
import {useValues} from '@App';

export default RatingContainer = props => {
  const {t, visibleModal, colors} = props;
  const [showModal, setShowModal] = useState(true);
  const {isDark, textRTLStyle, viewRTLStyle, viewSelfRTLStyle} = useValues();

  return (
    <View>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.row, {flexDirection: viewRTLStyle}]}
          onPress={visibleModal}>
          <Rating colors={colors.subText} />
          <Text style={[styles.order, {color: colors.subText}]}>
            {t('orderHistory.rate&Review')}
          </Text>
        </TouchableOpacity>
        <View style={{marginHorizontal: '10%'}}>
          <TouchableOpacity
            style={[styles.row, {flexDirection: viewRTLStyle}]}
            onPress={visibleModal}>
            <HelpCircle colors={colors.subText} />
            <Text style={[styles.order, {color: colors.subText}]}>
              {t('orderHistory.needHelp')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
