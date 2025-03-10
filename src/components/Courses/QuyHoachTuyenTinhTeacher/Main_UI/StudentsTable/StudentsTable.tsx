// src/components/StudentsTable.tsx
import React, { useState } from "react";
import './StudentTable.css';
import Search from './Search/Search'; // Import component Search

interface Student {
  mssv: string;
  name: string;
  class: string;
  sex: string;
  email: string;
  phone: string;
  BT1: number;
  BT2: number;
  BT3: number;
  BT4: number;
  BT5: number;
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
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Hàm để kiểm tra và hiển thị điểm hoặc "Chưa làm"
  const renderGrade = (grade: number) => {
    return grade === -1 ? "Chưa làm" : grade;
  };

  // Hàm lọc sinh viên theo tìm kiếm
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Hàm lọc danh sách sinh viên theo tên hoặc mã sinh viên
  const filteredStudents = students.filter((student) =>
    student.mssv.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.sex.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="students-table-container">
    <Search onSearch={handleSearch} /> {/* Sử dụng component Search */}

      <table className="students-table">
        <thead>
          <tr>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Giới Tính</th>
            <th>Điểm BT1</th>
            <th>Điểm BT2</th>
            <th>Điểm BT3</th>
            <th>Điểm BT4</th>
            <th>Điểm BT5</th>
            <th>Điểm TN1</th>
            <th>Điểm TN2</th>
            <th>Điểm TN3</th>
            <th>Điểm TN4</th>
            <th>Điểm TN5</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.mssv}>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.sex}</td>
              <td>{renderGrade(student.BT1)}</td>
              <td>{renderGrade(student.BT2)}</td>
              <td>{renderGrade(student.BT3)}</td>
              <td>{renderGrade(student.BT4)}</td>
              <td>{renderGrade(student.BT5)}</td>
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
    </>
  );
};

export default StudentsTable;
