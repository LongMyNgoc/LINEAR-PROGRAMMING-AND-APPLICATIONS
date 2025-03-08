import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn

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
}

/**
 * Cập nhật thông tin sinh viên
 * @param mssv - Mã sinh viên
 * @param updatedStudent - Thông tin sinh viên mới
 * @returns Kết quả thực hiện cập nhật (thành công hoặc thất bại)
 */
export const editStudent = async (mssv: string, updatedStudent: Student) => {
  try {
    const studentDocRef = doc(db, "Students", mssv); // Truyền `mssv` để tìm tài liệu sinh viên
    // Cập nhật thông tin sinh viên trong Firestore
    await updateDoc(studentDocRef, { ...updatedStudent } as { [key: string]: any });
    return { success: true, message: "Student updated successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
