import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import ContentSection from './contentSection';
import ContactSection from './contactSection';
import { windowWidth } from '@theme/appConstant';
import TopSection from './topSection';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function helpCenter({ navigation }) {
  const { t } = useTranslation()
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <SafeAreaView>
      <Header text={t('helpCenter.helpCenter')} navigation={navigation} />

      <View style={{ flexDirection: 'row', marginHorizontal: windowWidth(20), marginTop: 1 }}>
        <TouchableOpacity
          onPress={() => setActiveTab('faq')}
          style={{
            flex: 1,
            paddingVertical: 12,
            borderBottomWidth: 2,
            borderBottomColor: activeTab === 'faq' ? colors.primary : 'transparent',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: activeTab === 'faq' ? colors.primary : colors.text,
              // fontWeight: '600',
            }}
          >
            {t('helpCenter.faq')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('contact')}
          style={{
            flex: 1,
            paddingVertical: 12,
            borderBottomWidth: 2,
            borderBottomColor: activeTab === 'contact' ? colors.primary : 'transparent',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: activeTab === 'contact' ? colors.primary : colors.text,
              // fontWeight: '600',
            }}
          >
            {t('helpCenter.contact')}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: windowWidth(20), marginBottom: windowWidth(90) }}>
        <TopSection t={t} colors={colors} />
        {activeTab === 'contact' ? (
          <ContactSection t={t} colors={colors} />
        ) : (
          <ContentSection t={t} colors={colors} />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}