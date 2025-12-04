import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Rating(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={props.width ? props.width : '15'}
      height={props.width ? props.width : '20'}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6 1L7.545 3.96215L11 4.44006L8.5 6.74448L9.09 10L6 8.46215L2.91 10L3.5 6.74448L1 4.44006L4.455 3.96215L6 1Z"
        stroke={props.colors ? props.colors : colors.text}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
