import Svg, {Path} from 'react-native-svg';
import React from 'react';

const Check = props => {
  return (
    <Svg
      width={props.width ? props.width : 15}
      height={props.height ? props.height : 15}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M9.83317 3.25L3.87484 9.20833L1.1665 6.5"
        stroke={props.color ? props.color : 'white'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Check;
