import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import images from '@utils/images/images';

export default category = props => {
  const {colors} = useTheme();
  const {t} = props;

  return (
    <View style={[styles.main, {backgroundColor: colors.divider}]}>
      <View>
        <Text style={[styles.category, {color: colors.text}]}>
          {t('categoryArr.women')}
        </Text>
        <Text style={styles.subCategory}>
          {t('categoryArr.womanCollection')}
        </Text>
      </View>
      <Image source={images.category2} style={styles.categoryImage} />
    </View>
  );
};
