// import React from 'react';
// import {Text, TouchableOpacity} from 'react-native';
// import {useTheme} from '@react-navigation/native';
// import {t} from 'i18next';
// import styles from './styles';

// export default function logOut(props) {
//   const {navigation} = props;
//   const {colors} = useTheme();

//   const onLogoutBtn = () => {
//     navigation.navigate('LoginScreen');
//   };

//   return (
//     <TouchableOpacity
//       activeOpacity={1}
//       onPress={onLogoutBtn}
//       style={[
//         styles.btnContainer,
//         {backgroundColor: colors.background, borderColor: colors.text},
//       ]}>
//       <Text style={[styles.btnText, {color: colors.text}]}>
//         {t('profile.logOut')}
//       </Text>
//     </TouchableOpacity>
//   );
// }


// logOut.js
import React, { useState } from 'react';
import { Text, TouchableOpacity, Modal, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t } from 'i18next';
import { useCustomer } from '../../context/customerContext';
import styles from './styles';

export default function LogOut(props) {
  const { navigation } = props;
  const { colors } = useTheme();
  const { clearCustomer } = useCustomer();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutConfirm = async () => {
    try {
      await clearCustomer();
      setModalVisible(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLogoutCancel = () => {
    setModalVisible(false);
  };

  const onLogoutBtn = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onLogoutBtn}
        style={[
          styles.btnContainer,
          { backgroundColor: colors.background, borderColor: colors.text },
        ]}>
        <Text style={[styles.btnText, { color: colors.text }]}>
          {t('profile.logOut')}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={handleLogoutCancel}>
        <View style={[styles.modalOverlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
          <View
            style={[
              styles.modalContainer,
              { backgroundColor: colors.background },
            ]}>
            <Text
              style={[
                styles.modalTitle,
                { color: colors.text },
              ]}>
              Logout
            </Text>

            <Text
              style={[
                styles.modalMessage,
                { color: colors.text },
              ]}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleLogoutCancel}
                style={[
                  styles.btnContainer,
                  { backgroundColor: colors.background, borderColor: colors.text },
                ]}>
                <Text
                  style={[styles.btnText, { color: colors.text }]}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleLogoutConfirm}
                style={[
                  styles.btnContainer,
                  { backgroundColor: colors.background, borderColor: colors.text },
                ]}
              >
                <Text style={[styles.btnText, { color: colors.notification }]}>
                  {t('profile.logOut')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
