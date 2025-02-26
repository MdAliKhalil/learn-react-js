import React, { useState } from 'react';
import Divider from './Divider';
import style from './LoginForm.module.css';

function LoginForm() {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const formHandler = (event) => {
        event.preventDefault();
        alert(`Successfully login with username: ${user} and password: ${pass}`);
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={formHandler}>
                <input type='text' name="" id="" value={user} placeholder='Enter your email' required className={style.inpt} onChange={(event) => {
                    setUser(event.target.value);
                }} />
                <br />
                <input type="password" name="" id="" value={pass} placeholder='Enter your password' required className={style.inpt} onChange={(event) => {
                    setPass(event.target.value);
                }} />
                <br />
                <input type="submit" value="Login Now" className={style.btn} />
            </form>
            <Divider />
        </div>
    );
}

export default LoginForm;