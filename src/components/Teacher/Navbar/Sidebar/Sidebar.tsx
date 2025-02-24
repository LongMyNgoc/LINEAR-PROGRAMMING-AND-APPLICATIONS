import './Sidebar.css';
import Logo from '../../../../assets/Student/Logo.png';
import DashBoard from '../../../../assets/Student/DashBoard.png';
import Profile from '../../../../assets/Student/Profile.png';
import Classes from '../../../../assets/Teacher/Classes.png';
import Exams from '../../../../assets/Student/Exams.png';

const Sidebar = ({ setActiveTab }: { setActiveTab: (tab: string | null) => void }) => {
    return (
        <nav className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <ul>
                <li onClick={() => setActiveTab('dashboard')}>
                    <img src={DashBoard} alt="Dashboard" className="dashboard-icon" />
                </li>
                <li onClick={() => {
                    setActiveTab('profile');
                }}>
                    <img src={Profile} alt="Profile" className="profile-icon" />
                </li>
                <li onClick={() => {
                    setActiveTab('classes');
                }}>
                    <img src={Classes} alt="Classes" className="classes-icon" />
                </li>
                <li onClick={() => setActiveTab('exams')}>
                    <img src={Exams} alt="Exams" className="exams-icon" />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
