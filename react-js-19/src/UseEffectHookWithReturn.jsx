import { useEffect, useState } from "react";
import Divider from "./Divider";
import style from './UseEffectHookWithReturn.module.css';
import SlideC from '../public/SlideC.jpg';

const UseEffectHookWithReturn = () => {
    const [toggle, setToggle] = useState(true);

    const imageHandler = () => {
        setToggle(!toggle);

    }

    return (
        <>
            <button className={style.btn} onClick={imageHandler}>{toggle ? "Hide" : "Show"}</button>
            <br />
            {toggle ? <Image source={SlideC} styling={style.img} /> : null}
            <Divider />
        </>
    );
}

const Image = ({ source, styling }) => {
    //useEffect() is behaving unexpectedly because React Strict Mode is enabled.
    useEffect(() => {
        console.log("Image has been visible");
        return () => {
            console.log("Image has been hidden");
        };
    }, []);

    return (
        <img src={source} className={styling} alt="Slide" />
    );
}

export default UseEffectHookWithReturn;