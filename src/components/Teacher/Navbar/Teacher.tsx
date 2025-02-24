// StudentNavbar.tsx
import Sidebar from './Sidebar.tsx'
import Topbar from './Topbar.tsx';
import TeacherMUI from '../Main_UI/TeacherMUI.tsx';
import './Teacher.css';
import { useState } from 'react';

const Teacher = () => {
const [activeTab, setActiveTab] = useState<string | null>('dashboard'); // Cho phép null

    return (
        <>
            <Sidebar setActiveTab={setActiveTab}/>
            <Topbar />
            <div className="teacher-container">
                <TeacherMUI activeTab={activeTab}/>
            </div>
        </>
    );
};

export default Teacher;
