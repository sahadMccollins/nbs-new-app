import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function DrawerArrow(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(16)}
      height={windowHeight(16)}
      viewBox="0 0 7 12"
      fill="none">
      <Path
        d="M1.45847 1.625L5.5418 6L1.45847 10.375"
        stroke={props.colors ? props.colors : colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
