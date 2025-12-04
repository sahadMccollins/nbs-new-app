import React from 'react';
import {View, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import Images from '@utils/images/images';
import {EditProfile} from '@utils/icons';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

export default profileImage = props => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <View style={styles.mainView}>
      <Image source={Images.user} resizeMode="contain" style={styles.image} />
      <View style={styles.edit}>
        <EditProfile />
      </View>
    </View>
  );
};
