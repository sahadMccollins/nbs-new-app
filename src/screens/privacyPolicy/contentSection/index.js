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
        {t('privacyPolicy.intro')}
      </Text>

      {/* Section 1 – Information We Collect */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 7 }]}>
        {t('privacyPolicy.section1Title')}
      </Text>

      <FlatList
        data={t('privacyPolicy.section1List', { returnObjects: true })}
        keyExtractor={(_, i) => `section1-${i}`}
        renderItem={({ item }) => (
          <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
            <View style={[styles.circle, { backgroundColor: colors.subText }]} />
            <Text
              style={[
                styles.discription,
                { color: colors.subText, textAlign: textRTLStyle },
              ]}
            >
              {item}
            </Text>
          </View>
        )}
      />

      {/* Section 2 – How We Use Your Information */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 7 }]}>
        {t('privacyPolicy.section2Title')}
      </Text>

      <FlatList
        data={t('privacyPolicy.section2List', { returnObjects: true })}
        keyExtractor={(_, i) => `section2-${i}`}
        renderItem={({ item }) => (
          <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
            <View style={[styles.circle, { backgroundColor: colors.subText }]} />
            <Text
              style={[
                styles.discription,
                { color: colors.subText, textAlign: textRTLStyle },
              ]}
            >
              {item}
            </Text>
          </View>
        )}
      />

      {/* Section 3 – Data Protection */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('privacyPolicy.section3Title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('privacyPolicy.section3Content')}
      </Text>

      {/* Section 4 – Cookies */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('privacyPolicy.section4Title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('privacyPolicy.section4Content')}
      </Text>

      {/* Section 5 – Your Rights */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('privacyPolicy.section5Title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('privacyPolicy.section5Content')}
      </Text>

      {/* Section 6 – Contact Us */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('privacyPolicy.section6Title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('privacyPolicy.section6Content')}
      </Text>

      {['email', 'phone', 'address'].map(key => (
        <Text
          key={key}
          style={[
            styles.content,
            { color: colors.subText, textAlign: textRTLStyle },
          ]}
        >
          {t(`privacyPolicy.section6List.${key}`)}
        </Text>
      ))}
    </View>
  );
};
