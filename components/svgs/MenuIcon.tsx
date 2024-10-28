import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const MenuIcon = (props: any) => (
    <Svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={14} cy={14} r={13.9} stroke="#D4D4D4" strokeWidth={0.2} />
        <Path
            d="M8 19.2857H20M8 9H20M8 14.1429H20"
            stroke="#252525"
            strokeLinecap="round"
        />
    </Svg>
);
export default MenuIcon;
