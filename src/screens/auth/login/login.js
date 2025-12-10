// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { UnAuthHeader } from '@commonComponents';
// import styles from './style';
// import Images from '@utils/images/images';
// import appColors from '@theme/appColors';
// import { ActivityIndicator } from 'react-native-paper';
// import { useValues } from '@App';
// import { useTheme } from '@react-navigation/native';
// import { useTranslation } from 'react-i18next';
// import Input from './input';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function LoginScreen(props) {
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { isDark } = useValues();
//   const { t } = useTranslation();
//   const { colors } = useTheme();

//   const onChange = ({ name, value }) => {
//     setForm({ ...form, [name]: value });
//     if (value !== '') {
//       setErrors(prev => {
//         return { ...prev, [name]: null };
//       });
//     }
//   };
//   const goToHome = () => {
//     const reg =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!form.email) {
//       setErrors(prev => {
//         return { ...prev, email: t('authError.email') };
//       });
//     } else if (!reg.test(form.email)) {
//       setErrors(prev => {
//         return { ...prev, email: t('authError.validEmail') };
//       });
//     }
//     if (!form.password) {
//       setErrors(prev => {
//         return { ...prev, password: t('authError.password') };
//       });
//     } else if (form.password.length < 8) {
//       setErrors(prev => {
//         return { ...prev, password: t('authError.validPassword') };
//       });
//     } else {
//       props.navigation.replace('Drawer');
//     }
//   };
//   return (
//     <SafeAreaView
//       style={[styles.mainView, { backgroundColor: colors.background }]}>
//       <View style={styles.padding}>
//         <UnAuthHeader
//           style={styles.headerStyle}
//           text={'authComman.skip'}
//           // image={isDark ? Images.darkLogo : Images.logo2}
//           image={Images.logo2}
//           t={t}
//           onPress={() => props.navigation.navigate('Drawer')}
//           colors={colors}
//         />
//         <Input t={t} colors={colors} onChange={onChange} goToHome={goToHome} navigation={props.navigation} errors={errors} setLoading={setLoading} form={form} />
//       </View>
//       {loading && (
//         <View style={styles.loaderStyle}>
//           <ActivityIndicator color={appColors.primary} />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }



// import React, { useState } from "react";
// import { View } from "react-native";
// import { UnAuthHeader } from "@commonComponents";
// import styles from "./style";
// import Images from "@utils/images/images";
// import appColors from "@theme/appColors";
// import { ActivityIndicator } from "react-native-paper";
// import { useValues } from "@App";
// import { useTheme } from "@react-navigation/native";
// import { useTranslation } from "react-i18next";
// import Input from "./input";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useShopifyAuth } from "../../../hooks/useShopifyAuth";

// export default function LoginScreen(props) {
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({});
//   const { isDark } = useValues();
//   const { t } = useTranslation();
//   const { colors } = useTheme();
//   const { login, loading, error: authError } = useShopifyAuth();

//   const onChange = ({ name, value }) => {
//     setForm({ ...form, [name]: value });
//     if (value !== "") {
//       setErrors((prev) => ({ ...prev, [name]: null }));
//     }
//   };

//   const validateForm = () => {
//     const reg =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     let newErrors = {};

//     if (!form.email) {
//       newErrors.email = t("authError.email");
//     } else if (!reg.test(form.email)) {
//       newErrors.email = t("authError.validEmail");
//     }

//     if (!form.password) {
//       newErrors.password = t("authError.password");
//     } else if (form.password.length < 8) {
//       newErrors.password = t("authError.validPassword");
//     }

//     return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
//   };

//   const goToHome = async () => {
//     const { isValid, errors: validationErrors } = validateForm();

//     if (!isValid) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       await login(form.email, form.password);
//       props.navigation.replace("Drawer");
//     } catch (error) {
//       setErrors({
//         submit: authError || t("authError.loginFailed") || "Login failed",
//       });
//     }
//   };

//   return (
//     <SafeAreaView
//       style={[styles.mainView, { backgroundColor: colors.background }]}
//     >
//       <View style={styles.padding}>
//         <UnAuthHeader
//           style={styles.headerStyle}
//           text={"authComman.skip"}
//           // image={isDark ? Images.darkLogo : Images.logo2}
//           image={Images.logo2}
//           t={t}
//           onPress={() => props.navigation.navigate("Drawer")}
//           colors={colors}
//         />
//         <Input
//           t={t}
//           colors={colors}
//           onChange={onChange}
//           goToHome={goToHome}
//           navigation={props.navigation}
//           errors={errors}
//           form={form}
//           loading={loading}
//         />
//       </View>
//       {loading && (
//         <View style={styles.loaderStyle}>
//           <ActivityIndicator color={appColors.primary} />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }


import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { UnAuthHeader } from "@commonComponents";
import styles from "./style";
import Images from "@utils/images/images";
import appColors from "@theme/appColors";
import { ActivityIndicator } from "react-native-paper";
import { useValues } from "@App";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Input from "./input";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShopifyAuth } from "../../../hooks/useShopifyAuth";
import { useCustomer } from "../../../context/customerContext";

export default function LoginScreen(props) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const { isDark } = useValues();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { login, loading } = useShopifyAuth();
  const { customer } = useCustomer();

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let newErrors = {};

    if (!form.email) {
      newErrors.email = t("authError.email");
    } else if (!reg.test(form.email)) {
      newErrors.email = t("authError.validEmail");
    }

    if (!form.password) {
      newErrors.password = t("authError.password");
    } else if (form.password.length < 8) {
      newErrors.password = t("authError.validPassword");
    }

    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
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

  const goToHome = async () => {
    const { isValid, errors: validationErrors } = validateForm();

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      await login(form.email, form.password);
      props.navigation.replace("Drawer");
    } catch (error) {
      console.log("Login error:", error);

      // Extract error message
      const errorMessage = error?.message || t("authError.loginFailed") || "Login failed";
      const errorTitle = "Login Failed";

      // Show alert
      showErrorAlert(errorTitle, errorMessage);

      // Also set errors state for inline display if needed
      setErrors({
        submit: errorMessage,
      });
    }
  };

  useEffect(() => {
    if (customer && customer.accessToken) {
      props.navigation.replace("Drawer");
    }
  }, [customer]);

  return (
    <SafeAreaView
      style={[styles.mainView, { backgroundColor: colors.background }]}
    >
      <View style={styles.padding}>
        <UnAuthHeader
          style={styles.headerStyle}
          text={"authComman.skip"}
          image={Images.logo2}
          t={t}
          onPress={() => props.navigation.navigate("Drawer")}
          colors={colors}
        />
        <Input
          t={t}
          colors={colors}
          onChange={onChange}
          goToHome={goToHome}
          navigation={props.navigation}
          errors={errors}
          form={form}
          loading={loading}
        />
      </View>
      {loading && (
        <View style={styles.loaderStyle}>
          <ActivityIndicator color={appColors.primary} />
        </View>
      )}
    </SafeAreaView>
  );
}