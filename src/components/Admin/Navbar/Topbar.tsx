import './Topbar.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useTopbarLogic } from './Topbar'; // Import logic từ Topbar.ts

const Topbar = () => {
    const { menuOpen, toggleMenu, handleLogout, user } = useTopbarLogic(); // Sử dụng logic

    return (
        <header className="topbar">
            <div className="hamburger-menu">
                &#9776;
            </div>
            <div className="topbar-icons">
                <div className="icon">
                    <FaBell />
                </div>
                <div className="user-info-container">
                    <div className="icon user-icon" onClick={toggleMenu}>
                        <FaUserCircle />
                        {menuOpen && (
                            <div className="dropdown-menu">
                                <button onClick={handleLogout}>Đăng Xuất</button>
                            </div>
                        )}
                    </div>
                    {user && (
                        <div className="user-info" style={{ marginLeft: '0.5rem' }}>
                            <div>{user.name}</div>
                            <div>Quản Trị Viên</div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Topbar;