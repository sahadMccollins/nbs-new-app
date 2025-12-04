import React from 'react';
import {View, FlatList, Text, TouchableOpacity, ScrollView} from 'react-native';
import Data from '@utils/json';
import {useTranslation} from 'react-i18next';
import {Header} from '@commonComponents';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default function Pages({navigation}) {
  const {t} = useTranslation();
  const pages = Data.pages;
  const {viewRTLStyle, imageRTLStyle} = useValues();
  const {colors} = useTheme();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: colors.background}}>
      <Header text={t('profile.pages')} navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={pages}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          renderItem={({item, index}) => (
            <View>
              <View
                style={[styles.headingView, {backgroundColor: colors.product}]}>
                <Text style={[styles.title, {color: colors.text}]}>
                  {t(item.title)}
                </Text>
                <Text style={[styles.subTitle, {color: colors.subText}]}>
                  {t(item.subtitle)}
                </Text>
              </View>
              {item.innerPages.map(data => (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate(data.screen);
                  }}
                  style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
                  <Text style={[styles.pageTitle, {color: colors.text}]}>
                    {t(data.title)}
                  </Text>
                  <View style={{transform: [{scaleX: imageRTLStyle}]}}>
                    <Icon
                      name="chevron-small-right"
                      size={30}
                      color={colors.text}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
