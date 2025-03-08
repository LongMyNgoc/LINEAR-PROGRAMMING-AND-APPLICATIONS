import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc dự án
import { doc, deleteDoc } from "firebase/firestore";

export const deleteStudent = async (studentId: string) => {
  try {
    const studentDocRef = doc(db, "Students", studentId);
    await deleteDoc(studentDocRef);
    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
