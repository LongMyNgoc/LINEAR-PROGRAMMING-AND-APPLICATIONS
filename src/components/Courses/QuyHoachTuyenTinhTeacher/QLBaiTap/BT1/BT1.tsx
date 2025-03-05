// src/components/BT1.tsx
import useStudents from "../../../../../hooks/useStudents.ts"; // Đảm bảo đường dẫn chính xác

import "./BT1.css";

const BT1 = () => {
  const { students, loading, error } = useStudents();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bt1-container">
      <table className="bt1-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>MSSV</th>
            <th>Tên</th>
            <th>Lớp</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BT1;
