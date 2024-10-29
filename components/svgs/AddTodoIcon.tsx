import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const AddTodoIcon = (props: any) => (
    <Svg
        width={53}
        height={53}
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={26.5} cy={26.5} r={26.5} fill="#0560FD" />
        <Path d="M26 17V36" stroke="white" strokeWidth={2} strokeLinecap="round" />
        <Path d="M36 27H17" stroke="white" strokeWidth={2} strokeLinecap="round" />
    </Svg>
);
export default AddTodoIcon;
