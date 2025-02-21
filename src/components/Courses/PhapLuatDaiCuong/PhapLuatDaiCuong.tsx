import './PhapLuatDaiCuong.css';
import PhapLuatDaiCuong from '../../../assets/Courses/PhapLuatDaiCuong.png';

const PhapLuatDaiCuongCourse = () => {
    const progress = 65; // Phần trăm hoàn thành khóa học

    return (
        <div className="course-container">
            <img src={PhapLuatDaiCuong} alt="PhapLuatDaiCuong" className="course-image" />
            <h3 className="course-title">Pháp Luật Đại Cương</h3>
            <button className="view-course-btn">View Course</button>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">{progress}% Completed</p>
        </div>
    );
};

export default PhapLuatDaiCuongCourse;
