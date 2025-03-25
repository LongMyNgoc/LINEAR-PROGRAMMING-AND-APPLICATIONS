import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../hooks/firebase/firebase"; // Đảm bảo đường dẫn đúng với dự án của bạn

const useGradeAssignment = () => {
  const gradeAssignment = async (
    studentEmail: string, // Sử dụng email thay vì mssv
    assignmentKey: string,
    grade: number
  ) => {
    try {
      if (isNaN(grade) || grade < 0 || grade > 10) {
        alert("Vui lòng nhập điểm hợp lệ (0-10).");
        return false;
      }

      const studentRef = doc(db, "Students", studentEmail); // Truy cập document bằng email
      await updateDoc(studentRef, { [assignmentKey]: grade });

      console.log(`Cập nhật điểm ${assignmentKey} cho sinh viên ${studentEmail} thành công: ${grade}`);
      return true;
    } catch (error) {
      console.error("Lỗi khi cập nhật điểm:", error);
      return false;
    }
  };

  return { gradeAssignment };
};

export default useGradeAssignment;
