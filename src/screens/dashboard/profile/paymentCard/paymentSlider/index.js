import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {chipImg} from '@utils/images/images';
import {windowWidth} from '@theme/appConstant';
import {RightArrow} from '@assets/icons/rightArrow';
import {useValues} from '@App';

export default function paymentSlider(props) {
  const {t, data, colors} = props;

  const {viewSelfRTLStyle, viewRTLStyle, isRTL} = useValues();
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          {flexDirection: viewRTLStyle},
        ]}
        inverted={isRTL ? true : false}
        renderItem={({item, index}) => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerView}>
              <View>
                <Image style={[styles.image]} source={item.image} />
                <View style={styles.textView}>
                  <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                    <Text style={styles.textStyle}>{t(item.cardName)}</Text>
                    <Text style={styles.textStyle}>{t(item.bankName)}</Text>
                  </View>
                  <View style={styles.margin}>
                    <Image
                      source={chipImg}
                      style={[styles.chipImg, {alignSelf: viewSelfRTLStyle}]}
                    />
                    <Text style={styles.number}>{item.creditNumber}</Text>
                  </View>
                  <View style={styles.blankView}></View>
                  <View
                    style={[
                      styles.row,
                      {
                        left: windowWidth(12),
                        flexDirection: viewRTLStyle,
                      },
                      isRTL ? {marginHorizontal: windowWidth(28)} : 0,
                    ]}>
                    <Text style={styles.text}>
                      {t('paymentCard.paigeTurner')}
                    </Text>
                    <View
                      style={[styles.rowContainer, {left: windowWidth(25)}]}>
                      <Text style={styles.validText}>
                        {t('paymentCard.VALIDTHRU')}
                      </Text>
                      <RightArrow />
                      <Text style={styles.numberText}>XX/XX</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <TouchableOpacity
                style={[
                  styles.btnContainer,
                  {backgroundColor: colors.cuponsbg},
                ]}>
                <Text style={[styles.btnText, {color: colors.subText}]}>
                  {t('cart.remove')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnContainer,
                  {backgroundColor: colors.cuponsbg},
                ]}>
                <Text style={[styles.btnText, {color: colors.subText}]}>
                  {t('profile.edit')}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      />
    </View>
  );
}
