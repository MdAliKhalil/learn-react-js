import { useEffect, useState } from "react";
import style from './Clock.module.css';

function Clock({ color = "red" }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div>
            <span className={style.clk} style={{ color: color }}>{time}</span>
        </div>
    );
}

export default Clock;