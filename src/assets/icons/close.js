import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Close() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(22)}
      height={windowHeight(22)}
      viewBox="0 0 17 17"
      fill="none">
      <Path
        d="M12.5451 4.43213L4.5451 12.4321"
        stroke="#777777"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5451 4.43213L12.5451 12.4321"
        stroke="#777777"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
