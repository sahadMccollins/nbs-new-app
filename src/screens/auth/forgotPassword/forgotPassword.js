import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, Button, UnAuthHeader} from '@commonComponents';
import styles from './style';
import Images from '@utils/images/images';
import {fontSizes} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';
import {commenOTPlayout} from '../resetpassword/otpVerification';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen(props) {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const t = props.route.params.t;
  const {colors} = useTheme();
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();
  const navigation = props.navigation;
  const goToLogin = () => {
    props.navigation.replace('LoginScreen');
  };
  const onclick = value => {
    setModalVisible(value);
  };

  return (
    <SafeAreaView
      style={[styles.mainView, {backgroundColor: colors.background}]}>
      <View style={styles.mainContainer}>
        <UnAuthHeader
          style={styles.headerStyle}
          text={t('authComman.skip')}
          image={isDark ? Images.darkLogo : Images.logo}
          t={t}
          onPress={() => props.navigation.navigate('Drawer')}
        />
        <View style={styles.forgotPassword}>
          <Text
            style={[
              styles.titleText,
              {color: colors.text, textAlign: textRTLStyle},
            ]}>
            {t('authComman.forgotPassword')}
          </Text>
          <Input
            placeholder={t('forgotPassword.emailAddress')}
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <Button
            text={t('forgotPassword.sendOTP')}
            style={styles.buttonStyle}
            fontSize={fontSizes.FONT22}
            onPress={() => onclick(true)}
            marginTop={20}
          />
          <View
            style={[styles.createNewMainView, {flexDirection: viewRTLStyle}]}>
            <Text style={[styles.createNewText, {color: colors.subText}]}>
              {t('authComman.backTo')}
            </Text>
            <Text
              onPress={() => goToLogin()}
              style={[
                styles.createNewText,
                styles.createNewUnderlineText,
                {color: colors.text},
              ]}>
              {t('authComman.signIn')}
            </Text>
          </View>
        </View>
      </View>
      {modalVisible && commenOTPlayout(modalVisible, onclick, t, navigation)}
    </SafeAreaView>
  );
}
