import React, { useEffect } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { socialButton } from '../commonLayout';
import Images from '@utils/images/images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';
import { useShopifyAuth } from "../../../../hooks/useShopifyAuth";

export default function authOption(props) {
  const { t, setGoogleLoading, from } = props;
  const { login, register } = useShopifyAuth();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "718209129465-7msnbbuimc59gsntph4o9drd9n7ikikm.apps.googleusercontent.com",
      iosClientId: "718209129465-kl54tsra6p0glvmi6ofg3u6dq53ptpsg.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
  }, []);


  const showErrorAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: "OK",
        onPress: () => console.log("Alert closed"),
        style: "default",
      },
    ]);
  };


  // const googleLogin = async () => {
  //   setGoogleLoading(true);
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     await GoogleSignin.signOut();

  //     const userInfo = await GoogleSignin.signIn();

  //     const email = userInfo?.data?.user?.email ?? '';
  //     const googleId = userInfo?.data?.user?.id ?? '';
  //     const firstName = userInfo?.data?.user?.givenName ?? '';
  //     const lastName = userInfo?.data?.user?.familyName ?? '';

  //     const generateFixedPassword = (id, email) => {
  //       const idSuffix = id.slice(-5);
  //       const emailPrefix = email.split('@')[0].slice(0, 4);
  //       return `GGL-${emailPrefix}${idSuffix}@2026`;
  //     };

  //     const password = generateFixedPassword(googleId, email);

  //     await login(email, password);

  //     // If login is falied by saying, unindentified customer, then register the user

  //     await register(email, password, firstName, lastName);

  //     // After register, login the user again, so they get access token

  //     props.navigation.replace("Drawer");
  //   } catch (error) {

  //     console.log("Login error:", error);

  //     // Extract error message
  //     const errorMessage = error?.message || t("authError.loginFailed") || "Login failed";
  //     const errorTitle = "Login Failed";

  //     // Show alert
  //     showErrorAlert(errorTitle, errorMessage);

  //     // setLoading(false);
  //     // console.log('ERROR ======> ', error);
  //     // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //     //   console.log('SIGNIN CANCELLED');
  //     // } else if (error.code === statusCodes.IN_PROGRESS) {
  //     //   console.log('SIGNIN IN PROGRESS');
  //     // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //     //   console.log('PLAY SERVICES NOT AVAILABLE');
  //     // } else {
  //     // }
  //   } finally {
  //     setGoogleLoading(false);
  //   }
  // };


  const googleLogin = async () => {
    setGoogleLoading(true);

    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();

      const userInfo = await GoogleSignin.signIn();

      const email = userInfo?.data?.user?.email ?? "";
      const googleId = userInfo?.data?.user?.id ?? "";
      const firstName = userInfo?.data?.user?.givenName ?? "";
      const lastName = userInfo?.data?.user?.familyName ?? "";

      if (!email || !googleId) {
        return
      }

      // 🔐 Fixed password generator (deterministic)
      const generateFixedPassword = (id, email) => {
        const idSuffix = id.slice(-5);
        const emailPrefix = email.split("@")[0].slice(0, 4);
        return `GGL-${emailPrefix}${idSuffix}@2026`;
      };

      const password = generateFixedPassword(googleId, email);

      try {
        // 🔹 Step 1: Try login
        await login(email, password);

        // ✅ Login success → go to app
        props.navigation.replace("Drawer");
        return;
      } catch (loginError) {
        const message = loginError?.message?.toLowerCase?.() || "";

        // 🔹 Step 2: If customer not found → register
        const shouldRegister =
          message.includes("customer") ||
          message.includes("unidentified") ||
          message.includes("not found");

        if (!shouldRegister) {
          // Some other login error → throw
          throw loginError;
        }
      }

      // 🔹 Step 3: Register user
      await register(email, password, firstName, lastName);

      // 🔹 Step 4: Login again after registration
      await login(email, password);

      // ✅ Final success
      props.navigation.replace("Drawer");

    } catch (error) {
      console.log("Google Login Error:", error);

      showErrorAlert(
        "Login Failed",
        error?.message || t("authError.loginFailed") || "Something went wrong"
      );
    } finally {
      setGoogleLoading(false);
    }
  };


  // const appleLogin = async () => {
  //   setLoading(true);
  //   const appleAuthRequestResponse = await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.LOGIN,
  //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //   });
  //   setLoading(false);
  //   if (!appleAuthRequestResponse.identityToken) {
  //     setLoading(false);
  //     throw new Error('Apple Sign-In failed - no identify token returned');
  //   }
  //   const {identityToken, nonce} = appleAuthRequestResponse;
  //   const appleCredential = auth.AppleAuthProvider.credential(
  //     identityToken,
  //     nonce,
  //   );
  //   signIn(appleCredential);
  // };

  return (
    <View>
      <View style={styles.createNewMainView}>
        <Image style={styles.dividerStyle} source={Images.divider} />
        <Text style={styles.dividertextStyle}>{t('login.orSignInWith')}</Text>
        <Image style={styles.dividerStyle} source={Images.divider} />
      </View>
      <View style={[styles.createNewMainView, styles.socialLoginMainView]}>
        {/* {socialButton(Images.googleIcon, googleLogin)} */}
        <TouchableOpacity
          style={[styles.socialLoginView, { backgroundColor: colors.line }]}
          onPress={googleLogin}>
          <Image style={styles.socialLoginImageView} source={Images.googleIcon} />
        </TouchableOpacity>

        {/* {Platform.OS === 'ios' && socialButton(Images.appleIcon, appleLogin)} */}
      </View>
    </View>
  );
}
