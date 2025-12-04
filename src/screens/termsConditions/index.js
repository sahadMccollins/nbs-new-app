import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import ContentSection from './contentSection';
import {windowWidth} from '@theme/appConstant';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';

export default function termsCondition({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const Termsconditons = Data.termsConditions;
  return (
    <View>
      <Header text={t('profile.termsConditions')} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: windowWidth(90)}}>
        <ContentSection t={t} termsconditons={Termsconditons} colors={colors} />
      </ScrollView>
    </View>
  );
}
