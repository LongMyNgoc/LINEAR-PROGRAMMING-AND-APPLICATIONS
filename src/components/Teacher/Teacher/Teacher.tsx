// StudentNavbar.tsx
import Sidebar from '../Navbar/Sidebar/Sidebar.tsx'
import Topbar from '../Navbar/Topbar/Topbar.tsx';
import TeacherMUI from '../Main_UI/TeacherMUI.tsx';
import './Teacher.css';
import { useState } from 'react';

const Teacher = () => {
const [activeTab, setActiveTab] = useState<string | null>('profile'); // Cho phép null

    return (
        <>
            <Sidebar setActiveTab={setActiveTab}/>
            <Topbar />
            <div className="teacher-container">
                <TeacherMUI activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
        </>
    );
};

export default Teacher;
