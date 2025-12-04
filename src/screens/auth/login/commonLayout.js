import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const socialButton = (image, onButtonClick, text) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.socialLoginView, {backgroundColor: colors.line}]}
      onPress={onButtonClick}>
      <Image style={styles.socialLoginImageView} source={image} />
    </TouchableOpacity>
  );
};

export {socialButton};
