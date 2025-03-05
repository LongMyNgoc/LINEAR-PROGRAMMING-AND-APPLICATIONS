// src/hooks/useBTMainUI.ts
import { useState } from "react";
import useStudents from "../../../../../hooks/useStudents"; // Import hook useStudents để lấy dữ liệu sinh viên

const useBTMainUI = () => {
  const [selectedTab, setSelectedTab] = useState("hoc-vien");
  const [assignments, setAssignments] = useState<any[]>([
    { chapter: "Chương 1", quantity: 0, received: 8, graded: 6, ungraded: 2, notSubmitted: 2 },
    { chapter: "Chương 2", quantity: 0, received: 14, graded: 12, ungraded: 2, notSubmitted: 1 },
    { chapter: "Chương 3", quantity: 0, received: 10, graded: 9, ungraded: 1, notSubmitted: 2 },
    { chapter: "Chương 4", quantity: 0, received: 6, graded: 5, ungraded: 1, notSubmitted: 2 },
    { chapter: "Chương 5", quantity: 0, received: 18, graded: 16, ungraded: 2, notSubmitted: 2 }
  ]);

  // Sử dụng hook useStudents để lấy dữ liệu sinh viên
  const { students } = useStudents(); // Dữ liệu sinh viên được cung cấp từ useStudents

  // Xử lý khi chọn tab "Học viên"
  const handleStudentTabClick = () => {
    setSelectedTab("hoc-vien");
    // Cập nhật số lượng bài tập dựa theo số sinh viên
    const updatedAssignments = assignments.map((assignment) => ({
      ...assignment,
      quantity: students.length
    }));
    setAssignments(updatedAssignments);
  };

  return {
    selectedTab,
    setSelectedTab,
    students,
    assignments,
    handleStudentTabClick
  };
};

export default useBTMainUI;
