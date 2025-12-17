import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { windowHeight } from '@theme/appConstant';
import { useValues } from '@App';

export default contentSection = props => {
  const { t, termsconditons, colors } = props;
  const { viewRTLStyle, textRTLStyle } = useValues();
  return (
    <View style={styles.container}>
      {/* Intro */}
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('refundAndCancellationPolicy.intro')}
      </Text>

      {/* Section 1 – Order Cancellation */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('refundAndCancellationPolicy.section1Title')}
      </Text>
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('refundAndCancellationPolicy.section1Content')}
      </Text>

      {/* Section 2 – Returns & Refunds */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('refundAndCancellationPolicy.section2Title')}
      </Text>
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('refundAndCancellationPolicy.section2Content')}
      </Text>

      {/* Section 3 – Damaged or Defective Items */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('refundAndCancellationPolicy.section3Title')}
      </Text>

      <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
        <View style={[styles.circle, { backgroundColor: colors.subText }]} />
        <Text
          style={[
            styles.discription,
            { color: colors.subText, textAlign: textRTLStyle },
          ]}
        >
          {t('refundAndCancellationPolicy.section3List')}
        </Text>
      </View>

      {/* Section 4 – Refund Timeline */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('refundAndCancellationPolicy.section4Title')}
      </Text>
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('refundAndCancellationPolicy.section4Content')}
      </Text>

      {/* Section 5 – Exchanges */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('refundAndCancellationPolicy.section5Title')}
      </Text>
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('refundAndCancellationPolicy.section5Content')}
      </Text>

      {/* Section 6 – Contact Us */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('refundAndCancellationPolicy.section6Title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('refundAndCancellationPolicy.section6Content')}
      </Text>

      {['email', 'phone', 'address'].map(key => (
        <Text
          key={key}
          style={[
            styles.content,
            { color: colors.subText, textAlign: textRTLStyle },
          ]}
        >
          {t(`refundAndCancellationPolicy.section6List.${key}`)}
        </Text>
      ))}
    </View>
  );
};
