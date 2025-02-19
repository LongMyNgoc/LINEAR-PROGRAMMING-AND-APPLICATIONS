// StudentNavbar.tsx
import Sidebar from './Sidebar.tsx'
import Topbar from './Topbar.tsx';
import './Student.css';

const Student = () => {

    return (
        <div className="layout">
            {/* Thanh Navbar Dọc */}
            <Sidebar />

            <div className="main">
                {/* Thanh Navbar Ngang */}
                <Topbar />

                {/* Nội dung chính */}
                <div className="content">
                    <p>Chào mừng đến với trang quản lý sinh viên!</p>
                </div>
            </div>
        </div>
    );
};

export default Student;
