import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';

export function France() {
    return (
        <Svg
            width={windowWidth(34)}
            height={windowHeight(34)}
            id="flag-icons-fr"
            viewBox="0 0 640 480">
            <Defs>
                <ClipPath id="a">
                    <Path fillOpacity=".7" d="M-88 32h640v480H-88z" />
                </ClipPath>
            </Defs>
            <G
                fillRule="evenodd"
                clipPath="url(#a)"
                transform="translate(88 -32) scale(.9375)">
                <Path fill="#002395" d="M0 32h213.3v480H0Z" />
                <Path fill="#fff" d="M213.3 32h213.4v480H213.3Z" />
                <Path fill="#ED2939" d="M426.7 32H640v480H426.7Z" />
            </G>
        </Svg>
    );
}