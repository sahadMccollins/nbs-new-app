import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useTranslation} from 'react-i18next';
import {fontSizes, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default radioButton = props => {
  const {setRadioBtn, data} = props;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {isDark,viewRTLStyle,textRTLStyle} = useValues();

  const onSelectRadioBtn = val => {
    data.map(item => {
      if (val == item.id) {
        if (item.selected == true) {
          !item.selected;
        } else {
          item.selected = true;
          setRadioBtn(t(item.name));
        }
      } else {
        item.selected = false;
      }
    });
  };

  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={{
          paddingBottom: props.paddingBottom
            ? props.paddingBottom
            : windowHeight(0),
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={[styles.row,{flexDirection:viewRTLStyle}]}>
            <TouchableOpacity
              onPress={() => onSelectRadioBtn(index)}
              style={[
                styles.radioButton,
                {
                  borderColor: item.selected
                    ? appColors.primary
                    : appColors.border,
                  borderWidth: item.selected ? 2 : 1,
                  marginTop: props.marginTop
                    ? props.marginTop
                    : windowHeight(10),
                },
              ]}>
              {item.selected && <View style={styles.radioButtonIcon} />}
            </TouchableOpacity>
            <Text
              style={[
                styles.name,
                {
                  color: props.color ? props.color : colors.text,
                  fontSize: props.fontSize ? props.fontSize : fontSizes.FONT16,
                  padding: props.padding ? props.padding : windowHeight(10),
                },
              ]}>
              {t(item.name)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
