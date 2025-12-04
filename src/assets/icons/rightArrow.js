import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function RightArrow() {
  const {colors} = useTheme();
  return (
    <Svg
      width="5"
      height="22"
      viewBox="0 0 3 4"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M3 2.03418L0 3.76623L0 0.302129L3 2.03418Z"
        fill="white"
        fill-opacity="0.8"
      />
    </Svg>
  );
}
