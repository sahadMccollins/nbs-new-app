import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import ContentSection from './contentSection';
import { windowWidth } from '@theme/appConstant';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function refundPolicy({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const Termsconditons = Data.termsConditions;
  return (
    <SafeAreaView>
      <Header text={t('profile.refundPolicy')} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: windowWidth(90) }}>
        <ContentSection t={t} termsconditons={Termsconditons} colors={colors} />
      </ScrollView>
    </SafeAreaView>
  );
}
