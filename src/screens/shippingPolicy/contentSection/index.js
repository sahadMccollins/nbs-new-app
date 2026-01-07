import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { windowHeight } from '@theme/appConstant';
import { useValues } from '@App';

export default function ContentSection(props) {
  const { t, colors, policyKey } = props;
  const { viewRTLStyle, textRTLStyle } = useValues();

  return (
    <View style={styles.container}>

      {/* Intro */}
      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.intro`)}
      </Text>

      {/* Highlights */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.highlightsTitle`, { defaultValue: 'Highlights' })}
      </Text>

      <FlatList
        data={t(`${policyKey}.highlights`, { returnObjects: true })}
        keyExtractor={(_, i) => `highlight-${i}`}
        renderItem={({ item }) => (
          <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
            <View style={[styles.circle, { backgroundColor: colors.subText }]} />
            <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
              {item}
            </Text>
          </View>
        )}
      />

      {/* UAE Shipping */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.uaeShippingTitle`, { defaultValue: 'UAE Shipping' })}
      </Text>

      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.uaeShipping.cost`)}
      </Text>

      <FlatList
        data={[
          t(`${policyKey}.uaeShipping.sameDayCutoff.before`),
          t(`${policyKey}.uaeShipping.sameDayCutoff.after`),
          t(`${policyKey}.uaeShipping.businessDays`)
        ]}
        keyExtractor={(_, i) => `uae-${i}`}
        renderItem={({ item }) => (
          <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
            <View style={[styles.circle, { backgroundColor: colors.subText }]} />
            <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
              {item}
            </Text>
          </View>
        )}
      />

      {/* International Shipping */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.internationalShippingTitle`, { defaultValue: 'International Shipping' })}
      </Text>

      <FlatList
        data={t(`${policyKey}.internationalShipping.process`, { returnObjects: true })}
        keyExtractor={(_, i) => `intl-${i}`}
        renderItem={({ item }) => (
          <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
            <View style={[styles.circle, { backgroundColor: colors.subText }]} />
            <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
              {item}
            </Text>
          </View>
        )}
      />

      {/* Contact */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.contactTitle`, { defaultValue: 'Contact' })}
      </Text>

      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.contact.email`)}
      </Text>
      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t(`${policyKey}.contact.phone`)}
      </Text>

    </View>
  );
}
