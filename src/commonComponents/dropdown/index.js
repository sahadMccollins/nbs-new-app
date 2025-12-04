import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default dropDown = props => {
  const {isRTL} = useValues();
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {
    SelectedItem,
    data,
    name,
    selectedItem,
    width,
    left,
    height,
    fontSize,
  } = props;
  return (
    <View
      style={[
        styles.input,
        {
          height: height ? height : windowHeight(40),
          backgroundColor: name ? colors.background : colors.brandsBg,
        },
      ]}>
      {name ? (
        <Text
          style={[
            styles.placeholder,
            {
              fontSize: props.fontSize ? props.fontSize : fontSizes.FONT19,
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
          {name}
        </Text>
      ) : (
        <View style={styles.inputView}></View>
      )}

      <Picker
        mode={'dropdown'}
        style={[
          styles.dropdown,
          {
            color: colors.text,
            marginTop: props.top ? props.top : windowHeight(7),
          },
        ]}
        dropdownIconColor={colors.text}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => SelectedItem(itemValue)}>
        {data.map((item, key) => {
          return (
            <Picker.Item label={t(item.name)} value={t(item.name)} key={key} />
          );
        })}
      </Picker>
    </View>
  );
};
