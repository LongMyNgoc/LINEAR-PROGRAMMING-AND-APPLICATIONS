import './QuyHoachTuyenTinh.css';
import QuyHoachTuyenTinh from '../../../assets/Courses/QuyHoachTuyenTinh.png';

const QuyHoachTuyenTinhCourse = () => {
    const progress = 65; // Phần trăm hoàn thành khóa học

    return (
        <div className="course-container">
            <img src={QuyHoachTuyenTinh} alt="QuyHoachTuyenTinh" className="course-image" />
            <h3 className="course-title">Quy Hoạch Tuyến Tính Và Ứng Dụng</h3>
            <button className="view-course-btn">View Course</button>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">{progress}% Completed</p>
        </div>
    );
};

export default QuyHoachTuyenTinhCourse;
