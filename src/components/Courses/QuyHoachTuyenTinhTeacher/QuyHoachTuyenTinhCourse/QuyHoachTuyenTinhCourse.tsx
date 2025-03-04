import './QuyHoachTuyenTinhCourse.css';
import QuyHoachTuyenTinh from '../../../../assets/Courses/QuyHoachTuyenTinh.png';

const QuyHoachTuyenTinhCourse = ({ onView }: { onView: () => void }) => {

    return (
        <div className="course-container">
            <img src={QuyHoachTuyenTinh} alt="QuyHoachTuyenTinh" className="course-image" />
            <h3 className="course-title">Quy Hoạch Tuyến Tính Và Ứng Dụng</h3>
            <button className="view-course-btn" onClick={onView}>
                View Class
            </button>
        </div>
    );
};

export default QuyHoachTuyenTinhCourse;
