// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { windowWidth } from '@theme/appConstant';
// import Data from '../../utils/json';
// import { useTheme } from '@react-navigation/native';
// import styles from './styles';
// import { GlobalStyle } from '../../style';
// import { setValue, getValue } from '../../utils/localStorage';
// import { useTranslation } from 'react-i18next';

// export function MultiLangauge(props) {
//   const { colors } = useTheme();
//   const [langauges] = useState(Data.langauges);
//   const { i18n, t } = useTranslation();

//   const changeLanguage = key => {
//     i18n.changeLanguage(key);
//     props.onPress();
//     setValue('language', key);
//     props.from === 'drawer' && props.navigation.toggleDrawer();
//   };

//   return (
//     <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//       <Text
//         style={[styles.text, { color: colors.text, textAlign: props.textAlign }]}>
//         {props.t('multiLangaugeModal.selectLanguage')}
//       </Text>
//       {langauges.map((item, key) => (
//         <TouchableOpacity
//           key={key}
//           activeOpacity={0.8}
//           onPress={() => changeLanguage(item.key, 'Drawer')}
//           style={[styles.icon, { flexDirection: 'row' }]}>
//           {item.icons}
//           <Text
//             style={[
//               styles.text,
//               { color: colors.text, marginHorizontal: windowWidth(20) },
//             ]}>
//             {props.t(item.name)}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }


import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { windowWidth } from '@theme/appConstant';
import Data from '../../utils/json';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { GlobalStyle } from '../../style';
import { useValues } from '@App';
import { setValue, getValue } from '../../utils/localStorage';
import { useTranslation } from 'react-i18next';

export function MultiLangauge(props) {
  const { colors } = useTheme();
  const [langauges] = useState(Data.langauges);
  const { setIsRTL, isRTL, viewRTLStyle, textRTLStyle } =
    useValues();
  const { i18n, t } = useTranslation();

  const changeLanguage = key => {
    i18n.changeLanguage(key);
    props.onPress();
    setValue('language', key);

    // Turn on RTL if Arabic, turn off otherwise
    if (key === 'ar') {
      setIsRTL(true);
      setValue('rtl', 'true');
    } else {
      setIsRTL(false);
      setValue('rtl', 'false');
    }

    props.from === 'drawer' && props.navigation.toggleDrawer();
  };

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
      <Text
        style={[styles.text, { color: colors.text, textAlign: props.textAlign }]}>
        {props.t('multiLangaugeModal.selectLanguage')}
      </Text>
      {langauges.map((item, key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.8}
          onPress={() => changeLanguage(item.key, 'Drawer')}
          style={[styles.icon, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {item.icons}
            <Text
              style={[
                styles.text,
                { color: colors.text, marginHorizontal: windowWidth(20) },
              ]}>
              {props.t(item.name)}
            </Text>
          </View>
          {i18n.language === item.key && (
            <Text style={{ fontSize: 20, color: colors.text, marginRight: windowWidth(10) }}>✓</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}