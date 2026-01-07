import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@commonComponents';
import styles from './style';
import { fontSizes } from '@theme/appConstant';

export default startShopping = props => {
  const t = props.t;
  const goToHome = () => {
    props.navigation.replace('LoginScreen');
  };
  return (
    <View style={styles.customContainer} >
      <Button
        text="START SHOPPING"
        style={styles.buttonStyle}
        fontSize={fontSizes.FONT20}
        onPress={goToHome}
        t={t}
      />
      <View style={styles.createNewMainView}>
        <Text style={styles.createNewText}>
          Already have an account?
        </Text>
        <Text
          onPress={() => goToHome()}
          style={[styles.createNewText, styles.createNewUnderlineText]}>
          Sign In
        </Text>
      </View>
    </View>
  );
};
