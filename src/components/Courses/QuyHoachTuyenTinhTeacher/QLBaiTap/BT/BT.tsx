// src/components/AssignmentsTable.tsx
import React from 'react';
import './BT.css'

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
  return (
    <div className="table-container">
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
            <tr key={index}>
              <td>{assignment.chapter}</td>
              <td>{assignment.quantity}</td>
              <td>{assignment.received}</td>
              <td>{assignment.graded}</td>
              <td>{assignment.ungraded}</td>
              <td>{assignment.notSubmitted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentsTable;
