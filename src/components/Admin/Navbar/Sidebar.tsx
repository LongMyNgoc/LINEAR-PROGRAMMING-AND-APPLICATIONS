import './Sidebar.css';
import Logo from '../../../assets/Student/Logo.png';
import DashBoard from '../../../assets/Admin/DashBoard.png';
import Account from '../../../assets/Admin/Account.png';
import Classes from '../../../assets/Teacher/Classes.png';
import NewsEvent from '../../../assets/Admin/NewsEvent.png';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            {/* Thêm logo vào đầu sidebar */}
            <div className="sidebar-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <ul>
                <li>
                    <img src={Account} alt="Account" className="account-icon" />
                </li>
                <li>
                    <img src={DashBoard} alt="Dashboard" className="dashboard-icon" />
                </li>
                <li>
                    <img src={Classes} alt="Classes" className="classes-icon" />
                </li>
                <li>
                    <img src={NewsEvent} alt="NewsEvent" className="newsevent-icon" />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
