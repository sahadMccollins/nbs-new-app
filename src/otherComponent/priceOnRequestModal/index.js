// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { GlobalStyle } from '@style';
// import { useTranslation } from 'react-i18next';
// import Input from "./input";

// export function PriceOnRequestModal(props) {
//   const { colors } = useTheme();
//   const { t } = useTranslation();
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({});
//   const [loading, setLoading] = useState();
//   const { onCancel, navigation, from } = props;

//   const onChange = ({ name, value }) => {
//     setForm({ ...form, [name]: value });
//     if (value !== "") {
//       setErrors((prev) => ({ ...prev, [name]: null }));
//     }
//   };

//   const submitQuoteForm = async () => {

//   };

//   return (
//     <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//       {/* Login Button */}

//       <Input
//         t={t}
//         colors={colors}
//         onChange={onChange}
//         submitQuoteForm={submitQuoteForm}
//         errors={errors}
//         form={form}
//         loading={loading}
//       />
//     </View>
//   );
// }



import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyle } from '@style';
import { useTranslation } from 'react-i18next';
import Input from "./input";

export function PriceOnRequestModal(props) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const { onCancel, navigation, from, setSubmitting, submitting } = props;

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!form.name || form.name.trim() === "") {
      newErrors.name = t('requestQuoteModal.nameError') || 'Name is required';
    }

    // Validate email
    if (!form.email || form.email.trim() === "") {
      newErrors.email = t('requestQuoteModal.emailError') || 'Email is required';
    } else if (!isValidEmail(form.email)) {
      newErrors.email = t('requestQuoteModal.emailInvalid') || 'Please enter a valid email';
    }

    // Validate phone number
    if (!form.phoneNumber || form.phoneNumber.trim() === "") {
      newErrors.phoneNumber = t('requestQuoteModal.phoneError') || 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitQuoteForm = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);

      // Prepare form data
      const quoteData = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phoneNumber.trim(),
        company: form.company?.trim() || '',
        message: form.additional?.trim() || '',
        subject: from,
        formType: from
      };

      // Call your API endpoint here
      // const response = await fetch('https://nbs-server.vercel.app/api/bulk-order-form-submitted-mobile', {
      const response = await fetch('http://localhost:3000/api/bulk-order-form-submitted-mobile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'nbs_super_secret_key_123',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      const result = await response.json();

      // Success alert
      Alert.alert(
        t('requestQuoteModal.success') || 'Success',
        t('requestQuoteModal.successMessage') || 'Your quote request has been submitted successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              setForm({});
              setErrors({});
              onCancel?.();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        t('requestQuoteModal.error') || 'Error',
        error.message || t('requestQuoteModal.errorMessage') || 'Failed to submit quote request'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
      <Input
        t={t}
        colors={colors}
        onChange={onChange}
        submitQuoteForm={submitQuoteForm}
        errors={errors}
        form={form}
        loading={submitting}
      />
    </View>
  );
}