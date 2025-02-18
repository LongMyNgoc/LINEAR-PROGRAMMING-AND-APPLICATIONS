// StudentNavbar.tsx
import { useState } from 'react';
import Sidebar from './Sidebar.tsx'
import Topbar from './Topbar.tsx';
import DropdownMenu from './DropdownMenu';
import './StudentNavbar.css';

const StudentNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu xổ xuống

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Đảo trạng thái menu
    };

    return (
        <div className="layout">
            {/* Thanh Navbar Dọc */}
            <Sidebar />

            <div className="main">
                {/* Thanh Navbar Ngang */}
                <Topbar toggleMenu={toggleMenu} />

                {/* Menu xổ xuống */}
                {isMenuOpen && <DropdownMenu />}

                {/* Nội dung chính */}
                <div className="content">
                    <p>Chào mừng đến với trang quản lý sinh viên!</p>
                </div>
            </div>
        </div>
    );
};

export default StudentNavbar;
