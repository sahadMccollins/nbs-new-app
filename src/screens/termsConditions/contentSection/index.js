import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default contentSection = props => {
  const {t, termsconditons, colors} = props;
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[styles.name, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('termsCondition.termsCondition')}
      </Text>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('aboutUs.introduction')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.introContent')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.introContent1')}
      </Text>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('termsCondition.Intellectual')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.intellectualContent')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.intellectualContent1')}
      </Text>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('termsCondition.restrictions')}
      </Text>
      <Text
        style={[
          [styles.content, {color: colors.subText, textAlign: textRTLStyle}],
          {marginVertical: windowHeight(8), textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.restricted')}
      </Text>
      <FlatList
        data={termsconditons}
        style={styles.mainView}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({item, index}) => (
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View
              style={[styles.circle, {backgroundColor: colors.subText}]}></View>
            <View>
              <Text style={[styles.discription, {color: colors.subText}]}>
                {t(item.content)}
              </Text>
            </View>
          </View>
        )}
      />
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.content')}
      </Text>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('termsCondition.yourContent')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.yourDesc')}
      </Text>
      <Text
        style={[
          styles.content,
          {color: colors.subText, textAlign: textRTLStyle},
        ]}>
        {t('termsCondition.yourDesc1')}
      </Text>
    </View>
  );
};
