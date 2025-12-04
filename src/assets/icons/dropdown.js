import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function DropDown(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={props.width ? props.width : windowWidth(18)}
      height={props.height ? props.height : windowHeight(18)}
      viewBox="0 0 8 6"
      fill="none">
      <Path
        d="M0.234835 0.984835C0.367968 0.851702 0.5763 0.839599 0.723106 0.948526L0.765165 0.984835L4 4.2195L7.23484 0.984835C7.36797 0.851702 7.5763 0.839599 7.72311 0.948526L7.76517 0.984835C7.8983 1.11797 7.9104 1.3263 7.80148 1.47311L7.76517 1.51517L4.26517 5.01516C4.13203 5.1483 3.9237 5.1604 3.7769 5.05147L3.73484 5.01516L0.234835 1.51517C0.0883883 1.36872 0.0883883 1.13128 0.234835 0.984835Z"
        fill={colors.text}
      />
    </Svg>
  );
}
