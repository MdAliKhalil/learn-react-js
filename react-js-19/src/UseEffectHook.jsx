import { useEffect, useState } from 'react';
import Divider from './Divider';
import style from './UseEffectHook.module.css';

function UseEffectHook() {
    const [mdate, setMDate] = useState(1);
    const [adate, setADate] = useState(5);

    const mDateHandler = () => {
        mdate < 31 ? setMDate(mdate + 1) : setMDate(1);
    }

    const aDateHandler = () => {
        adate < 30 ? setADate(adate + 1) : setADate(1);
    }

    useEffect(() => {
        console.warn(`March ${mdate}, 2025`);
        return () => {
            setADate(0);
        };
    }, [mdate])

    useEffect(() => {
        console.warn(`April ${adate}, 2025`);
    }, [adate])

    return (
        <div>
            <h1>Days In March & April</h1>
            <p>March {mdate}, 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;April {adate}, 2025</p>
            <button className={style.btn} onClick={mDateHandler}>Next Day</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className={style.btn} onClick={aDateHandler}>Next Day</button>
            <Divider />
        </div>
    );
}

export default UseEffectHook;