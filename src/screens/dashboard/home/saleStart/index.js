import React from 'react';
import {View, Text, Image} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import images from '@utils/images/images';
import styles from './style';

export default saleStart = props => {
  return (
    <View style={styles.mainView}>
      <View style={[styles.txtView, {backgroundColor: props.colors.product}]}>
        <Text style={styles.denimWear}>{props.t('homePage.denimWear')}</Text>
        <Text style={[styles.saleStart, {color: props.colors.text}]}>
          {props.t('homePage.salesStartsIn')}
        </Text>
        <View style={styles.timerView}>
          <View style={styles.timeView}>
            <Text style={styles.timeValue}>{props.t('homePage.hours')}</Text>
            <Text style={styles.time}>15</Text>
          </View>
          <View style={[styles.timeView, {marginHorizontal: windowWidth(10)}]}>
            <Text style={styles.timeValue}>{props.t('homePage.minutes')}</Text>
            <Text style={styles.time}>10</Text>
          </View>
          <View style={styles.timeView}>
            <Text style={styles.timeValue}>{props.t('homePage.seconds')}</Text>
            <Text style={styles.time}>35</Text>
          </View>
        </View>
        <Text style={styles.explore}>{props.t('homePage.exploreNow')}</Text>
      </View>
      <Image source={images.denimWear} style={styles.image} />
    </View>
  );
};
