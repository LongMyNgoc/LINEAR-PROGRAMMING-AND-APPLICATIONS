// Topbar.tsx
import './Topbar.css';
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Import icon chuông và icon người dùng

interface TopbarProps {
    toggleMenu: () => void;
}

const Topbar = ({ toggleMenu }: TopbarProps) => {
    return (
        <header className="topbar">
            <div className="hamburger-menu" onClick={toggleMenu}>
                &#9776; {/* Biểu tượng hamburger */}
            </div>
            <div className="topbar-icons">
                <div className="icon">
                    <FaBell /> {/* Icon chuông */}
                </div>
                <div className="icon">
                    <FaUserCircle /> {/* Icon người dùng */}
                </div>
            </div>
        </header>
    );
};

export default Topbar;
