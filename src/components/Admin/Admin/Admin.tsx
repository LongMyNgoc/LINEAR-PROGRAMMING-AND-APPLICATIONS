// StudentNavbar.tsx
import Sidebar from '../Navbar/Sidebar/Sidebar.tsx'
import Topbar from '../Navbar/Topbar/Topbar.tsx';
import { useState } from 'react';
import AdminMUI from '../Main_UI/AdminMUI.tsx';
import './Admin.css';

const Teacher = () => {
const [activeTab, setActiveTab] = useState<string | null>('dashboard');

    return (
        <div>
            {/* Thanh Navbar Dọc */}
            <Sidebar setActiveTab={setActiveTab}/>

            <Topbar />

            <div className="admin-container">
                <AdminMUI activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
        </div>
    );
};

export default Teacher;
