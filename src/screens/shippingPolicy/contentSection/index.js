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
        {t('termsCondition.introContent')}
      </Text>

      {/* Section 1 */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('termsCondition.section1Title')}
      </Text>
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('termsCondition.section1Content')}
      </Text>

      {/* Helper function for bullet lists */}
      {[
        'section2',
        'section3',
        'section4',
        'section5',
        'section6',
        'section8',
      ].map(section => (
        <View key={section}>
          <Text
            style={[
              styles.title,
              { color: colors.text, textAlign: textRTLStyle, marginBottom: 7 },
            ]}
          >
            {t(`termsCondition.${section}Title`)}
          </Text>

          <FlatList
            data={t(`termsCondition.${section}List`, { returnObjects: true })}
            keyExtractor={(_, i) => `${section}-${i}`}
            renderItem={({ item }) => (
              <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
                <View
                  style={[
                    styles.circle,
                    { backgroundColor: colors.subText },
                  ]}
                />
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
        </View>
      ))}

      {/* Section 7 – Nested List */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 10 }]}>
        {t('termsCondition.section7Title')}
      </Text>

      {t('termsCondition.section7List', { returnObjects: true }).map(
        (block, idx) => (
          <View key={idx}>
            <Text
              style={[
                // styles.content,
                {
                  color: colors.subText,
                  fontWeight: '600',
                  textAlign: textRTLStyle,
                  marginBottom: 7
                },
              ]}
            >
              {block.title}
            </Text>

            {block.items.map((item, i) => (
              <View
                key={i}
                style={[styles.row, { flexDirection: viewRTLStyle }]}
              >
                <View
                  style={[
                    styles.circle,
                    { backgroundColor: colors.subText },
                  ]}
                />
                <Text
                  style={[
                    styles.discription,
                    { color: colors.subText, textAlign: textRTLStyle },
                  ]}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        )
      )}

      {/* Section 9 */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('termsCondition.section9Title')}
      </Text>
      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('termsCondition.section9Content')}
      </Text>

      {/* Section 10 – Contact */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('termsCondition.section10Title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('termsCondition.section10Content')}
      </Text>

      {['email', 'phone', 'address'].map(key => (
        <Text
          key={key}
          style={[
            styles.content,
            { color: colors.subText, textAlign: textRTLStyle },
          ]}
        >
          {t(`termsCondition.section10List.${key}`)}
        </Text>
      ))}
    </View>

  );
};
