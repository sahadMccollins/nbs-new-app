import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';
import {GlobalStyle} from '@style';
import StarRating from '@commonComponents/starRating';
import {DisLike} from '@assets/icons/disLike';
import {Like} from '@assets/icons/like';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default reViewSection = props => {
  const {t, reviews} = props;
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={GlobalStyle.container}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text style={[styles.title, {color: props.colors.text}]}>
          {t('customerReview.customerReview')} (24)
        </Text>
        <TouchableOpacity activeOpacity={1} style={styles.allReview}>
          <Text style={styles.allReview}>{t('customerReview.allReviews')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: windowHeight(8)}}></View>
      <FlatList
        data={reviews}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={[styles.seperator, {backgroundColor: colors.brandsBg}]}
          />
        )}
        renderItem={({item, index}) => (
          <View>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <Image source={item.image} style={styles.imageStyle} />
              <View>
                <View
                  style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                  <Text style={[styles.name, {color: props.colors.text}]}>
                    {t(item.name)}
                  </Text>
                  <Text style={styles.line}> | </Text>
                  <Text style={[styles.name, {color: props.colors.text}]}>
                    {t(item.date)}
                  </Text>
                </View>
                <View
                  style={{flexDirection: viewRTLStyle}}>
                  <StarRating />
                </View>
              </View>
            </View>
            <Text
              style={[
                styles.discription,
                {color: props.colors.subText, textAlign: textRTLStyle},
              ]}>
              {t(item.review)}
            </Text>
            <View
              style={[
                styles.rowContainer,
                {justifyContent: 'space-between', flexDirection: viewRTLStyle},
              ]}>
              <View
                style={[
                  styles.sizeView,
                  {
                    backgroundColor: props.colors.line,
                    flexDirection: viewRTLStyle,
                  },
                ]}>
                <Text
                  style={[
                    styles.size,
                    {color: props.colors.text, textAlign: textRTLStyle},
                  ]}>
                  {t('customerReview.sizeBought')}
                </Text>
                <Text style={styles.left}>:</Text>
                <Text
                  style={[
                    styles.sizeText,
                    {color: props.colors.search, textAlign: textRTLStyle},
                  ]}>
                  {t('sizes.small')}
                </Text>
              </View>
              <View
                style={[
                  styles.row,
                  {
                    padding: windowHeight(5),
                    width: '28%',
                    flexDirection: viewRTLStyle,
                  },
                ]}>
                <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                  <TouchableOpacity activeOpacity={1}>
                    <Like />
                  </TouchableOpacity>
                  <Text
                    style={[styles.textStyle, {color: props.colors.subText}]}>
                    {item.like}
                  </Text>
                </View>
                <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                  <TouchableOpacity activeOpacity={1}>
                    <DisLike />
                  </TouchableOpacity>
                  <Text
                    style={[styles.textStyle, {color: props.colors.subText}]}>
                    {item.disLike}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
