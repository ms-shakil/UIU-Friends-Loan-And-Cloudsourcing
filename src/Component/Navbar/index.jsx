import { useState } from 'react';
import { removeToken } from '../../utils/getToken';
import { getUser, removeUser } from '../../utils/getUser';
import { isAuthenticated } from '../../utils/isAuthenticated';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        removeToken();
        removeUser();
        navigate('/login');
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const options = ['Profile', 'Settings', 'Logout'];
    return (
        <div className="nav_container">
            <div className="nav_logo" onClick={() => navigate('/')}>
                <img src="/Img/logo.jpg" alt="" width={100} height={70} />
                <h1>UIU FLCS</h1>
            </div>
            <ul className="nav_links">
                <li>
                    <div onClick={() => navigate('/loan')}> Loan</div>
                    {/* <Link to={"/loan"}>
            <div>Loan</div>
          </Link> */}
                </li>
                <li>
                    <div onClick={() => navigate('/Donation')}> Donation</div>
                </li>
            </ul>

            <div className="nav_auth">
                {!isAuthenticated() ? (
                    <Link to="/login">
                        <button>LogIn</button>
                    </Link>
                ) : (
                    <div style={{ position: 'relative' }}>
                        <p
                            style={{
                                cursor: 'pointer',
                                padding: '5px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: 'rgb(232, 76, 19)',
                            }}
                            onClick={toggleDropdown}
                        >
                            {getUser()?.userName}
                        </p>
                        {isDropdownOpen && (
                            <div
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    borderRadius: '5px',
                                    padding: '10px',
                                    background: '#fff',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',
                                }}
                            >
                                <button
                                    style={{
                                        whiteSpace: 'nowrap',
                                    }}
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Navbar;
