import React, {useContext, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {CommonContext, useValues} from '@App';
import styles from './styles';
import {HidePassword, ShowPassword} from '@utils/icons';

export function Input(props) {
  const {colors} = useTheme();
  const commonContext = useContext(CommonContext);
  const [hidePassword, setHidePassword] = useState(props.hidePassword);
  const {textRTLStyle, textStyle} = useValues();

  const {isRTL} = useValues();

  const colorScheme = Appearance.getColorScheme();

  return (
    <View style={{marginTop: props.top ? props.top : windowHeight(20)}}>
      <View
        style={[
          styles.input,
          {
            width: props.width ? props.width : '100%',
            backgroundColor: commonContext.isDark
              ? appColors.card
              : appColors.white,
            paddingLeft: props.leftIcon ? windowWidth(56) : windowWidth(20),
            height: props.height ? props.height : windowHeight(45),
          },
        ]}>
        <TextInput
          value={props.value}
          keyboardType={props.keyboardType}
          onChange={props.onChange}
          onChangeText={props.onChangeText}
          secureTextEntry={hidePassword}
          placeholderTextColor={colors.text}
          cursorColor={appColors.primary}
          style={[
            styles.textInput,
            {
              width: props.width ? props.width : windowWidth(400),
              textAlign: textRTLStyle,
              color: colors.text,
            },
            isRTL ? {right: props.right ? props.right : 0} : {right: 0},
          ]}
        />
        {props.hidePassword && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setHidePassword(!hidePassword)}
            style={[
              styles.rightIconStyle,
              {tintColor: colors.subText, textAlign: textRTLStyle},
              isRTL ? {left: windowWidth(20)} : {right: windowWidth(20)},
            ]}>
            {hidePassword ? <HidePassword /> : <ShowPassword />}
          </TouchableOpacity>
        )}
      </View>
      {props.error && (
        <Text style={[styles.error, {textAlign: textRTLStyle}]}>
          {props.error}
        </Text>
      )}
      <Text
        style={[
          styles.placeholder,
          {
            fontSize: props.fontSize ? props.fontSize : fontSizes.FONT17,
            color: colors.subText,
            backgroundColor: colors.background,
          },
          isRTL
            ? {
                right: props.right ? props.right : windowWidth(16),
              }
            : {
                left: props.left ? props.left : windowWidth(16),
              },
        ]}>
        {props.placeholder}
      </Text>
    </View>
  );
}
