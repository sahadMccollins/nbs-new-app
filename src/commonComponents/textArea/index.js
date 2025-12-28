// import React, { useContext, useState } from 'react';
// import {
//     Text,
//     TextInput,
//     View,
//     TouchableOpacity,
//     Appearance,
// } from 'react-native';
// import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
// import appColors from '@theme/appColors';
// import { useTheme } from '@react-navigation/native';
// import { CommonContext, useValues } from '@App';
// import styles from './styles';

// export function TextArea(props) {
//     const { colors } = useTheme();
//     const commonContext = useContext(CommonContext);
//     const { textRTLStyle, textStyle } = useValues();
//     const { isRTL } = useValues();

//     const colorScheme = Appearance.getColorScheme();

//     return (
//         <View style={{ marginTop: props.top ? props.top : windowHeight(20) }}>
//             <View
//                 style={[
//                     styles.input,
//                     {
//                         width: props.width ? props.width : '100%',
//                         backgroundColor: commonContext.isDark
//                             ? appColors.card
//                             : appColors.white,
//                         paddingLeft: props.leftIcon ? windowWidth(56) : windowWidth(20),
//                         height: props.height ? props.height : windowHeight(120),
//                         // paddingVertical: windowHeight(15),
//                         // paddingRight: windowWidth(20),
//                     },
//                 ]}>
//                 <TextInput
//                     value={props.value}
//                     onChange={props.onChange}
//                     onChangeText={props.onChangeText}
//                     placeholderTextColor={colors.text}
//                     cursorColor={appColors.primary}
//                     multiline={true}
//                     numberOfLines={props.numberOfLines ? props.numberOfLines : 4}
//                     // textAlignVertical="top"
//                     editable={props.editable !== false}
//                     maxLength={props.maxLength}
//                     style={[
//                         styles.textInput,
//                         {
//                             width: props.width ? props.width : windowWidth(400),
//                             textAlign: textRTLStyle,
//                             color: colors.text,
//                             minHeight: props.height ? props.height : windowHeight(100),
//                             paddingTop: 0,
//                         },
//                         isRTL ? { right: props.right ? props.right : 0 } : { right: 0 },
//                     ]}
//                     // placeholder={props.placeholder}
//                 />
//             </View>
//             {props.maxLength && (
//                 <Text
//                     style={[
//                         {
//                             fontSize: fontSizes.FONT12,
//                             color: colors.subText,
//                             marginTop: windowHeight(5),
//                             textAlign: isRTL ? 'left' : 'right',
//                         },
//                     ]}>
//                     {props.value ? props.value.length : 0} / {props.maxLength}
//                 </Text>
//             )}
//             {props.error && (
//                 <Text style={[styles.error, { textAlign: textRTLStyle }]}>
//                     {props.error}
//                 </Text>
//             )}
//             <Text
//                 style={[
//                     styles.placeholder,
//                     {
//                         fontSize: props.fontSize ? props.fontSize : fontSizes.FONT17,
//                         color: colors.subText,
//                         backgroundColor: colors.background,
//                     },
//                     isRTL
//                         ? {
//                             right: props.right ? props.right : windowWidth(16),
//                         }
//                         : {
//                             left: props.left ? props.left : windowWidth(16),
//                         },
//                 ]}>
//                 {props.placeholder}
//             </Text>
//         </View>
//     );
// }


import React, { useContext, useState } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Appearance,
} from 'react-native';
import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useTheme } from '@react-navigation/native';
import { CommonContext, useValues } from '@App';
import styles from './styles';
import { HidePassword, ShowPassword } from '@utils/icons';

export function TextArea(props) {
    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const [hidePassword, setHidePassword] = useState(props.hidePassword);
    const { textRTLStyle, textStyle } = useValues();

    const { isRTL } = useValues();

    const colorScheme = Appearance.getColorScheme();

    return (
        <View style={{ marginTop: props.top ? props.top : windowHeight(20) }}>
            <View
                style={[
                    styles.input,
                    {
                        width: props.width ? props.width : '100%',
                        // backgroundColor: commonContext.isDark
                        //     ? appColors.card
                        //     : appColors.white,
                        // backgroundColor: 'blue',
                        paddingLeft: props.leftIcon ? windowWidth(56) : windowWidth(20),
                        // height: props.height ? props.height : windowHeight(90),
                        // minHeight: windowHeight(80),
                        // paddingTop: windowHeight(20)
                    },
                ]}>
                <TextInput
                    value={props.value}
                    keyboardType={props.keyboardType}
                    onChange={props.onChange}
                    multiline={true}
                    onChangeText={props.onChangeText}
                    secureTextEntry={hidePassword}
                    placeholderTextColor={colors.text}
                    cursorColor={appColors.primary}
                    style={[
                        styles.textInput,
                        {
                            alignSelf: 'flex-start',
                            height: windowHeight(80),
                            paddingTop: windowHeight(15),
                            width: props.width ? props.width : windowWidth(400),
                            textAlign: textRTLStyle,
                            color: colors.text,
                            textAlignVertical: 'top',
                        },
                        isRTL ? { right: props.right ? props.right : 0 } : { right: 0 },
                    ]}
                />
            </View>
            {props.error && (
                <Text style={[styles.error, { textAlign: textRTLStyle }]}>
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
