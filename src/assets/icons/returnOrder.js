import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';

export function ReturnOrder(props) {
    const { colors } = useTheme();
    return (
        <Svg
            height={windowHeight(25)}
            width={windowWidth(25)}
            fill="none"
            viewBox="0 0 24 24">
            <Path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.3 7.7L13 11V6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6V11L7.7 7.7C7.31 7.31 6.68 7.31 6.29 7.7C5.9 8.09 5.9 8.72 6.29 9.11L11 13.82V13.82L11.88 14.7C12.27 15.09 12.9 15.09 13.29 14.7L18.11 9.88C18.5 9.49 18.5 8.86 18.11 8.47C17.72 8.08 17.09 8.08 16.7 8.47L16.3 7.7Z"
                fill={colors.text}
                fillRule="evenodd"
            />
        </Svg>
    );
}