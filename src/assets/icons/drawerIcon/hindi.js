import Svg, {Path, G, Circle, Use, Rect} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Hindi() {
  return (
    <Svg
      viewBox="0 0 225 150"
      width={windowWidth(34)}
      height={windowHeight(38)}>
      <Rect width="225" fill="#f93" height="170" />
      <Rect y="50" width="225" fill="#fff" height="70" />
      <Rect y="100" width="225" fill="#128807" height="70" />
      <G transform="translate(112.5,75)">
        <Circle r="20" fill="#008" />
        <Circle r="17.5" fill="#fff" />
        <Circle r="3.5" fill="#008" />
        <G id="d">
          <G id="c">
            <G id="b">
              <G id="a">
                <Circle
                  r=".875"
                  transform="rotate(7.5) translate(17.5)"
                  fill="#008"
                />
                <Path d="m0 17.5 0.6-10.5l-0.6-5-0.6 5 0.6 10.5z" fill="#008" />
              </G>
              <Use transform="rotate(15)" />
            </G>
            <Use transform="rotate(30)" />
          </G>
          <Use transform="rotate(60)" />
        </G>
        <Use transform="rotate(120)" />
        <Use transform="rotate(240)" />
      </G>
    </Svg>
  );
}
