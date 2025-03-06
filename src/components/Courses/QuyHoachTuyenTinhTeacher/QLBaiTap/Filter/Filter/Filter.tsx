import React, { useState } from "react";
import SearchBar from "../componentFilter/SearchBar/SearchBar"; // Import component tìm kiếm
import StatusFilter from "../componentFilter/StatusFilter/StatusFilter"; // Import component lọc theo tình trạng
import StudentTable from "../componentFilter/StudentTable/StudentTable"; // Import component bảng dữ liệu sinh viên
import useGradeAssignment from "../grading/grading"; // Import hàm chấm điểm
import './Filter.css'

interface FilterProps {
  students: any[];
  fileData: any;
  filter: string;
  onChange: (newFilter: string) => void;
  openModal: (fileUrl: string) => void;
}

const Filter: React.FC<FilterProps> = ({ students, fileData, filter, onChange, openModal }) => {
  const [studentList, setStudentList] = useState(students);
  const [searchTerm, setSearchTerm] = useState("");
  const { gradeAssignment } = useGradeAssignment();

  const handleGradeAssignment = async (email: string, assignmentKey: "BT1") => {
    const newGrade = prompt(`Nhập điểm cho sinh viên (0-10):`);
    if (newGrade !== null) {
      const gradeNumber = Number(newGrade);
      const success = await gradeAssignment(email, assignmentKey, gradeNumber);

      if (success) {
        setStudentList((prevStudents) =>
          prevStudents.map((student) =>
            student.email === email ? { ...student, [assignmentKey]: gradeNumber } : student
          )
        );
      }
    }
  };

  const filteredStudents = studentList.filter((student) => {
    const hasFile = fileData[student.mssv];
    const isGraded = student.BT1 !== -1;

    if (filter === "submitted" && (!hasFile || !hasFile.url)) return false;
    if (filter === "notSubmitted" && hasFile?.url) return false;
    if (filter === "graded" && !isGraded) return false;
    if (filter === "notGraded" && isGraded) return false;

    const searchLower = searchTerm.toLowerCase();
    if (
      searchTerm &&
      !student.mssv.toLowerCase().includes(searchLower) &&
      !student.name.toLowerCase().includes(searchLower) &&
      !student.class.toLowerCase().includes(searchLower)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="filter-container">
      <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <div>
      <StatusFilter filter={filter} onFilterChange={onChange} />
      </div>
      <StudentTable
        students={filteredStudents}
        fileData={fileData}
        openModal={openModal}
        handleGradeAssignment={handleGradeAssignment}
      />
    </div>
  );
};

export default Filter;
