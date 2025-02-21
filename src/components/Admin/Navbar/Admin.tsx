// StudentNavbar.tsx
import Sidebar from './Sidebar.tsx'
import Topbar from './Topbar.tsx';
import './Admin.css';

const Teacher = () => {

    return (
        <div className="layout">
            {/* Thanh Navbar Dọc */}
            <Sidebar />

            <div className="main">
            <Topbar />

                {/* Nội dung chính */}
                <div className="content">
                    <p>Chào mừng đến với trang quản lý admin!</p>
                </div>
            </div>
        </div>
    );
};

export default Teacher;
