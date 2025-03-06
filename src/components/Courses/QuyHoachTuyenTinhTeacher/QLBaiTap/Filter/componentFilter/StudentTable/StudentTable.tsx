import React from "react";
import { FilePdfOutlined } from "@ant-design/icons";

interface StudentTableProps {
  students: any[];
  fileData: any;
  openModal: (fileUrl: string) => void;
  handleGradeAssignment: (email: string) => void; // Đảm bảo hàm này nhận đúng kiểu
  assignmentKey: string;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, fileData, openModal, handleGradeAssignment, assignmentKey }) => {

  return (
    <table className="bt1-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>MSSV</th>
          <th>Tên</th>
          <th>Lớp</th>
          <th>File Nộp</th>
          <th>Thời gian nộp</th>
          <th>Đã Chấm</th>
          <th>Chấm Điểm</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
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
                    if (fileUrl) openModal(fileUrl);
                  }}
                >
                  <FilePdfOutlined className="pdf-icon" />
                </a>
              ) : (
                "Chưa nộp"
              )}
            </td>
            <td>
              {fileData[student.mssv]
                ? new Date(fileData[student.mssv]?.submissionDate || "").toLocaleDateString("vi-VN")
                : "Chưa có"}
            </td>
            <td>{student[assignmentKey] === -1 ? "Chưa chấm" : student[assignmentKey]}</td>
            <td>
              <button
                className="grade-button"
                onClick={() => handleGradeAssignment(student.email)} // Sử dụng key từ file assignmentKeys
                disabled={!fileData[student.mssv]} // Vô hiệu hóa nút nếu chưa nộp bài
              >
                Chấm điểm
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
