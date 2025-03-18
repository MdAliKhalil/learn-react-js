import { useActionState } from "react";
import Divider from "./Divider";
import style from './UseActionStateHook.module.css';

const UseActionStateHook = () => {
    const handleSubmit = async (previousData, formData) => {
        let user = formData.get('username');
        let pass = formData.get('password');
        await new Promise(res => setTimeout(res, 2000));

        if (user !== '' && pass !== '') {
            return ({
                message: 'Data has submitted',
                user,
                pass
            })
        }
        else {
            return ({
                error: 'Kindly fill out the fields'
            })
        }
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined);

    return (
        <>
            <form action={action}>
                <input type="text" name="username" id="" placeholder="Enter your email" className={style.inpt} />
                <br />
                <input type="password" name="password" id="" placeholder="Enter your password" className={style.inpt} />
                <br /><br />
                <button disabled={pending} className={style.btn}>{pending ? 'Submitting...' : 'Submit'}</button>
            </form>
            {data?.message && <span style={{ color: 'green' }}>{data?.message}</span>}
            {data?.error && <span style={{ color: 'red' }}>{data?.error}</span>}
            <br />
            {data?.message && <span>Username: <u>{data?.user}</u>&nbsp;,&nbsp;Password: <u>{data?.pass}</u></span>}
            <Divider />
        </>
    );
}

export default UseActionStateHook;