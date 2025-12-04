import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {UnAuthHeader} from '@commonComponents';
import styles from './style';
import Images from '@utils/images/images';
import Input from './input';
import {useValues} from '@App';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';
import {reg} from '@utils/constant';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegistrationScreen(props) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const t = props.route.params.t;
  const {isDark} = useValues();
  const {colors} = useTheme();

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const onSignUp = () => {
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: t('authError.email')};
      });
    } else if (!reg.test(form.email)) {
      setErrors(prev => {
        return {...prev, email: t('authError.validEmail')};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: t('authError.password')};
      });
    } else if (form.password.length < 8) {
      setErrors(prev => {
        return {...prev, password: t('authError.validPassword')};
      });
    } else {
      props.navigation.replace('LoginScreen');
    }
  };

  const goToRegistration = () => {
    props.navigation.replace('LoginScreen');
  };

  return (
    <SafeAreaView
      style={[styles.mainView, {backgroundColor: colors.background}]}>
      <UnAuthHeader
        style={styles.headerStyle}
        text={t('authComman.skip')}
        image={isDark ? Images.darkLogo : Images.logo}
        t={t}
        onPress={() => props.navigation.navigate('Drawer')}
      />
      <Input
        t={t}
        colors={colors}
        onChange={onChange}
        goToRegistration={goToRegistration}
        onSignUp={onSignUp}
        errors={errors}
        setLoading={setLoading}
        form={form}
      />
      {loading && (
        <View style={styles.loaderStyle}>
          <ActivityIndicator color={appColors.primary} />
        </View>
      )}
    </SafeAreaView>
  );
}
