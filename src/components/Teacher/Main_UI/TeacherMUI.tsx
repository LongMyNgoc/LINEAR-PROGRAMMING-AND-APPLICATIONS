// StudentMUI.tsx
import '../../../styles/course.css';
import QuyHoachTuyenTinhCourse from '../../Courses/QuyHoachTuyenTinhTeacher/QuyHoachTuyenTinhCourse/QuyHoachTuyenTinhCourse.tsx';
import TeacherProfile from '../Profile/TeacherProfile/TeacherProfile.tsx';
import { useTeacherMUI } from './TeacherMUI.ts';
import { TeacherMUIProps } from './TeacherMUI.types.ts';
import BTMainUI from '../../Courses/QuyHoachTuyenTinhTeacher/Main_UI/BTMainUI/BTMainUI.tsx';

const TeacherMUI = ({ activeTab, setActiveTab }: TeacherMUIProps) => {
    const { selectedCourse, handleCourseSelection } = useTeacherMUI({ activeTab, setActiveTab });

    return (
        <>
            {selectedCourse === null && activeTab === "classes" ? (
                <div className='course'>
                    <QuyHoachTuyenTinhCourse onView={() => handleCourseSelection("QuyHoachTuyenTinh")} />
                </div>
            ) : selectedCourse === null && activeTab === "profile" ? (
                <TeacherProfile />
            ) : selectedCourse === "QuyHoachTuyenTinh" ? (
                <BTMainUI />
            ) : null}
        </>
    );
};

export default TeacherMUI;
