import { useState } from 'react';
import style from './ControlledComponent.module.css';
import Divider from './Divider';

function ControlledComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const formHandler = (event) => {
        event.preventDefault();
        password === confirmpassword ? alert(`Registered successfully with email: ${email}`) : alert('Password do not match! Please try again.')
    }

    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={formHandler}>
                <input type="text" name="" id="" value={name} placeholder='Enter your name' className={style.inpt} onChange={(event) => { setName(event.target.value) }} required />
                <br />
                <input type="email" name="" id="" value={email} placeholder='Enter your email' className={style.inpt} onChange={(event) => { setEmail(event.target.value) }} required />
                <br />
                <input type="password" name="" id="" value={password} placeholder='Create a password' className={style.inpt} onChange={(event) => { setPassword(event.target.value) }} required />
                <br />
                <input type="password" name="" id="" value={confirmpassword} placeholder='Confirm password' className={style.inpt} onChange={(event) => { setConfirmPassword(event.target.value) }} required />
                <br />
                <button type="submit" className={style.btn}>Sign Up</button>
            </form>
            <Divider />
        </div>
    );
}

export default ControlledComponent;