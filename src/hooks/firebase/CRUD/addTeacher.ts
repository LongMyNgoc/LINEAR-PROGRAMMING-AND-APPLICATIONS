import { db } from "../firebase"; // Đảm bảo đường dẫn đúng với cấu trúc dự án
import { doc, setDoc } from "firebase/firestore";

interface Teacher {
  name: string;
  sex: string;
  email: string;
  phone: string;
}

export const addTeacher = async (teacher: Teacher) => {
  try {
    const teacherRef = doc(db, "Teachers", teacher.email); // Đặt tên document bằng email

    await setDoc(teacherRef, teacher); // Ghi dữ liệu vào Firestore với ID là email
    return { success: true, id: teacher.email, error: null };
  } catch (error: any) {
    return { success: false, id: null, error: error.message };
  }
};
