import Divider from "./Divider";
import style from './DerivedState.module.css';
import { useState } from "react";

const DerivedState = () => {
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    //Derived state variables
    const totalusers = users.length;
    const lastuser = users[users.length - 1];
    const uniqueusers = [...new Set(users)].length;

    const handleUsers = () => {
        setUsers([...users, user])
    }

    return (
        <>
            <h2>Total Users: {totalusers}</h2>
            <h2>Last User: {lastuser}</h2>
            <h2>Unique Users: {uniqueusers}</h2>
            <input type="text" name="" id="" value={user} onChange={(event) => setUser(event.target.value)} className={style.inpt} />
            <br />
            <button onClick={handleUsers} className={style.btn}>Add User</button>
            {
                users.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                ))
            }
            <Divider />
        </>
    );
}

export default DerivedState;