import './StudentMUI.css';
import { useState, useEffect } from 'react';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinhCourse/QuyHoachTuyenTinhCourse.tsx';
import QuyHoachTuyenTinhContent from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinhContent/QuyHoachTuyenTinhContent.tsx';
import StudentProfile from '../Profile/StudentProfile/StudentProfile.tsx';

const StudentMUI = ({ activeTab, setActiveTab }: { activeTab: string | null; setActiveTab: (tab: string | null) => void }) => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    useEffect(() => {
        console.log("activeTab changed:", activeTab);
        if (activeTab === "courses" || activeTab === "profile") {
            console.log("Resetting selectedCourse to null");
            setSelectedCourse(null);
        }
    }, [activeTab]);

    const handleCourseSelection = (course: string) => {
        setSelectedCourse(course);
        setActiveTab(course === "QuyHoachTuyenTinh" ? "quy-hoach-tuyen-tinh" : null); // Cập nhật activeTab dựa trên khóa học
    };

    return (
        <>
            {selectedCourse === null && activeTab === "courses" ? (
                <>
                    <div className='course'>
                        <QuyHoachTuyenTinhCourse onView={() => handleCourseSelection("QuyHoachTuyenTinh")} />
                    </div>
                </>
            ) : selectedCourse === "QuyHoachTuyenTinh" ? (
                <>  
                    <QuyHoachTuyenTinhContent />
                </>
            ) : selectedCourse === null && activeTab === "profile" ? (
                <>
                <StudentProfile />
                </>
            ) : null
            }
        </>
    );
};

export default StudentMUI;
