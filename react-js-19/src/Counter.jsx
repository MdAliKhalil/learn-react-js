import React, { useState } from "react";
import style from "./Counter.module.css";
import Divider from "./Divider";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className={style.container}>
            <h1>Count: {count}</h1>
            <button className={style.btn} onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
            <button className={style.btn} onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                }
            }}>Decrement</button>
            <Divider />
        </div>
    );
}

export default Counter;