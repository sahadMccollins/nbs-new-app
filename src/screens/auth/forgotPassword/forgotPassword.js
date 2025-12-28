import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Input, Button, UnAuthHeader } from '@commonComponents';
import styles from './style';
import Images from '@utils/images/images';
import { fontSizes } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import { commenOTPlayout } from '../resetpassword/otpVerification';
import { useShopifyAuth } from "../../../hooks/useShopifyAuth";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen(props) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState();
  // const [modalVisible, setModalVisible] = useState(false);
  const { resetPasswordRequest } = useShopifyAuth();
  const t = props.route.params.t;
  const { colors } = useTheme();
  const { isDark, viewRTLStyle, textRTLStyle } = useValues();
  const navigation = props.navigation;
  const goToLogin = () => {
    props.navigation.replace('LoginScreen');
  };

  const validateForm = () => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let newErrors = {};

    if (!email) {
      newErrors.email = t("authError.email");
    } else if (!reg.test(email)) {
      newErrors.email = t("authError.validEmail");
    }

    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  // const submitPasswordReset = async () => {
  //   const { isValid, errors: validationErrors } = validateForm();

  //   if (!isValid) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   setLoading(true);
  //   const result = await resetPasswordRequest(email);
  //   setLoading(false);
  //   console.log("result", result);
  //   if (result.success) {
  //     Alert.alert(
  //       'Email Sent',
  //       'A password reset link has been sent to your registered email address. Please check your inbox.',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => props.navigation.replace("Login"),
  //         },
  //       ]);
  //   } else {
  //     Alert.alert('Error', result.message);
  //   }
  // }

  const submitPasswordReset = async () => {
    const { isValid, errors: validationErrors } = validateForm();

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const result = await resetPasswordRequest(email);
      setLoading(false);

      if (result?.success) {
        Alert.alert(
          'Email Sent',
          'A password reset link has been sent to your registered email address. Please check your inbox.',
          [
            {
              text: 'OK',
              onPress: () => goToLogin(),
            },
          ]
        );
      } else {
        Alert.alert('Error', result?.message || 'Something went wrong');
      }
      props.navigation.replace("Login");
    } catch (error) {
      setLoading(false);

      // ✅ Extract message from thrown error
      const errorMessage =
        error?.message ||
        error?.response?.message ||
        'Password reset failed. Please try again later.';

      Alert.alert('Error', errorMessage);
    }
  };


  return (
    <SafeAreaView
      style={[styles.mainView, { backgroundColor: colors.background }]}>
      <View style={styles.mainContainer}>
        <UnAuthHeader
          style={styles.headerStyle}
          text={t('authComman.skip')}
          image={isDark ? Images.logo2 : Images.logo2}
          t={t}
          onPress={() => props.navigation.navigate('Drawer')}
        />
        <View style={styles.forgotPassword}>
          <Text
            style={[
              styles.titleText,
              { color: colors.text, textAlign: textRTLStyle },
            ]}>
            {t('authComman.forgotPassword')}
          </Text>
          <Input
            placeholder={t('forgotPassword.emailAddress')}
            value={email}
            onChangeText={email => {
              setEmail(email);
              setErrors({});
            }}
            error={errors.email}
          />
          <Button
            text={t('forgotPassword.sendOTP')}
            style={styles.buttonStyle}
            fontSize={fontSizes.FONT22}
            onPress={submitPasswordReset}
            marginTop={20}
            loading={loading}
          />
          <View
            style={[styles.createNewMainView, { flexDirection: viewRTLStyle }]}>
            <Text style={[styles.createNewText, { color: colors.subText }]}>
              {t('authComman.backTo')}
            </Text>
            <Text
              onPress={() => goToLogin()}
              style={[
                styles.createNewText,
                styles.createNewUnderlineText,
                { color: colors.text },
              ]}>
              {t('authComman.signIn')}
            </Text>
          </View>
        </View>
      </View>
      {/* {modalVisible && commenOTPlayout(modalVisible, onclick, t, navigation)} */}
    </SafeAreaView>
  );
}
