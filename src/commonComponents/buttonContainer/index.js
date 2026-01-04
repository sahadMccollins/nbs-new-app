import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '@commonComponents';
import { fontSizes, windowHeight } from '@theme/appConstant';
import styles from './styles';
import { useValues } from '@App';

export default buttonContainer = props => {
  const {
    t,
    colors,
    text,
    btnTitle,
    subText,
    subTextColor,
    bottom,
    curruncyIcon,
    secondaryClick
  } = props;
  // const val = bottom == 0 ? 0 : 60;
  const val = bottom == 0 ? 0 : bottom;
  const { viewRTLStyle } = useValues();

  return (
    <View
      style={[
        styles.mainView,
        {
          backgroundColor: colors.card,
          bottom: windowHeight(val),
          // backgroundColor: "red",
          // bottom: windowHeight(10),
          borderTopColor: colors.brandsBg,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View style={{ marginHorizontal: windowHeight(5) }}>
        <View style={{ flexDirection: viewRTLStyle }}>
          <Text style={[styles.text, { color: colors.text }]}>
            {curruncyIcon}
          </Text>
          {/* <Text style={[styles.text, { color: colors.text }]}>{text}</Text> */}

          {text && (
            secondaryClick ? (
              <TouchableOpacity onPress={secondaryClick}>
                <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
            )
          )}
        </View>
        {subText && (
          <Text
            style={[
              styles.subText,
              { color: subTextColor ? subTextColor : colors.subText },
            ]}>
            {subText}
          </Text>
        )}
      </View>
      <Button
        style={styles.order}
        fontSize={fontSizes.FONT19}
        text={btnTitle}
        t={t}
        onPress={props.btnClick}
      />
    </View>
  );
};
