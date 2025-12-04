import React from 'react';
import {View, Text, Modal, Image} from 'react-native';
import styles from './style';
import OtpInputs from 'react-native-otp-inputs';
import {Button} from '@commonComponents';
import Images from '@utils/images/images';
import {fontSizes} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

const commenOTPlayout = (modalVisible, onclick, t, navigation) => {
  const {colors} = useTheme();
  const {viewRTLStyle, textRTLStyle} = useValues();

  const goToScreen = () => {
    navigation.navigate('ResetpasswordScreen');
  };

  const onDoneClick = () => {
    onclick(false);
    goToScreen();
  };

  return (
    <View style={styles.modalMainView}>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView, {backgroundColor: colors.background}]}>
            <Text
              style={[
                styles.otpTitle1,
                {color: colors.text, textAlign: textRTLStyle},
              ]}>
              {t('otp.codeVerification')}
            </Text>
            <Text
              style={[
                styles.otpTitle2,
                {color: colors.subText, textAlign: textRTLStyle},
              ]}>
              {t('otp.enterCode')}
            </Text>
            <View style={[styles.numberView, {flexDirection: viewRTLStyle}]}>
              <Text
                style={[
                  styles.otpTitle1,
                  styles.otpNumber,
                  {color: colors.text},
                ]}>
                {t('otp.otpNumber')}
              </Text>
              <Image style={styles.editButtonStyle} source={Images.editIcon} />
            </View>
            <OtpInputs
              style={styles.otpInput}
              clearTextOnFocus
              inputStyles={[
                styles.otpStyle,
                {backgroundColor: colors.line, color: colors.text},
              ]}
              keyboardType="phone-pad"
              numberOfInputs={4}
              selectTextOnFocus={false}
            />
            <View
              style={[
                styles.createNewMainView,
                {alignSelf: 'flex-end', flexDirection: viewRTLStyle},
              ]}>
              <Text style={[styles.createNewText, {color: colors.subText}]}>
                {t('otp.dontGetCode')}
              </Text>
              <Text
                onPress={() => onclick(false)}
                style={[
                  styles.createNewText,
                  styles.createNewUnderlineText,
                  {color: colors.subText},
                ]}>
                {t('otp.resendCode')}
              </Text>
            </View>
            <Button
              text={t('otp.done')}
              style={styles.buttonStyle}
              fontSize={fontSizes.FONT22}
              onPress={() => onDoneClick()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export {commenOTPlayout};
