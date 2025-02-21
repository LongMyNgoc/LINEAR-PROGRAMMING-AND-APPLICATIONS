// StudentNavbar.tsx
import Sidebar from './Sidebar.tsx'
import Topbar from './Topbar.tsx';
import StudentMUI from '../Main_UI/StudentMUI.tsx';
import './Student.css';

const Student = () => {

    return (
        <div className="layout">
            {/* Thanh Navbar Dọc */}
            <Sidebar />

            <div className="main">
                {/* Thanh Navbar Ngang */}
                <Topbar />
    
                <StudentMUI />
                </div>
        </div>
    );
};

export default Student;
