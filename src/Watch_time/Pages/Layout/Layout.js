
import { Outlet, Link } from "react-router-dom";
import './layout.css'
const layout = () => {
    return (
        <>
        <label for='check'>&#9776;</label>
            <input type='checkbox' name='' id="check"></input>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default layout