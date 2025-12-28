import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';

export function BulkOrder(props) {
    const { colors } = useTheme();
    return (
        <Svg
            width={props.width ? props.width : windowWidth(26)}
            height={props.height ? props.height : windowHeight(30)}
            viewBox="0 0 40 40"
            fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8L12 42L38 42L38 16L30 8Z"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
            />
            <Path
                d="M30 8L30 16L38 16"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
            />
            <Path
                d="M16 20L34 20"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M16 26L34 26"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M16 32L28 32"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M33 34.5L33 39.5"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M30.5 37L35.5 37"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M33 32C33 33.66 31.66 35 30 35C28.34 35 27 33.66 27 32C27 30.34 28.34 29 30 29C31.66 29 33 30.34 33 32Z"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="2"
                fill="none"
            />
        </Svg>
    );
}