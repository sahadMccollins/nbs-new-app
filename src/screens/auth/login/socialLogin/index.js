import React, {useEffect} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import styles from './styles';
import {socialButton} from '../commonLayout';
import Images from '@utils/images/images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';

export default function authOption(props) {
  const {t, setLoading} = props;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '509905661866-2gaah10qs956r08h9cbqv472l5h78nch.apps.googleusercontent.com',
    });
  }, []);

  const signin = credential => {
    setLoading(false);
    auth()
      .signInWithCredential(credential)
      .then(user => {
        console.log(user);
      });
    props.navigation.navigate('HomeStackScreen').catch(error => {
      console.log('ERROR', error);
    });
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      signin(googleCredential);
    } catch (error) {
      setLoading(false);
      console.log('ERROR ======> ', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGNIN CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('SIGNIN IN PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY SERVICES NOT AVAILABLE');
      } else {
      }
    }
  };
  const appleLogin = async () => {
    setLoading(true);
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    setLoading(false);
    if (!appleAuthRequestResponse.identityToken) {
      setLoading(false);
      throw new Error('Apple Sign-In failed - no identify token returned');
    }
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );
    signIn(appleCredential);
  };
  return (
    <View>
      <View style={styles.createNewMainView}>
        <Image style={styles.dividerStyle} source={Images.divider} />
        <Text style={styles.dividertextStyle}>{t('login.orSignInWith')}</Text>
        <Image style={styles.dividerStyle} source={Images.divider} />
      </View>
      <View style={[styles.createNewMainView, styles.socialLoginMainView]}>
        {socialButton(Images.googleIcon, googleLogin)}
        {Platform.OS === 'ios' && socialButton(Images.appleIcon, appleLogin)}
      </View>
    </View>
  );
}
