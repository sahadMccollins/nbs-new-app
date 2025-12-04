import Svg, {Polygon} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Success(props) {
  const {colors} = useTheme();
  return (
    <Svg
      fill="#000000"
      version="1.1"
      height={windowHeight(25)}
      width={windowWidth(25)}
      viewBox="0 0 335.765 335.765">
      <G>
        <G>
          <Polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
        </G>
      </G>
    </Svg>
  );
}
