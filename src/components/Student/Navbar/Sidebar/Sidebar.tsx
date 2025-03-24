import './Sidebar.css';
import Logo from '../../../../assets/Student/Logo.png';
//import DashBoard from '../../../../assets/Student/DashBoard.png';
import Profile from '../../../../assets/Student/Profile.png';
import Courses from '../../../../assets/Student/Courses.png';
import Tool from '../../../../assets/Student/Tool.png'
//import Exams from '../../../../assets/Student/Exams.png';

const Sidebar = ({ setActiveTab }: { setActiveTab: (tab: string | null) => void }) => {
    const handleToolClick = () => {
        window.open('https://nckh-qhtt-six.vercel.app/', '_blank', 'noopener,noreferrer');
    };
    return (
        <nav className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <ul>
                {/*<li onClick={() => setActiveTab('dashboard')}>
                    <img src={DashBoard} alt="Dashboard" className="dashboard-icon" />
                </li>*/}
                <li onClick={() => {
                    setActiveTab('profile');
                }}>
                    <img src={Profile} alt="Profile" className="profile-icon" />
                </li>
                <li onClick={() => {
                    setActiveTab('courses');
                }}>
                    <img src={Courses} alt="Courses" className="courses-icon" />
                </li>
                <li onClick={handleToolClick}>
                    <img src={Tool} alt="Tool" className='tool-icon' />
                </li>
                {/*<li onClick={() => setActiveTab('exams')}>
                    <img src={Exams} alt="Exams" className="exams-icon" />
                </li>*/}
            </ul>
        </nav>
    );
};

export default Sidebar;
