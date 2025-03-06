// src/components/AssignmentsTable/AssignmentsTable.tsx
import React from "react";
import "./BT.css";
import useAssignments from "./BT";

const AssignmentsTable: React.FC = () => {
  const { selectedChapter, setSelectedChapter, assignments, SelectedComponent } = useAssignments();

  console.log(selectedChapter);

  return (
    <div className="table-container">
      {SelectedComponent ? (
        <>
          <button className="back-button" onClick={() => setSelectedChapter(null)}>
            Quay lại
          </button>
          <SelectedComponent />
        </>
      ) : (
        <table className="assignments-table">
          <thead>
            <tr>
              <th>Danh sách bài tập</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} onClick={() => setSelectedChapter(assignment.chapter)}>
                <td>{assignment.chapter}</td>
                <td><button>{assignment.quantity}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssignmentsTable;
