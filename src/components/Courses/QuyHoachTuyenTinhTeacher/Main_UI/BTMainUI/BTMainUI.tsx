// src/components/BTMainUI/BTMainUI.tsx
import useBTMainUI from "./BTMainUI"; // Import logic từ hook useBTMainUI
import AssignmentsTable from "../../QLBaiTap/BT/BT";
import StudentsTable from "../StudentsTable/StudentsTable.tsx";
import "./BTMainUI.css";

const BTMainUI = () => {
  const { selectedTab, setSelectedTab, students, assignments, handleStudentTabClick } = useBTMainUI();

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
          onClick={handleStudentTabClick}
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

      {/* Hiển thị bảng học viên */}
      {selectedTab === "hoc-vien" && <StudentsTable students={students} />}

      {/* Hiển thị bảng bài tập */}
      {selectedTab === "bai-tap" && <AssignmentsTable assignments={assignments} />}
    </div>
  );
};

export default BTMainUI;
