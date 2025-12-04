import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import StarReview from 'react-native-stars';

export default function starRating() {
  return (
    <StarReview
      rating={2.5}
      count={5}
      half={true}
      fullStar={<Icon name={'star'} size={25} style={[styles.myStarStyle]} />}
      emptyStar={
        <Icon
          name={'star'}
          size={25}
          style={[styles.myStarStyle, styles.myEmptyStarStyle]}
        />
      }
      halfStar={
        <Icon name={'star-half'} size={25} style={[styles.myStarStyle]} />
      }
    />
  );
}
