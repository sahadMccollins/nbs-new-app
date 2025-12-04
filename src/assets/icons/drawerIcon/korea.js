import Svg, {Path, G, ClipPath, Circle, Use, Defs} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Korea() {
  return (
    <Svg
      width={windowWidth(34)}
      height={windowHeight(34)}
      id="flag-icons-kr"
      viewBox="0 0 640 480">
      <Defs>
        <ClipPath id="a">
          <Path fillOpacity=".7" d="M-95.8-.4h682.7v512H-95.8z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        clipPath="url(#a)"
        transform="translate(89.8 .4) scale(.9375)">
        <Path fill="#f2f2f2" d="M-95.8-.4H587v512H-95.8Z" />
        <G transform="rotate(-56.3 361.6 -101.3) scale(10.66667)">
          <G id="c">
            <Path id="b" d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z" />
            <Use xlinkHref="#b" width="100%" height="100%" y="44" />
          </G>
          <Path stroke="#f2f2f2" d="M0 17v10" />
          <Path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z" />
          <Path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z" />
          <Circle cy="-6" r="6" fill="#cd2e3a" />
        </G>
        <G transform="rotate(-123.7 191.2 62.2) scale(10.66667)">
          <Use xlinkHref="#c" width="100%" height="100%" />
          <Path stroke="#f2f2f2" d="M0-23.5v3M0 17v3.5m0 3v3" />
        </G>
      </G>
    </Svg>
  );
}
