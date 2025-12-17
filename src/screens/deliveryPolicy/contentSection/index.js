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
        {t('deliveryPolicy.intro')}
      </Text>

      {/* Section 1 – Delivery Coverage */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 7 }]}>
        {t('deliveryPolicy.section1.title')}
      </Text>

      <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
        <View style={[styles.circle, { backgroundColor: colors.subText }]} />
        <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
          <Text style={{ fontWeight: '600' }}>
            {t('deliveryPolicy.section1.domesticFirst')}
          </Text>
          {t('deliveryPolicy.section1.domestic')}
        </Text>
      </View>

      <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
        <View style={[styles.circle, { backgroundColor: colors.subText }]} />
        <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
          <Text style={{ fontWeight: '600' }}>
            {t('deliveryPolicy.section1.internationalFirst')}
          </Text>
          {t('deliveryPolicy.section1.international')}
        </Text>
      </View>

      {/* Section 2 – Processing Time */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 7 }]}>
        {t('deliveryPolicy.section2.title')}
      </Text>

      {['point1', 'point2'].map((key, i) => (
        <View key={i} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
            {t(`deliveryPolicy.section2.${key}`)}
          </Text>
        </View>
      ))}

      {/* Section 3 – Delivery Methods */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section3.title')}
      </Text>

      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section3.intro')}
      </Text>

      {['0', '1', '2'].map(index => (
        <View key={index} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
            {t(`deliveryPolicy.section3.table.rows_${index}_col1`)} —{' '}
            {t(`deliveryPolicy.section3.table.rows_${index}_col2`)} (
            {t(`deliveryPolicy.section3.table.rows_${index}_col3`)})
          </Text>
        </View>
      ))}

      <Text
        style={[
          styles.content,
          { color: colors.subText, fontStyle: 'italic', textAlign: textRTLStyle },
        ]}
      >
        {t('deliveryPolicy.section3.note')}
      </Text>

      {/* Section 4 – Order Tracking */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section4.title')}
      </Text>

      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section4.description')}
      </Text>

      {['point1', 'point2'].map((key, i) => (
        <View key={i} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
            {t(`deliveryPolicy.section4.${key}`)}
          </Text>
        </View>
      ))}

      {/* Section 5 – Delivery Delays */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section5.title')}
      </Text>

      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section5.description')}
      </Text>

      {['point1', 'point2', 'point3'].map((key, i) => (
        <View key={i} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text style={[styles.discription, { color: colors.subText, textAlign: textRTLStyle }]}>
            {t(`deliveryPolicy.section5.${key}`)}
          </Text>
        </View>
      ))}

      <Text
        style={[
          styles.content,
          { color: colors.subText, fontStyle: 'italic', textAlign: textRTLStyle },
        ]}
      >
        {t('deliveryPolicy.section5.note')}
      </Text>

      {/* Section 6 – Delivery Address */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 7  }]}>
        {t('deliveryPolicy.section6.title')}
      </Text>

      {['point1', 'point2'].map((key, i) => (
        <View key={i} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text
            style={[
              styles.discription,
              { color: colors.subText, textAlign: textRTLStyle },
            ]}
          >
            {t(`deliveryPolicy.section6.${key}`)}
          </Text>
        </View>
      ))}


      {/* Section 7 – Missed Deliveries */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle, marginBottom: 7 }]}>
        {t('deliveryPolicy.section7.title')}
      </Text>

      {['point1', 'point2'].map((key, i) => (
        <View key={i} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text
            style={[
              styles.discription,
              { color: colors.subText, textAlign: textRTLStyle },
            ]}
          >
            {t(`deliveryPolicy.section7.${key}`)}
          </Text>
        </View>
      ))}


      {/* Section 8 – Damaged or Missing Items */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section8.title')}
      </Text>

      <Text
        style={[
          styles.content,
          { color: colors.subText, textAlign: textRTLStyle },
        ]}
      >
        {t('deliveryPolicy.section8.description')}
      </Text>

      {['point1', 'point2', 'point3'].map((key, i) => (
        <View key={i} style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <View style={[styles.circle, { backgroundColor: colors.subText }]} />
          <Text
            style={[
              styles.discription,
              { color: colors.subText, textAlign: textRTLStyle },
            ]}
          >
            {t(`deliveryPolicy.section8.${key}`)}
          </Text>
        </View>
      ))}



      {/* Section 9 – Contact */}
      <Text style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('deliveryPolicy.section9.title')}
      </Text>

      {['email', 'phone', 'address', 'website'].map(key => (
        <Text
          key={key}
          style={[
            styles.content,
            { color: colors.subText, textAlign: textRTLStyle },
          ]}
        >
          {t(`deliveryPolicy.section9.${key}`)}
        </Text>
      ))}

      {/* Footer */}
      <Text style={[styles.content, { color: colors.subText, textAlign: textRTLStyle }]}>
        <Text style={{ fontWeight: '600' }}>{t('deliveryPolicy.footer1')}</Text>
        {t('deliveryPolicy.footer')}
      </Text>
    </View>
  );
};
