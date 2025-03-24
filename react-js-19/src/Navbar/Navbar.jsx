import { Link, NavLink, Outlet } from "react-router";
import Divider from "../Divider";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <div className={style.header}>
                <div><Link to='/' className={style.logo}>Logo</Link></div>
                <div>
                    <ul className={style.menu}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? `${style.menuitem}` : `${style.link}`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/toggle" className={({ isActive }) => isActive ? `${style.menuitem}` : `${style.link}`}>Toggle</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-list" className={({ isActive }) => isActive ? `${style.menuitem}` : `${style.link}`}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="university/usa" className={({ isActive }) => isActive ? `${style.menuitem}` : `${style.link}`}>University</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login-form" className={({ isActive }) => isActive ? `${style.menuitem}` : `${style.link}`}>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Navbar