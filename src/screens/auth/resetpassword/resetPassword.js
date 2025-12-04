import React, {useState} from 'react';
import {View} from 'react-native';
import {UnAuthHeader} from '@commonComponents';
import styles from './style';
import Images from '@utils/images/images';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';
import Input from './input';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResetpasswordScreen(props) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const t = props.route.params.t;
  const {colors} = useTheme();
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const onclick = value => {
    if (!form.currentPassword) {
      setErrors(prev => {
        return {...prev, currentPassword: t('authError.curruntPassword')};
      });
    }
    if (!form.newPassword) {
      setErrors(prev => {
        return {...prev, newPassword: t('authError.newPassword')};
      });
    } else if (form.newPassword.length < 8) {
      setErrors(prev => {
        return {...prev, newPassword: t('authError.validPassword')};
      });
    }

    if (!form.confirmPassword) {
      setErrors(prev => {
        return {...prev, confirmPassword: t('authError.cpassword')};
      });
    } else if (form.newPassword !== form.confirmPassword) {
      setErrors(prev => {
        return {
          ...prev,
          confirmPassword: t('authError.validCPassword'),
        };
      });
    } else {
      props.navigation.navigate('LoginScreen');
    }
  };

  return (
    <SafeAreaView
      style={[styles.mainView, {backgroundColor: colors.background}]}>
      <View style={styles.detail}>
        <UnAuthHeader
          style={styles.headerStyle}
          text={t('authComman.skip')}
          image={isDark ? Images.darkLogo : Images.logo}
          t={t}
          onPress={() => props.navigation.navigate('Drawer')}
        />
        <View style={styles.input}>
          <Input
            t={t}
            colors={colors}
            onChange={onChange}
            onclick={onclick}
            navigation={props.navigation}
            errors={errors}
            form={form}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
