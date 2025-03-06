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
            <th>STT</th>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Giới Tính</th>
            <th>Email</th>
            <th>Điểm BT1</th> {/* Thêm cột cho điểm BT1 */}
            <th>Điểm BT2</th> {/* Thêm cột cho điểm BT2 */}
            <th>Điểm BT3</th> {/* Thêm cột cho điểm BT3 */}
            <th>Điểm BT4</th> {/* Thêm cột cho điểm BT4 */}
            <th>Điểm BT5</th> {/* Thêm cột cho điểm BT5 */}
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
              <td>{renderGrade(student.BT1)}</td> {/* Hiển thị điểm BT1 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT2)}</td> {/* Hiển thị điểm BT2 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT3)}</td> {/* Hiển thị điểm BT3 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT4)}</td> {/* Hiển thị điểm BT4 hoặc "Chưa làm" */}
              <td>{renderGrade(student.BT5)}</td> {/* Hiển thị điểm BT5 hoặc "Chưa làm" */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
