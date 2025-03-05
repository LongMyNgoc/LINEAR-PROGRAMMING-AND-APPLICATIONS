import React from 'react';
import { FilePdfOutlined } from "@ant-design/icons";
import './Filter.css'

interface FilterProps {
  students: any[];
  fileData: any;
  filter: string;
  onChange: (newFilter: string) => void;
  openModal: (fileUrl: string) => void; // Nhận hàm openModal từ BT1.tsx
}

const Filter: React.FC<FilterProps> = ({ students, fileData, filter, onChange, openModal }) => {
  const filteredStudents = students.filter((student) => {
    const hasFile = fileData[student.mssv];
    if (filter === "submitted") {
      return hasFile && hasFile.url; // Đã nộp
    } else if (filter === "notSubmitted") {
      return !hasFile || !hasFile.url; // Chưa nộp
    }
    return true; // Tất cả
  });

  return (
    <div className="filter-container">
      <label htmlFor="filter">Lọc theo tình trạng:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">Tất cả</option>
        <option value="submitted">Đã nộp</option>
        <option value="notSubmitted">Chưa nộp</option>
      </select>

      <table className="bt1-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>File Nộp</th>
            <th>Thời gian nộp</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>
                {fileData[student.mssv] ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const fileUrl = fileData[student.mssv]?.url;
                      if (fileUrl) openModal(fileUrl); // Gọi hàm openModal khi click vào file
                    }}
                  >
                    <FilePdfOutlined className="pdf-icon" />
                  </a>
                ) : (
                  "Chưa nộp"
                )}
              </td>
              <td>
                {fileData[student.mssv] ? (
                  new Date(fileData[student.mssv]?.submissionDate || "").toLocaleDateString()
                ) : (
                  "Chưa có"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
