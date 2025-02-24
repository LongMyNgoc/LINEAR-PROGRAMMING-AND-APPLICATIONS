import Sidebar from '../Navbar/Sidebar/Sidebar.tsx';
import Topbar from '../Navbar/Topbar/Topbar.tsx';
import StudentMUI from '../Main_UI/StudentMUI.tsx';
import './Student.css';
import { useState } from 'react';

const Student = () => {
    const [activeTab, setActiveTab] = useState<string | null>('dashboard'); // Cho phép null

    return (
        <>
            <Sidebar setActiveTab={setActiveTab} />
            <Topbar />
            <div className="student-container">
                <StudentMUI activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </>
    );
};

export default Student;
