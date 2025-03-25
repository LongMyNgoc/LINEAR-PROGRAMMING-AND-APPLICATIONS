import { db } from "../firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn
import { doc, updateDoc } from "firebase/firestore";

interface Teacher {
  name: string;
  sex: string;
  email: string;
  phone: string;
}

const useEditTeacher = () => {
  // Hàm edit teacher
  const editTeacher = async (teacherId: string, updatedTeacher: Teacher) => {
    try {
      const teacherDocRef = doc(db, "Teachers", teacherId); // Tìm tài liệu giáo viên theo ID
      await updateDoc(teacherDocRef, { ...updatedTeacher } as { [key: string]: any });
      return { success: true, message: "Teacher updated successfully" };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  return { editTeacher };
};

export default useEditTeacher;
