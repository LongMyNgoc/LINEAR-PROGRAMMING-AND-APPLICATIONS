import './StudentMUI.css';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinh';
import PhapLuatDaiCuongCourse from '../../Courses/PhapLuatDaiCuong/PhapLuatDaiCuong';
import SinhHoatCongDanCourse from '../../Courses/SinhHoatCongDan/SinhHoatCongDan';

const StudentMUI = () => {
    return (
        <div>
            <div className="course">
                <QuyHoachTuyenTinhCourse /> 
            </div>
            <div className="course">
                <PhapLuatDaiCuongCourse />
            </div>
            <div className="course">
                <SinhHoatCongDanCourse />
            </div>
        </div>
    );
};

export default StudentMUI;  
