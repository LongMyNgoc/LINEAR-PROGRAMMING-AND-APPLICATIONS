import React, { useState } from "react";
import "./BT.css";
import BT1 from "../BT1/BT1"; // Import component BT1
import BT2 from "../BT2/BT2"; // Import component BT2
import BT3 from "../BT3/BT3"; // Thêm các component khác nếu có
import BT4 from "../BT4/BT4";
import BT5 from "../BT5/BT5";

type Assignment = {
  chapter: string;
  quantity: number;
  received: number;
  graded: number;
  ungraded: number;
  notSubmitted: number;
};

interface AssignmentsTableProps {
  assignments: Assignment[];
}

const AssignmentsTable: React.FC<AssignmentsTableProps> = ({ assignments }) => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  // Ánh xạ chương -> Component tương ứng
  const chapterComponents: Record<string, React.FC> = {
    "Chương 1": BT1,
    "Chương 2": BT2,
    "Chương 3": BT3,
    "Chương 4": BT4,
    "Chương 5": BT5,
  };

  const SelectedComponent = selectedChapter ? chapterComponents[selectedChapter] : null;

  return (
    <div className="table-container">
      {SelectedComponent ? (
        <>
          <button className="back-button" onClick={() => setSelectedChapter(null)}>
            Quay lại
          </button>
          <SelectedComponent /> {/* Hiển thị component tương ứng với chương */}
        </>
      ) : (
        <table className="assignments-table">
          <thead>
            <tr>
              <th>Danh sách bài tập</th>
              <th>Số lượng</th>
              <th>Đã nhận</th>
              <th>Đã chấm</th>
              <th>Chưa chấm</th>
              <th>Chưa nộp</th>
            </tr>
          </thead>
          <tbody>
          {assignments.map((assignment, index) => (
    <tr key={index} onClick={() => setSelectedChapter(assignment.chapter)}>
      <td>{assignment.chapter}</td>
      <td><button>{assignment.quantity}</button></td>
      <td><button>{assignment.received}</button></td>
      <td><button>{assignment.graded}</button></td>
      <td><button>{assignment.ungraded}</button></td>
      <td><button>{assignment.notSubmitted}</button></td>
    </tr>
  ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssignmentsTable;
