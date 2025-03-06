// StudentMUI.tsx
import '../../../styles/course.css';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinhCourse/QuyHoachTuyenTinhCourse.tsx';
import QuyHoachTuyenTinhContent from '../../Courses/QuyHoachTuyenTinh/QuyHoachTuyenTinhContent/QuyHoachTuyenTinhContent.tsx';
import StudentProfile from '../Profile/StudentProfile/StudentProfile.tsx';
import { useStudentMUI } from './StudentMUI.ts';
import { StudentMUIProps } from './StudentMUI.types.ts';

const StudentMUI = ({ activeTab, setActiveTab }: StudentMUIProps) => {
    const { selectedCourse, handleCourseSelection } = useStudentMUI({ activeTab, setActiveTab });

    return (
        <>
            {selectedCourse === null && activeTab === "courses" ? (
                <div className='course'>
                    <QuyHoachTuyenTinhCourse onView={() => handleCourseSelection("QuyHoachTuyenTinh")} />
                </div>
            ) : selectedCourse === "QuyHoachTuyenTinh" ? (
                <QuyHoachTuyenTinhContent />
            ) : selectedCourse === null && activeTab === "profile" ? (
                <StudentProfile />
            ) : null}
        </>
    );
};

export default StudentMUI;
