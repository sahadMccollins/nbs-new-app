import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Rupees() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(31)}
      height={windowHeight(31)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        stroke={colors.text}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <Path
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
        d="M8 7h3m5 0h-5m5 3h-2m-6.003 0H14m-3-3c1 0 3 .6 3 3m-1 7-5.003-4H11c1 0 3-.6 3-3"
      />
    </Svg>
  );
}
