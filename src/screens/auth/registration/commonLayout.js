import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './style';

const socialButton = image => {
  return (
    <TouchableOpacity style={styles.socialLoginView}>
      <Image style={styles.socialLoginImageView} source={image} />
    </TouchableOpacity>
  );
};

export {socialButton};
