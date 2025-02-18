// Sidebar.tsx
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
