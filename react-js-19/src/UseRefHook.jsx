import Divider from "./Divider";
import style from './UseRefHook.module.css';
import { useRef } from "react";

const UseRefHook = () => {
    const userRef = useRef(null);
    const passRef = useRef(null);
    const btnRef = useRef(null);

    const userStyleHandler = () => {
        userRef.current.focus();
        userRef.current.style.backgroundColor = 'green';
        userRef.current.style.color = 'white';
    }

    const passStyleHandler = () => {
        passRef.current.focus();
        passRef.current.style.backgroundColor = 'green';
        passRef.current.style.color = 'white';
    }

    const btnStyleHandler = () => {
        btnRef.current.style.backgroundColor = 'green';
    }

    return (
        <>
            <label htmlFor="username">Username:&nbsp;</label>
            <input type="text" name="" id="username" placeholder="Enter your username" ref={userRef} />&nbsp;
            <button className={style.btn} onClick={userStyleHandler}>Apply Style</button>
            <br /><br />
            <label htmlFor="password">Password:&nbsp;&nbsp;</label>
            <input type="password" name="" id="password" placeholder="Enter your password" ref={passRef} />&nbsp;
            <button className={style.btn} onClick={passStyleHandler}>Apply Style</button>
            <br /><br />
            <button className={style.btn} ref={btnRef}>Login</button>&nbsp;
            <button className={style.btn} onClick={btnStyleHandler}>Apply Style</button>
            <Divider />
        </>
    );
}

export default UseRefHook;