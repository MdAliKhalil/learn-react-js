import style from './University.module.css';
import { NavLink, Outlet } from "react-router";

const University = () => {
    return (
        <div className={style.container}>
            <h1>University Page</h1>
            <NavLink to='departments' className={style.link}>Departments</NavLink>
            <NavLink to='faculty' className={style.link}>Faculty</NavLink>
            <NavLink to='students' className={style.link}>Students</NavLink>
            <Outlet />
        </div>
    );
}

export default University