import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import RadioButton from '@commonComponents/radioButton';
import Data from '@utils/json';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {styles} from './styles';
import ButtonContainer from '@commonComponents/buttonContainer';
import { useValues } from '@App';

export default function OrderFilterModal(props) {
  const [selectRadioBtn, setRadioBtn] = useState();
  const {t, setShowOrderModal, colors} = props;
  const {textRTLStyle} = useValues()

  return (
    <View>
      <View style={{backgroundColor: colors.background}}>
        <ScrollView style={{paddingBottom: windowHeight(61)}}>
          <View style={styles.margin}>
            <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
              {t('shopPage.filters')}
            </Text>
            <RadioButton
              selectRadioBtn={selectRadioBtn}
              setRadioBtn={setRadioBtn}
              data={Data.orderFilters}
              color={appColors.grey}
              fontSize={fontSizes.FONT18}
              padding={windowHeight(5)}
              marginTop={windowHeight(10)}
            />
            <Text
              style={[
                styles.title,
                {marginTop: windowHeight(16), color: colors.text,textAlign:textRTLStyle},
              ]}>
              {t('orderFilter.timeFilter')}
            </Text>
            <RadioButton
              selectRadioBtn={selectRadioBtn}
              setRadioBtn={setRadioBtn}
              data={Data.timeFilter}
              color={appColors.grey}
              fontSize={fontSizes.FONT18}
              padding={windowHeight(5)}
              marginTop={windowHeight(10)}
            />
          </View>
        </ScrollView>
        <ButtonContainer
          t={t}
          bottom={0}
          colors={colors}
          btnTitle={t('cupons.apply')}
          text={t('orderFilter.back')}
          btnClick={() => {
            setShowOrderModal(false);
          }}
        />
      </View>
    </View>
  );
}
