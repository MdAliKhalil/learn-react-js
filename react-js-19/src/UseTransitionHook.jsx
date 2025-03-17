import Divider from "./Divider";
import style from './UseTransitionHook.module.css';
import { useTransition } from "react";
import Spinner from '../public/Spinner.gif';

const UseTransitionHook = () => {
    const [pending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 2000));
        })
    }

    return (
        <>
            <div className={style.container}>
                <button className={style.btn} onClick={handleClick} disabled={pending}>{pending ? 'Getting...' : 'Get Data'}</button>
                {pending ? <img src={Spinner} alt="Spinner" /> : null}
            </div>
            <Divider />
        </>
    );
}

export default UseTransitionHook;