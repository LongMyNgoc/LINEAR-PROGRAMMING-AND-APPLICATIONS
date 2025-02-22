import './StudentMUI.css';
import { useState, useEffect } from 'react';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinh';
import PhapLuatDaiCuongCourse from '../../Courses/PhapLuatDaiCuong/PhapLuatDaiCuong';
import SinhHoatCongDanCourse from '../../Courses/SinhHoatCongDan/SinhHoatCongDan';
import QuyHoachTuyenTinhContent from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinhContent.tsx';

const StudentMUI = ({ activeTab, setActiveTab }: { activeTab: string | null, setActiveTab: (tab: string | null) => void }) => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    useEffect(() => {
        console.log("activeTab changed:", activeTab);
        if (activeTab === "courses") {
            console.log("Resetting selectedCourse to null");
            setSelectedCourse(null);
        }
    }, [activeTab]);

    const handleCourseSelection = (course: string) => {
        setSelectedCourse(course);
        setActiveTab(null); 
    };

    return (
        <>
            {selectedCourse === null ? (
                <>
                    <div className='course'>
                        <QuyHoachTuyenTinhCourse onView={() => handleCourseSelection("QuyHoachTuyenTinh")} />
                    </div>
                    <div className='course'>
                        <PhapLuatDaiCuongCourse />
                    </div>
                    <div className='course'>
                        <QuyHoachTuyenTinhCourse onView={() => handleCourseSelection("QuyHoachTuyenTinh")} />
                    </div>
                    <div className='course'>
                        <SinhHoatCongDanCourse />
                    </div>
                    <div className='course'>
                        <QuyHoachTuyenTinhCourse onView={() => handleCourseSelection("QuyHoachTuyenTinh")} />
                    </div>
                </>
            ) : selectedCourse === "QuyHoachTuyenTinh" ? (
                <>
                <QuyHoachTuyenTinhContent />
                </>
            ) : null}
        </>
    );
};

export default StudentMUI;
