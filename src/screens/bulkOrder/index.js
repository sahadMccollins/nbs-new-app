// import React, { useState } from 'react';
// import { View, ScrollView, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
// import { Header } from '@commonComponents';
// import { useTranslation } from 'react-i18next';
// import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
// import { useTheme } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import appColors from '../../theme/appColors';
// import { Input, Button, TextArea } from '@commonComponents';

// export default function BulkOrder({ navigation }) {
//     const { t } = useTranslation();
//     const { colors } = useTheme();
//     const [form, setForm] = useState({});
//     const [errors, setErrors] = useState({});
//     const [submitting, setSubmitting] = useState(false);

//     const onChange = ({ name, value }) => {
//         setForm({ ...form, [name]: value });
//         if (value !== "") {
//             setErrors((prev) => ({ ...prev, [name]: null }));
//         }
//     };


//     const validateForm = () => {
//         const newErrors = {};

//         // Validate name
//         if (!form.name || form.name.trim() === "") {
//             newErrors.name = t('requestQuoteModal.nameError') || 'Name is required';
//         }

//         // Validate email
//         if (!form.email || form.email.trim() === "") {
//             newErrors.email = t('requestQuoteModal.emailError') || 'Email is required';
//         } else if (!isValidEmail(form.email)) {
//             newErrors.email = t('requestQuoteModal.emailInvalid') || 'Please enter a valid email';
//         }

//         // Validate phone number
//         if (!form.phoneNumber || form.phoneNumber.trim() === "") {
//             newErrors.phoneNumber = t('requestQuoteModal.phoneError') || 'Phone number is required';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const isValidEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const submitQuoteForm = async () => {
//         if (!validateForm()) {
//             return;
//         }
//         try {
//             setSubmitting(true);
//             // Prepare form data
//             const quoteData = {
//                 name: form.name.trim(),
//                 email: form.email.trim(),
//                 phone: form.phoneNumber.trim(),
//                 company: form.company?.trim() || '',
//                 trnNumber: form.trnNumber?.trim() || '',
//                 subject: form.subject?.trim() || '',
//                 message: form.additional?.trim() || '',
//             };

//             console.log("quoteData", quoteData);

//             return

//             // Call your API endpoint here
//             const response = await fetch('https://nbs-server.vercel.app/api/bulk-order-form-submitted-mobile', {
//                 // const response = await fetch('http://localhost:3000/api/bulk-order-form-submitted-mobile', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-api-key': 'nbs_super_secret_key_123',
//                 },
//                 body: JSON.stringify(quoteData),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to submit quote request');
//             }

//             const result = await response.json();

//             // Success alert
//             Alert.alert(
//                 t('requestQuoteModal.success') || 'Success',
//                 t('requestQuoteModal.successMessage') || 'Your quote request has been submitted successfully',
//                 [
//                     {
//                         text: 'OK',
//                         onPress: () => {
//                             setForm({});
//                             setErrors({});
//                             onCancel?.();
//                         },
//                     },
//                 ]
//             );
//         } catch (error) {
//             Alert.alert(
//                 t('requestQuoteModal.error') || 'Error',
//                 error.message || t('requestQuoteModal.errorMessage') || 'Failed to submit quote request'
//             );
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const SectionTitle = ({ title }) => (
//         <Text style={{
//             fontSize: fontSizes.FONT19,
//             fontWeight: '600',
//             color: appColors.black,
//             marginTop: windowHeight(25),
//             // marginBottom: windowHeight(15)
//         }}>
//             {title}
//         </Text>
//     );

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: appColors.white }}>
//             <Header text={t('bulkOrder.title')} navigation={navigation} />
//             <ScrollView contentContainerStyle={{ paddingBottom: windowHeight(20) }} showsVerticalScrollIndicator={false}>

//                 <View style={{ paddingHorizontal: windowWidth(30) }}>
//                     {/* Contact Information Section */}
//                     <SectionTitle title="Contact Information" />


//                     <Input
//                         placeholder="Name"
//                         value={form.name}
//                         onChangeText={value => {
//                             onChange({ name: 'name', value });
//                         }}
//                         error={errors.name}
//                     />

//                     <Input
//                         placeholder="Email"
//                         value={form.email}
//                         onChangeText={value => {
//                             onChange({ name: 'email', value });
//                         }}
//                         error={errors.email}
//                     />

//                     <Input
//                         placeholder="Phone Number"
//                         value={form.phoneNumber}
//                         onChangeText={value => {
//                             onChange({ name: 'phoneNumber', value });
//                         }}
//                         error={errors.phoneNumber}
//                     />

//                     {/* Business Details Section */}
//                     <SectionTitle title="Business Details" />

//                     <Input
//                         placeholder="Company Name"
//                         value={form.company}
//                         onChangeText={value => {
//                             onChange({ name: 'company', value });
//                         }}
//                         error={errors.company}
//                     />

