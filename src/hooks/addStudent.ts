import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc dự án
import { doc, setDoc } from "firebase/firestore";

interface Student {
  mssv: string;
  name: string;
  class: string;
  sex: string;
  email: string;
  phone: string;
}

export const addStudent = async (student: Student) => {
  try {
    const studentRef = doc(db, "Students", student.email); // Đặt tên document bằng email
    const newStudent = {
      ...student,
      BT1: -1,
      BT2: -1,
      BT3: -1,
      BT4: -1,
      BT5: -1,
      TN1: -1,
      TN2: -1,
      TN3: -1,
      TN4: -1,
      TN5: -1
    };

    await setDoc(studentRef, newStudent); // Dùng setDoc thay vì addDoc
    return { success: true, id: student.email, error: null };
  } catch (error: any) {
    return { success: false, id: null, error: error.message };
  }
};
