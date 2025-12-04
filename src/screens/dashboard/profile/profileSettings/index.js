import React, {useState} from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Header, Input, Divider} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import SaveDetails from './saveDetails';
import Security from './security';
import ProfileImage from './profileImage';
import DropDown from '@commonComponents/dropdown';
import Data from '@utils/json';
import {useValues} from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSettings({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const genders = Data.gender;
  const {textRTLStyle} = useValues();
  const [selectedItem, setSelectedItem] = useState();
  const SelectedItem = val => {
    setSelectedItem(val);
  };

  return (
    <SafeAreaView>
      <Header text={t('profile.profileSetting')} navigation={navigation} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <ProfileImage />
          <Text
            style={[
              styles.details,
              {color: colors.text, textAlign: textRTLStyle},
            ]}>
            {t('profileSettings.personalDetails')}
          </Text>
          <Input
            placeholder={t('profileSettings.firstName')}
            width={windowWidth(420)}
            left={windowWidth(50)}
            right={windowWidth(50)}
          />
          <Input
            placeholder={t('profileSettings.lastName')}
            width={windowWidth(420)}
            left={windowWidth(50)}
            right={windowWidth(50)}
          />
          <Input
            placeholder={t('profileSettings.DOB')}
            width={windowWidth(420)}
            left={windowWidth(50)}
            right={windowWidth(50)}
          />
          <View style={styles.genderView}>
            <DropDown
              name={t('profileSettings.gender')}
              data={genders}
              SelectedItem={SelectedItem}
              selectedItem={selectedItem}
              width={windowWidth(90)}
              height={windowHeight(50)}
              fontSize={fontSizes.FONT21}
            />
          </View>
          <Divider marginTop={windowHeight(24)} />
          <Security />
        </View>
      </ScrollView>
      <SaveDetails />
    </SafeAreaView>
  );
}
