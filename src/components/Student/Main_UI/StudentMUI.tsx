import './StudentMUI.css';
import { useState } from 'react';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinh';
import PhapLuatDaiCuongCourse from '../../Courses/PhapLuatDaiCuong/PhapLuatDaiCuong';
import SinhHoatCongDanCourse from '../../Courses/SinhHoatCongDan/SinhHoatCongDan';
import QuyHoachTuyenTinhContent from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinhContent';

const StudentMUI = () => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    return (
        <>
        {selectedCourse === "QuyHoachTuyenTinh" ? (
            <QuyHoachTuyenTinhContent />
        ) : (
            <>
           <div className='course'>
           <QuyHoachTuyenTinhCourse onView={() => setSelectedCourse("QuyHoachTuyenTinh")} />
                </div>
                <div className='course'>
                <PhapLuatDaiCuongCourse />
                </div>
                <div className='course'>
                <QuyHoachTuyenTinhCourse onView={() => setSelectedCourse("QuyHoachTuyenTinh")} />
                </div>
                <div className='course'>
                <SinhHoatCongDanCourse />
                </div>
                <div className='course'>
                <QuyHoachTuyenTinhCourse onView={() => setSelectedCourse("QuyHoachTuyenTinh")} />
                </div>
                </>
                )}
            </>
    );
};

export default StudentMUI;
