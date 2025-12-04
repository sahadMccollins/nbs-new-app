import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function HelpCircle(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width="15"
      height="20"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_669_21)">
        <Path
          d="M5.50008 10.0832C8.03139 10.0832 10.0834 8.03114 10.0834 5.49984C10.0834 2.96853 8.03139 0.916504 5.50008 0.916504C2.96878 0.916504 0.916748 2.96853 0.916748 5.49984C0.916748 8.03114 2.96878 10.0832 5.50008 10.0832Z"
          stroke={props.colors ? props.colors : colors.text}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.16626 4.12477C4.27402 3.81845 4.4867 3.56016 4.76666 3.39563C5.04661 3.2311 5.37575 3.17095 5.6958 3.22585C6.01584 3.28075 6.30613 3.44714 6.51525 3.69556C6.72437 3.94398 6.83883 4.25839 6.83834 4.58311C6.83834 5.49977 5.46334 5.95811 5.46334 5.95811"
          stroke={props.colors ? props.colors : colors.text}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5.5 7.7915H5.50489"
          stroke={props.colors ? props.colors : colors.text}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_669_21">
          <Rect width="11" height="11" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
