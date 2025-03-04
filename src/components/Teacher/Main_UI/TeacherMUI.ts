// useStudentMUI.ts
import { useState, useEffect } from 'react';
import { TeacherMUIProps } from './TeacherMUI.types.ts';

export const useTeacherMUI = ({ activeTab, setActiveTab }: TeacherMUIProps) => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    useEffect(() => {
        console.log("activeTab changed:", activeTab);
        if (activeTab === "classes" || activeTab === "profile") {
            console.log("Resetting selectedCourse to null");
            setSelectedCourse(null);
        }
    }, [activeTab]);

    const handleCourseSelection = (course: string) => {
        setSelectedCourse(course);
        setActiveTab(course === "QuyHoachTuyenTinh" ? "quy-hoach-tuyen-tinh" : null);
    };

    return { selectedCourse, handleCourseSelection };
};
