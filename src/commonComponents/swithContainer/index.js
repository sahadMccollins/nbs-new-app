import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';
import styles from './styles';
import {Switch} from 'react-native-switch';

export default function SwitchContainer({switchOn, toggleDarkSwitch}) {
  const {colors} = useTheme();
  return (
    <View>
      <Switch
        value={switchOn}
        switchWidthMultiplier={2.7}
        barHeight={31}
        backgroundActive={colors.styleBackground}
        backgroundInactive={colors.styleBackground}
        switchLeftPx={1.9}
        switchRightPx={1.9}
        activeText={''}
        inActiveText={''}
        innerCircleStyle={[
          styles.switch,
          {
            backgroundColor: switchOn == true ? appColors.primary : 'gray',
            borderColor: switchOn == true ? appColors.primary : 'gray',
          },
        ]}
        circleSize={23}
        onValueChange={val => toggleDarkSwitch(val)}
        renderInsideCircle={() => (
          <Text style={styles.switchText}>
            {switchOn == true ? 'YES' : 'NO'}
          </Text>
        )}
      />
    </View>
  );
}
