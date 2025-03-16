import Divider from './Divider';
import style from './UseFormStatusHook.module.css';
import { useFormStatus } from 'react-dom';

const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 3000));
    console.log('Form has submitted.');
}

const LoginForm = () => {
    const { pending } = useFormStatus();

    return (
        <>
            <input type="email" name="" id="" placeholder='Enter your email' />
            <br /><br />
            <input type="password" name="" id="" placeholder='Enter your password' />
            <br /><br />
            <button className={style.btn} disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
        </>
    );
}

const UseFormStatusHook = () => {
    return (
        <>
            <form action={handleSubmit}>
                <LoginForm />
            </form>
            <Divider />
        </>
    );
}

export default UseFormStatusHook;