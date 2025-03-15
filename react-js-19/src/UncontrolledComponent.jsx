import { useRef } from "react";
import Divider from "./Divider";
import style from './UncontrolledComponent.module.css';

const UncontrolledComponent = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const loginFormHandler = (event) => {
        event.preventDefault();
        const email = document.querySelector("#email").value;
        const pass = document.querySelector("#pass").value;
        console.log("Username:", email, "and Password:", pass);
    }

    const signupFormHandler = (event) => {
        event.preventDefault();
        console.log("Name:", nameRef.current.value, "Email:", emailRef.current.value, "Password:", passRef.current.value);
    }

    return (
        <>
            <form action="" onSubmit={loginFormHandler}>
                <input type="text" name="" id="email" placeholder="Enter your email" />
                <br /><br />
                <input type="password" name="" id="pass" placeholder="Enter your password" />
                <br /><br />
                <button className={style.btn}>Login</button>
            </form>
            <br />
            <form action="" onSubmit={signupFormHandler}>
                <input type="text" name="" ref={nameRef} placeholder="Enter your name" />
                <br /><br />
                <input type="email" name="" ref={emailRef} placeholder="Enter your email" />
                <br /><br />
                <input type="password" name="" ref={passRef} placeholder="Create your password" />
                <br /><br />
                <button className={style.btn}>Sign Up</button>
            </form>
            <Divider />
        </>
    );
}

export default UncontrolledComponent;