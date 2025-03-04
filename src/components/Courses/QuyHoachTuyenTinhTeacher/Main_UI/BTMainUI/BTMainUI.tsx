// src/components/BTMainUI.tsx
import { useState, useEffect } from "react";
import { db } from "../../../../../hooks/firebase"; // Import db từ firebase.ts
import { collection, getDocs } from "firebase/firestore";
import AssignmentsTable from "../../QLBaiTap/BT/BT";
import StudentsTable from "../StudentsTable/StudentsTable.tsx"; // Import component StudentsTable
import "./BTMainUI.css";

const BTMainUI = () => {
  const [selectedTab, setSelectedTab] = useState("hoc-vien"); // Mặc định chọn "Học viên"
  const [students, setStudents] = useState<any[]>([]); // Dữ liệu sinh viên từ Firestore
  const [assignments, setAssignments] = useState<any[]>([
    { chapter: "Chương 1", quantity: 10, received: 8, graded: 6, ungraded: 2, notSubmitted: 2 },
    { chapter: "Chương 2", quantity: 15, received: 14, graded: 12, ungraded: 2, notSubmitted: 1 },
    { chapter: "Chương 3", quantity: 12, received: 10, graded: 9, ungraded: 1, notSubmitted: 2 },
    { chapter: "Chương 4", quantity: 8, received: 6, graded: 5, ungraded: 1, notSubmitted: 2 },
    { chapter: "Chương 5", quantity: 20, received: 18, graded: 16, ungraded: 2, notSubmitted: 2 }
  ]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = collection(db, "Students");
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map(doc => doc.data());
      setStudents(studentList);
    };

    fetchStudents();
  }, []); // Chỉ lấy dữ liệu khi component load lần đầu

  const handleStudentTabClick = () => {
    setSelectedTab("hoc-vien");
    // Cập nhật lại số lượng bài tập tùy theo số sinh viên
    const updatedAssignments = assignments.map((assignment) => ({
      ...assignment,
      quantity: students.length // Cập nhật số lượng bài tập
    }));
    setAssignments(updatedAssignments);
  };

  return (
    <div className="main-container">
      {/* Tiêu đề */}
      <div className="title-container">
        <h1 className="title">Khóa học Quy hoạch tuyến tính và ứng dụng</h1>
      </div>

      {/* Thanh điều hướng */}
      <div className="nav-bar">
        <div
          className={`nav-item ${selectedTab === "hoc-vien" ? "active" : ""}`}
          onClick={handleStudentTabClick} // Khi chọn "Học viên"
        >
          Học viên
        </div>
        <div
          className={`nav-item ${selectedTab === "bai-tap" ? "active" : ""}`}
          onClick={() => setSelectedTab("bai-tap")}
        >
          Bài tập
        </div>
      </div>

      {/* Hiển thị bảng khi chọn "Học viên" */}
      {selectedTab === "hoc-vien" && <StudentsTable students={students} />}

      {/* Hiển thị bảng khi chọn "Bài tập" */}
      {selectedTab === "bai-tap" && <AssignmentsTable assignments={assignments} />}
    </div>
  );
};

export default BTMainUI;
