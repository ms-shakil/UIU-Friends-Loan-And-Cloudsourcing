import './Navbar.css'
import {  Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="nav_container">
            <div className="nav_logo">
                <img src="" alt="" />
                <h1>CoudSourcing</h1>
            </div>
            <ul className="nav_links">
                <li>
                    <Link to={'/loan'}>
                        <div>Loan</div>
                    </Link>
                </li>
                <li>
                    <div onClick={() => navigate('/Donation')}>Donate</div>
                </li>
            </ul>

            <div className="nav_auth">
                <Link to="/login">
                    <button>LogIn</button>
                </Link>
            </div>
        </div>
    )
}
export default Navbar