import './SinhHoatCongDan.css';
import SinhHoatCongDan from '../../../assets/Courses/SinhHoatCongDan.png';

const SinhHoatCongDanCourse = () => {
    const progress = 65; // Phần trăm hoàn thành khóa học

    return (
        <div className="course-container">
            <img src={SinhHoatCongDan} alt="SinhHoatCongDan" className="course-image" />
            <h3 className="course-title">Sinh Hoạt Công Dân</h3>
            <button className="view-course-btn">View Course</button>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">{progress}% Completed</p>
        </div>
    );
};

export default SinhHoatCongDanCourse;
