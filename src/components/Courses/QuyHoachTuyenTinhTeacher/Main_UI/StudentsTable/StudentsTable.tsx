// src/components/StudentsTable.tsx
import React from "react";
import './StudentTable.css'

interface Student {
  mssv: string;
  name: string;
  class: string;
  sex: string;
  email: string;
  phone: string;
  BT1: number; // Điểm bài tập 1
  BT2: number; // Điểm bài tập 2
  BT3: number; // Điểm bài tập 3
  BT4: number; // Điểm bài tập 4
  BT5: number; // Điểm bài tập 5
  TN1: number;
  TN2: number;
  TN3: number;
  TN4: number;
  TN5: number;
}

interface StudentsTableProps {
  students: Student[];
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
  // Hàm để kiểm tra và hiển thị điểm hoặc "Chưa làm"
  const renderGrade = (grade: number) => {
    return grade === -1 ? "Chưa làm" : grade;
  };

  return (
    <div className="students-table-container">
      <table className="students-table">
        <thead>
          <tr>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Giới Tính</th>
            <th>Điểm BT1</th> {/* Thêm cột cho điểm BT1 */}
            <th>Điểm BT2</th> {/* Thêm cột cho điểm BT2 */}
            <th>Điểm BT3</th> {/* Thêm cột cho điểm BT3 */}
            <th>Điểm BT4</th> {/* Thêm cột cho điểm BT4 */}
            <th>Điểm BT5</th> {/* Thêm cột cho điểm BT5 */}
            <th>Điểm TN1</th>
            <th>Điểm TN2</th>
            <th>Điểm TN3</th>
            <th>Điểm TN4</th>
            <th>Điểm TN5</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.mssv}>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.sex}</td>
              <td>{renderGrade(student.BT1)}</td> {/* Hiển thị điểm BT1 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT2)}</td> {/* Hiển thị điểm BT2 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT3)}</td> {/* Hiển thị điểm BT3 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT4)}</td> {/* Hiển thị điểm BT4 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT5)}</td> {/* Hiển thị điểm BT5 hoặc "Chưa làm" */}
              <td>{renderGrade(student.TN1)}</td>
              <td>{renderGrade(student.TN2)}</td>
              <td>{renderGrade(student.TN3)}</td>
              <td>{renderGrade(student.TN4)}</td>
              <td>{renderGrade(student.TN5)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
