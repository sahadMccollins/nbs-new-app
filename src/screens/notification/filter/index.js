import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default filter = props => {
  const {t, colors, selectValue, notification, select} = props;
  const {viewRTLStyle} = useValues();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.scrollView,
        {flexDirection: viewRTLStyle},
      ]}>
      {notification.map((item, key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.8}
          onPress={() => selectValue(key)}
          style={[
            styles.filterView,
            {
              backgroundColor:
                key === select ? appColors.primary : colors.styleBackground,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {color: key === select ? colors.background : colors.text},
            ]}>
            {t(item.title)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
