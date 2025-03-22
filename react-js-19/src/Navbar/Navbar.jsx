import { Link } from "react-router";
import Divider from "../Divider";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <Divider />
            <div className={style.header}>
                <div><Link to='/' className={style.logo}>Logo</Link></div>
                <div>
                    <ul className={style.menu}>
                        <li>
                            <Link to="/" className={style.menuitem}>Home</Link>
                        </li>
                        <li>
                            <Link to="/counter" className={style.menuitem}>Counter</Link>
                        </li>
                        <li>
                            <Link to="/toggle" className={style.menuitem}>Toggle</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar