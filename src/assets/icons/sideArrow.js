import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import Appcolor from '@theme/appColors';

export function SideArrow(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={props.width ? props.width : windowWidth(12)}
      height={props.height ? props.height : windowHeight(16)}
      viewBox="0 0 10 16"
      fill="none">
      <Path
        d="M1.5 1L8.5 8L1.5 15"
        stroke={props.color ? props.color : colors.icon}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
