import { useState } from "react";
import Clock from "./Clock";
import Divider from "./Divider";

function ClockColor() {
    const [color, setColor] = useState('yellow');

    return (
        <div>
            <h1>Default Props in React JS</h1>
            <select name="" id="" onChange={(event) => setColor(event.target.value)}>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="white">White</option>
            </select>
            <Clock color={color} />
            <Divider />
        </div>
    );
}

export default ClockColor;