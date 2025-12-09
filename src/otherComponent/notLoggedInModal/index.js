// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { windowWidth } from '@theme/appConstant';
// import Data from '@utils/json';
// import { useTheme } from '@react-navigation/native';
// import styles from './styles';
// import { GlobalStyle } from '@style';
// import { useTranslation } from 'react-i18next';
// import { useValues } from '../../../App';

// export function LoginModal(props) {
//   const { colors } = useTheme();
//   const [currencys] = useState(Data.currencys);
//   const { t } = useTranslation();
//   const { setCurrSymbol, setCurrValue } = useValues();

//   return (
//     <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//       <Text style={[styles.text, { color: colors.text }]}>
//         {t('multicurrencyModal.selectCurrency')}
//       </Text>
//       {currencys.map((item, key) => (
//         <TouchableOpacity
//           key={key}
//           activeOpacity={0.8}
//           onPress={() => changeCurrency(item.key, item.value)}
//           style={[styles.icon, { flexDirection: 'row' }]}>
//           {item.icons}
//           <Text
//             style={[
//               styles.text,
//               { color: colors.text, marginLeft: windowWidth(20) },
//             ]}>
//             {t(item.name)}{' '}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { windowWidth, windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { GlobalStyle } from '@style';
import { useTranslation } from 'react-i18next';
import appColors from '@theme/appColors';

export function NotLoggedInModal(props) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { onCancel, navigation, from } = props;

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
      {/* Icon/Image Section */}
      <View style={{ alignItems: 'center', marginBottom: windowHeight(24) }}>
        <View
          style={{
            width: windowWidth(80),
            height: windowWidth(80),
            borderRadius: windowWidth(40),
            backgroundColor: colors.notification,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: windowHeight(16),
          }}>
          <Text style={{ fontSize: 40 }}>🔐</Text>
        </View>
      </View>

      {/* Title */}
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: windowHeight(12),
          },
        ]}>
        {t('notLoggedInModal.title')}
      </Text>

      {/* Description */}
      <Text
        style={[
          {
            color: colors.text,
            fontSize: 14,
            textAlign: 'center',
            marginBottom: windowHeight(28),
            lineHeight: 20,
            opacity: 0.7,
          },
        ]}>
        {t('notLoggedInModal.desc')}
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LoginScreen')}
        style={{
          backgroundColor: appColors.primary,
          paddingVertical: windowHeight(14),
          paddingHorizontal: windowWidth(16),
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: windowHeight(12),
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          }}>
          {t('notLoggedInModal.loginButton')}
        </Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onCancel}
        style={{
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: colors.border || colors.text,
          paddingVertical: windowHeight(14),
          paddingHorizontal: windowWidth(16),
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 16,
            fontWeight: '600',
          }}>
          {t('notLoggedInModal.cancelButton')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}