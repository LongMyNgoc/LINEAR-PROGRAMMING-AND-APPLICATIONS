// Topbar.tsx
import './Topbar.css';

interface TopbarProps {
    toggleMenu: () => void;
}

const Topbar = ({ toggleMenu }: TopbarProps) => {
    return (
        <header className="topbar">
            <div className="hamburger-menu" onClick={toggleMenu}>
                &#9776; {/* Biểu tượng hamburger */}
            </div>
            <h2>Student Dashboard</h2>
        </header>
    );
};

export default Topbar;
