import './StudentMUI.css';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinh';
//import PhapLuatDaiCuongCourse from '../../Courses/PhapLuatDaiCuong/PhapLuatDaiCuong';
//import SinhHoatCongDanCourse from '../../Courses/SinhHoatCongDan/SinhHoatCongDan';

const StudentMUI = () => {
    return (
        <>
           <div className='course'>
                <QuyHoachTuyenTinhCourse /> 
                </div>
                <div className='course'>
                <QuyHoachTuyenTinhCourse /> 
                </div>
                <div className='course'>
                <QuyHoachTuyenTinhCourse /> 
                </div>
                <div className='course'>
                <QuyHoachTuyenTinhCourse /> 
                </div>
                <div className='course'>
                <QuyHoachTuyenTinhCourse /> 
                </div>
                
            </>
    );
};

export default StudentMUI;
