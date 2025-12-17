import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';

export function Document(props) {
  const { colors } = useTheme();
  return (
    <Svg
      width={props.width ? props.width : windowWidth(26)}
      height={props.height ? props.height : windowHeight(30)}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z"
        fill={props.color ? props.color : colors.text}
        fillOpacity={0.7}
        fillRule="evenodd"
      />
    </Svg>
  );
}