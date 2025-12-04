import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Language(props) {
  return (
    <Svg
      width={props.width ? props.width : windowWidth(26)}
      height={props.height ? props.height : windowHeight(26)}
      viewBox="0 0 640 480">
      <G fill-rule="evenodd" transform="scale(.9375)">
        <G stroke-width="1pt">
          <Path
            fill="#bd3d44"
            d="M0 0h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0z"
          />
          <Path
            fill="#fff"
            d="M0 39.385h972.81V78.77H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0zm0 78.77h972.81v39.385H0z"
          />
        </G>
        <Path fill="#192f5d" d="M0 0h389.12v275.69H0z" />
      </G>
    </Svg>
  );
}
