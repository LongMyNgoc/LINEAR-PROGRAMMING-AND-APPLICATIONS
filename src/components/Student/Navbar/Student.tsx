import Sidebar from './Sidebar.tsx';
import Topbar from './Topbar.tsx';
import StudentMUI from '../Main_UI/StudentMUI.tsx';
import './Student.css';
import { useState } from 'react';

const Student = () => {
    const [activeTab, setActiveTab] = useState<string>('dashboard');

    return (
        <>
            <Sidebar setActiveTab={setActiveTab} />
            <Topbar />
            <div className="student-container">
                <StudentMUI activeTab={activeTab} />
            </div>
        </>
    );
};

export default Student;
