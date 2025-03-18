import { useState } from "react";
import Divider from "./Divider";
import style from './LiftingStateUp.module.css';

const ChildA = ({ name, setname }) => {
    return (
        <div>
            <input type="text" name="" value={name} id="" placeholder="Enter your name" onChange={(event) => setname(event.target.value)} className={style.inpt} />
        </div>
    );
}

const ChildB = ({ name }) => {
    return (
        <div>
            {name !== '' ? <p>Name entered: {name}</p> : null}
        </div>
    );
}

const LiftingStateUp = () => {
    const [name, setName] = useState('');

    return (
        <>
            <ChildA name={name} setname={setName} />
            <ChildB name={name} />
            <Divider />
        </>
    );
}

export default LiftingStateUp;