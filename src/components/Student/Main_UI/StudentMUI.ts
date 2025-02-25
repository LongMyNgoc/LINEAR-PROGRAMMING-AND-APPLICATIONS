// useStudentMUI.ts
import { useState, useEffect } from 'react';
import { StudentMUIProps } from './StudentMUI.types.ts';

export const useStudentMUI = ({ activeTab, setActiveTab }: StudentMUIProps) => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    useEffect(() => {
        console.log("activeTab changed:", activeTab);
        if (activeTab === "courses" || activeTab === "profile") {
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
