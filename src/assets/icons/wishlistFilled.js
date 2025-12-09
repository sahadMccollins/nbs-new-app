import Svg, { Path } from "react-native-svg";
import React from "react";
import { windowWidth, windowHeight } from "@theme/appConstant";
import appColors from '@theme/appColors';
import { useTheme } from "@react-navigation/native";

export function WishlistFilled(props) {
    const { colors } = useTheme();

    return (
        <Svg
            width={props.width ? props.width : windowWidth(20)}
            height={props.height ? props.height : windowHeight(20)}
            viewBox="0 0 20 20"
            fill={appColors.primary}
        >
            <Path
                d="M10.001 18.35C9.58098 18.35 9.16881 18.2324 8.81031 18.007C5.07115 15.7126 1.73623 12.8386 0.568564 9.08882C-0.484202 5.77382 0.568564 2.10461 3.87107 0.989427C6.00948 0.246987 8.41048 0.685417 10.001 2.14666C11.5896 0.685417 13.9906 0.246987 16.1291 0.989427C19.4316 2.10461 20.4844 5.77382 19.4316 9.08882C18.264 12.8386 14.929 15.7126 11.1899 18.007C10.8314 18.2324 10.4192 18.35 10.001 18.35Z"
                fill={props.color ? props.color : colors.primary}
            />
        </Svg>
    );
}
