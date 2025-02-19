import './Sidebar.css';
import Logo from '../../../assets/Student/Logo.png';
import DashBoard from '../../../assets/Student/DashBoard.png';
import Profile from '../../../assets/Student/Profile.png';
import Courses from '../../../assets/Student/Courses.png';
import Exams from '../../../assets/Student/Exams.png';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            {/* Thêm logo vào đầu sidebar */}
            <div className="sidebar-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <ul>
                <li>
                    <img src={DashBoard} alt="Dashboard" className="dashboard-icon" />
                </li>
                <li>
                    <img src={Profile} alt="Profile" className="profile-icon" />
                </li>
                <li>
                    <img src={Courses} alt="Courses" className="courses-icon" />
                </li>
                <li>
                    <img src={Exams} alt="Exams" className="exams-icon" />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
