import React from 'react';
import {View, Text} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import appColors from '@theme/appColors';
import styles from './styles';
import {Rating} from '@assets/icons/rating';
import {HelpCircle} from '@assets/icons/helpCircle';
import Data from '@utils/json';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default OrderTracker = props => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {viewRTLStyle} = useValues();

  return (
    <View style={styles.container}>
      <View style={styles.timeLineView}>
        <Timeline
          data={Data.orderTrackerData}
          circleSize={20}
          circleColor={appColors.primary}
          lineColor={appColors.primary}
          timeContainerStyle={{minWidth: 52, marginTop: -5}}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 5, flexDirection: viewRTLStyle},
          }}
          isUsingFlatlist={true}
          innerCircle={'icon'}
        />
      </View>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Rating />
        <Text style={[styles.order, {color: colors.subText}]}>
          {t('orderHistory.rate&Review')}
        </Text>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <HelpCircle />
          <Text style={[styles.order, {color: colors.subText}]}>
            {t('orderHistory.needHelp')}
          </Text>
        </View>
      </View>
    </View>
  );
};
