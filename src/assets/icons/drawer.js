import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Drawer() {
  const {colors} = useTheme();
  return (
    <Svg
      height={windowHeight(26)}
      width={windowWidth(30)}
      fill="none"
      viewBox="0 0 18 14 ">
      <Path
        d="M13.1667 5.33337H1.5"
        stroke={colors.text}
        strokeLinecap="round"
      />
      <Path d="M16.5 2H1.5" stroke={colors.text} strokeLinecap="round" />
      <Path d="M16.5 8.66663H1.5" stroke={colors.text} strokeLinecap="round" />
      <Path d="M13.1667 12H1.5" stroke={colors.text} strokeLinecap="round" />
    </Svg>
  );
}
