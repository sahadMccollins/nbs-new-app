import React from 'react';
import {View, Text, TextInput} from 'react-native';
import StarRating from '@commonComponents/starRating';
import ButtonContainer from '@commonComponents/buttonContainer';
import styles from './styles';
import appColors from '@theme/appColors';

export default function orderReviewModal(props) {
  const {t, setShowModal, colors} = props;
  return (
    <View style={[styles.mainContainer, {backgroundColor: colors.background}]}>
      <View style={styles.paddingBottom}>
        <Text style={[styles.title, {color: colors.text}]}>
          {t('writeReview.writeReview')}
        </Text>
        <View style={styles.row}>
          <Text style={[styles.subTitle, {color: colors.text}]}>
            {t('writeReview.yourRating')}:
          </Text>
          <StarRating />
        </View>
        <Text style={[styles.subTitle, {color: colors.text}]}>
          {t('writeReview.review')} :
        </Text>
        <TextInput
          multiline={true}
          style={[
            styles.textInput,
            {borderColor: colors.brandsBg, color: colors.text},
          ]}
          cursorColor={appColors.primary}
        />
      </View>
      <ButtonContainer
        t={t}
        bottom={0}
        colors={colors}
        btnTitle={t('writeReview.submit')}
        text={t('orderFilter.back')}
        btnClick={() => {
          setShowModal(false);
        }}
      />
    </View>
  );
}
