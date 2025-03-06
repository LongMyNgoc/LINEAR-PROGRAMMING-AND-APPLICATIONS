// src/components/BTMainUI/BTMainUI.tsx
import useBTMainUI from "./BTMainUI";
import AssignmentsTable from "../../QLBaiTap/BT/BT.tsx";
import StudentsTable from "../StudentsTable/StudentsTable.tsx";
import "./BTMainUI.css";

const BTMainUI = () => {
  const { selectedTab, setSelectedTab, students, handleStudentTabClick } = useBTMainUI();

  return (
    <div className="main-container">
      <div className="title-container">
        <h1 className="title">Khóa học Quy hoạch tuyến tính và ứng dụng</h1>
      </div>

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

      {selectedTab === "hoc-vien" && <StudentsTable students={students} />}
      {selectedTab === "bai-tap" && <AssignmentsTable />}
    </div>
  );
};  

export default BTMainUI;
