// src/components/StudentsTable.tsx
import React from "react";
import './StudentTable.css'

interface Student {
  mssv: string;
  name: string;
  class: string;
  sex: string;
  email: string;
}

interface StudentsTableProps {
  students: Student[];
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
  return (
    <div className="students-table-container">
      <table className="students-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Giới Tính</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.sex}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
