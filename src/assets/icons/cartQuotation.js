import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';

export function CartQuotation(props) {
    const { colors } = useTheme();
    return (
        <Svg
            width={props.width ? props.width : windowWidth(26)}
            height={props.height ? props.height : windowHeight(30)}
            fill="none"
            viewBox="0 0 24 24">
            <Path
                d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM16 18C14.9 18 14 18.9 14 20C14 21.1 14.9 22 16 22C17.1 22 18 21.1 18 20C18 18.9 17.1 18 16 18ZM16 8H7V10H16V8ZM7 14H14V12H7V14ZM20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H18C19.1 18 20 17.1 20 16V6C20 4.9 19.1 4 20 4ZM18 16H4V6H18V16ZM11.5 10.5C11.5 10.8 11.7 11 12 11H17C17.3 11 17.5 10.8 17.5 10.5C17.5 10.2 17.3 10 17 10H12C11.7 10 11.5 10.2 11.5 10.5ZM11.5 12.5C11.5 12.8 11.7 13 12 13H17C17.3 13 17.5 12.8 17.5 12.5C17.5 12.2 17.3 12 17 12H12C11.7 12 11.5 12.2 11.5 12.5ZM11.5 14.5C11.5 14.8 11.7 15 12 15H17C17.3 15 17.5 14.8 17.5 14.5C17.5 14.2 17.3 14 17 14H12C11.7 14 11.5 14.2 11.5 14.5Z"
                fill={props.color ? props.color : colors.text}
                fillRule="evenodd"
            />
        </Svg>
    );
}