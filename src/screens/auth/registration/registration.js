// import React, {useState} from 'react';
// import {View, ActivityIndicator} from 'react-native';
// import {UnAuthHeader} from '@commonComponents';
// import styles from './style';
// import Images from '@utils/images/images';
// import Input from './input';
// import {useValues} from '@App';
// import {useTheme} from '@react-navigation/native';
// import appColors from '@theme/appColors';
// import {reg} from '@utils/constant';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function RegistrationScreen(props) {
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({});
//   const [loading, setLoading] = useState(false);
//   const t = props.route.params.t;
//   const {isDark} = useValues();
//   const {colors} = useTheme();

//   const onChange = ({name, value}) => {
//     setForm({...form, [name]: value});
//     if (value !== '') {
//       setErrors(prev => {
//         return {...prev, [name]: null};
//       });
//     }
//   };

//   const onSignUp = () => {
//     if (!form.email) {
//       setErrors(prev => {
//         return {...prev, email: t('authError.email')};
//       });
//     } else if (!reg.test(form.email)) {
//       setErrors(prev => {
//         return {...prev, email: t('authError.validEmail')};
//       });
//     }
//     if (!form.password) {
//       setErrors(prev => {
//         return {...prev, password: t('authError.password')};
//       });
//     } else if (form.password.length < 8) {
//       setErrors(prev => {
//         return {...prev, password: t('authError.validPassword')};
//       });
//     } else {
//       props.navigation.replace('LoginScreen');
//     }
//   };

//   const goToRegistration = () => {
//     props.navigation.replace('LoginScreen');
//   };

//   return (
//     <SafeAreaView
//       style={[styles.mainView, {backgroundColor: colors.background}]}>
//       <UnAuthHeader
//         style={styles.headerStyle}
//         text={t('authComman.skip')}
//         // image={isDark ? Images.darkLogo : Images.logo}
//         image={Images.logo2}
//         t={t}
//         onPress={() => props.navigation.navigate('Drawer')}
//       />
//       <Input
//         t={t}
//         colors={colors}
//         onChange={onChange}
//         goToRegistration={goToRegistration}
//         onSignUp={onSignUp}
//         errors={errors}
//         setLoading={setLoading}
//         form={form}
//       />
//       {loading && (
//         <View style={styles.loaderStyle}>
//           <ActivityIndicator color={appColors.primary} />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }


import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { UnAuthHeader } from '@commonComponents';
import styles from './style';
import Images from '@utils/images/images';
import Input from './input';
import { useValues } from '@App';
import { useTheme } from '@react-navigation/native';
import appColors from '@theme/appColors';
import { reg } from '@utils/constant';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyAuth } from '../../../hooks/useShopifyAuth';
import { useCustomer } from '../../../context/customerContext';

export default function RegistrationScreen(props) {
  const [errors, setErrors] = useState({});
  const { register, loading } = useShopifyAuth();
  const [googleLoading, setGoogleLoading] = useState(false);
  const { customer } = useCustomer();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  // const [loading, setLoading] = useState(false);
  const t = props.route.params.t;
  const { isDark } = useValues();
  const { colors } = useTheme();

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null };
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName?.trim()) {
      newErrors.firstName = t('authError.firstName');
    }

    if (!form.lastName?.trim()) {
      newErrors.lastName = t('authError.lastName');
    }

    if (!form.email) {
      newErrors.email = t('authError.email');
    } else if (!reg.test(form.email)) {
      newErrors.email = t('authError.validEmail');
    }

    if (!form.password) {
      newErrors.password = t('authError.password');
    } else if (form.password.length < 8) {
      newErrors.password = t('authError.validPassword');
    }

    return newErrors;
  };

  const showErrorAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: "OK",
        onPress: () => console.log("Alert closed"),
        style: "default",
      },
    ]);
  };

  const onSignUp = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await register(form.email, form.password, form.firstName, form.lastName);
      goToLogin();
    } catch (error) {
      console.log("Login error:", error);

      // Extract error message
      const errorMessage = error?.message || t("authError.loginFailed") || "Login failed";
      const errorTitle = "Signup Failed";

      // Show alert
      showErrorAlert(errorTitle, errorMessage);

      // Also set errors state for inline display if needed
      setErrors({
        submit: errorMessage,
      });
    }
  };

  const goToLogin = () => {
    props.navigation.replace('LoginScreen');
  };

  useEffect(() => {
    if (customer && customer.accessToken) {
      props.navigation.replace("Drawer");
    }
  }, [customer]);

  return (
    <SafeAreaView>
      <View style={[styles.mainView, { backgroundColor: colors.background }]} >
        <UnAuthHeader
          style={styles.headerStyle}
          text={t('authComman.skip')}
          image={Images.logo2}
          t={t}
          onPress={() => props.navigation.navigate('Drawer')}
        />
        <Input
          t={t}
          colors={colors}
          onChange={onChange}
          goToRegistration={goToLogin}
          onSignUp={onSignUp}
          errors={errors}
          setGoogleLoading={setGoogleLoading}
          form={form}
          navigation={props.navigation}
        />
      </View>
      {(loading || googleLoading) && (
        <View style={styles.loaderStyle}>
          <ActivityIndicator color={appColors.primary} />
        </View>
      )}
    </SafeAreaView>
  );
}