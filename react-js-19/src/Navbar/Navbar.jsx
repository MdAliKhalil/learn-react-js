import { Link, Outlet } from "react-router";
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
                            <Link to="/" className={style.menuitem}>Home</Link>
                        </li>
                        <li>
                            <Link to="/toggle" className={style.menuitem}>Toggle</Link>
                        </li>
                        <li>
                            <Link to="/university" className={style.menuitem}>University</Link>
                        </li>
                        <li>
                            <Link to="/login-form" className={style.menuitem}>Login</Link>
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