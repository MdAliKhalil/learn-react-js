import Divider from "../Divider";
import style from './Toggle.module.css';
import useToggle from "./useToggle";

const Toggle = () => {
    const [value, toggleValue] = useToggle(true);

    return (
        <>
            <button onClick={() => toggleValue(!value)} className={style.btn}>{value ? "Hide" : "Show"}</button>
            <button onClick={() => toggleValue(false)} className={style.btn}>Hide</button>
            <button onClick={() => toggleValue(true)} className={style.btn}>Show</button>

            {
                value ? <h1>Custom Hook</h1> : null
            }
            <Divider />
        </>
    );
}

export default Toggle;