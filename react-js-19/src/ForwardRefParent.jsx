import { useRef } from 'react';
import Divider from './Divider';
import ForwardRefChild from './ForwardRefChild';
import style from './ForwardRefParent.module.css';

const ForwardRefParent = () => {
    const nameRef = useRef(null);

    const inputHandler = () => {
        nameRef.current.focus();
        nameRef.current.value = "Muhammad Ali Khalil";
    }

    return (
        <>
            <ForwardRefChild refer={nameRef} />
            <button className={style.btn} onClick={inputHandler}>Get Name</button>
            <Divider />
        </>
    );
}

export default ForwardRefParent;