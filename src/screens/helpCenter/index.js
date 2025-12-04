import React from 'react';
import {View,ScrollView} from 'react-native';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import ContentSection from './contentSection';
import { windowWidth} from '@theme/appConstant';
import TopSection from './topSection';
import {useTheme} from '@react-navigation/native';

export default function helpCenter({navigation}) {
    const {t} = useTranslation()
    const {colors} = useTheme();
  return (
    <View>
      <Header text={t('helpCenter.helpCenter')} navigation={navigation} />
      <ScrollView  showsVerticalScrollIndicator={false} style={{marginHorizontal: windowWidth(20),marginBottom:windowWidth(90)}}>
      <TopSection t={t} colors={colors}/> 
      <ContentSection t={t} colors={colors}/>
      </ScrollView>
    </View>
  )
}