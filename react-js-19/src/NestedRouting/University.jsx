import style from './University.module.css';
import { NavLink, Outlet } from "react-router";

const University = () => {
    return (
        <div>
            <div className={style.container}>
                <h1>University Page</h1>
                <NavLink to='usa' className={style.link}>Departments</NavLink>
                <NavLink to='usa/faculty' className={style.link}>Faculty</NavLink>
                <NavLink to='usa/students' className={style.link}>Students</NavLink>
            </div>
            <div className={style.container}>
                <Outlet />
            </div>
        </div>
    );
}

export default University