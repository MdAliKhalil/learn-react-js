import { useId } from "react";
import Divider from "./Divider";
import style from './UseIDHook.module.css';

const UseIDHook = () => {
    return (
        <>
            <UserForm label="First Name" />
            <UserForm label="Last Name" />
            <Divider />
        </>
    );
}

const UserForm = ({ label }) => {
    const id = useId();
    const user = "user";

    return (
        <div>
            <form action="" className={style.form}>
                <label htmlFor={id + user}>{label}</label>
                <input type="text" id={id + user} className={style.inpt} autoComplete={label} />
            </form>
        </div>
    );
}

export default UseIDHook;