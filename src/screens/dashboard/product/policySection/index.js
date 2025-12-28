import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { GlobalStyle } from '@style';
import { useValues } from '@App';

export default policySection = props => {
  const { t } = props;
  const { textRTLStyle } = useValues();

  return (
    <View style={GlobalStyle.container}>
      <Text
        style={[
          styles.title,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        {t('policySection.name')}
      </Text>
      <Text
        style={[
          styles.discription,
          { color: props.colors.subText, textAlign: textRTLStyle },
        ]}>
        {t('policySection.content')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    color: appColors.black,
  },
  discription: {
    marginVertical: windowHeight(6),
    fontSize: fontSizes.FONT17,
    color: appColors.gray,
    fontFamily: appFonts.LatoMidum,
    lineHeight: windowHeight(18),
  },
});