//                     <Input
//                         placeholder="TRN Number"
//                         value={form.trnNumber}
//                         onChangeText={value => {
//                             onChange({ name: 'trnNumber', value });
//                         }}
//                         error={errors.trnNumber}
//                     />

//                     <SectionTitle title="Order Details" />

//                     <Input
//                         placeholder="Subject"
//                         value={form.subject}
//                         onChangeText={value => {
//                             onChange({ name: 'subject', value });
//                         }}
//                         error={errors.subject}
//                     />

//                     <TextArea
//                         placeholder="Additional Details"
//                         value={form.message}
//                         onChangeText={value => {
//                             onChange({ name: 'message', value });
//                         }}
//                         error={errors.message}
//                     />


//                     {/* Submit Button */}
//                     <TouchableOpacity
//                         onPress={submitQuoteForm}
//                         style={{
//                             backgroundColor: appColors.primary,
//                             borderRadius: 8,
//                             paddingVertical: windowHeight(15),
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             flexDirection: 'row',
//                             marginTop: windowHeight(40)
//                         }}
//                     >
//                         <Text style={{
//                             fontSize: fontSizes.FONT19,
//                             fontWeight: '600',
//                             color: appColors.white,
//                             marginLeft: windowWidth(8)
//                         }}>
//                             Submit Request
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }



import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import appColors from '../../theme/appColors';
import { useValues } from '@App';
import { Input, Button, TextArea } from '@commonComponents';

export default function BulkOrder({ navigation }) {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const { isDark } = useValues();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

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
                trnNumber: form.trnNumber?.trim() || '',
                subject: form.subject?.trim() || '',
                message: form.message?.trim() || '',
            };

            // Call your API endpoint here
            const response = await fetch('https://nbs-server.vercel.app/api/bulk-order-form-submitted-mobile', {
                // const response = await fetch('http://localhost:3000/api/bulk-order-form-submitted-mobile', {
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
                            navigation.goBack();
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

    const SectionTitle = ({ title }) => (
        <Text style={{
            fontSize: fontSizes.FONT19,
            fontWeight: '600',
            color: colors.text,
            marginTop: windowHeight(25),
        }}>
            {title}
        </Text>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? colors.card : null }}>
            <Header text={t('bulkOrder.title')} navigation={navigation} />
            <ScrollView contentContainerStyle={{ paddingBottom: windowHeight(20) }} showsVerticalScrollIndicator={false}>

                <View style={{ paddingHorizontal: windowWidth(30) }}>
                    {/* Contact Information Section */}
                    <SectionTitle title="Contact Information" />

                    <Input
                        placeholder="Name"
                        value={form.name}
                        onChangeText={value => {
                            onChange({ name: 'name', value });
                        }}
                        error={errors.name}
                    />

                    <Input
                        placeholder="Email"
                        value={form.email}
                        onChangeText={value => {
                            onChange({ name: 'email', value });
                        }}
                        error={errors.email}
                    />

                    <Input
                        placeholder="Phone Number"
                        value={form.phoneNumber}
                        onChangeText={value => {
                            onChange({ name: 'phoneNumber', value });
                        }}
                        error={errors.phoneNumber}
                    />

                    {/* Business Details Section */}
                    <SectionTitle title="Business Details" />

                    <Input
                        placeholder="Company Name"
                        value={form.company}
                        onChangeText={value => {
                            onChange({ name: 'company', value });
                        }}
                        error={errors.company}
                    />

                    <Input
                        placeholder="TRN Number"
                        value={form.trnNumber}
                        onChangeText={value => {
                            onChange({ name: 'trnNumber', value });
                        }}
                        error={errors.trnNumber}
                    />

                    <SectionTitle title="Order Details" />

                    <Input
                        placeholder="Subject"
                        value={form.subject}
                        onChangeText={value => {
                            onChange({ name: 'subject', value });
                        }}
                        error={errors.subject}
                    />

                    <TextArea
                        placeholder="Additional Details"
                        value={form.message}
                        onChangeText={value => {
                            onChange({ name: 'message', value });
                        }}
                        error={errors.message}
                    />

                    {/* Submit Button */}
                    <TouchableOpacity
                        onPress={submitQuoteForm}
                        disabled={submitting}
                        style={{
                            backgroundColor: appColors.primary,
                            borderRadius: 8,
                            paddingVertical: windowHeight(15),
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: windowHeight(40),
                        }}
                    >
                        {submitting ? (
                            <ActivityIndicator size="small" color={appColors.white} />
                        ) : (
                            <Text style={{
                                fontSize: fontSizes.FONT19,
                                fontWeight: '600',
                                color: appColors.white,
                                marginLeft: windowWidth(8)
                            }}>
                                Submit Request
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}