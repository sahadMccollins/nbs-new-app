import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {settings} from '../../utils/images/images';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';
import SwitchContainer from '../../commonComponents/swithContainer';
import {setValue} from '@utils/localStorage';

export default function Settings({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {viewRTLStyle, textRTLStyle, isDark, setIsDark, setIsRTL, isRTL} =
    useValues();
  const [onswitch, setSwitch] = useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    var mode = !isDark;
    setValue('darkMode', mode.toString());
  };
  const toggleRtl = () => {
    setIsRTL(!isRTL);
    var rtl = !isRTL;
    setValue('rtl', rtl.toString());
  };
  const onNotification = () => {
    setSwitch(!onswitch);
  };

  return (
    <View style={{backgroundColor: colors.background}}>
      <Header text={t('drawerArr.settings')} navigation={navigation} />
      <Image source={settings} style={styles.image} />
      <View style={styles.mainContainer}>
        <Text
          style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
          {t('drawerArr.settings')}
        </Text>
        {Data.Settings.map((items, key) => (
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View>
              <Text
                style={[
                  styles.name,
                  {color: colors.text, textAlign: textRTLStyle},
                ]}>
                {t(items.name)}
              </Text>
              {items.discription && (
                <Text
                  style={[
                    styles.discription,
                    {color: colors.subText, textAlign: textRTLStyle},
                  ]}>
                  {t(items.discription)}
                </Text>
              )}
            </View>
            {items.switchType == 'rtl' && (
              <SwitchContainer toggleDarkSwitch={toggleRtl} switchOn={isRTL} />
            )}
            {items.switchType == 'darkMode' && (
              <SwitchContainer
                toggleDarkSwitch={toggleDarkMode}
                switchOn={isDark}
              />
            )}
            {items.switchType == 'notification' && (
              <SwitchContainer
                toggleDarkSwitch={onNotification}
                switchOn={onswitch}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
