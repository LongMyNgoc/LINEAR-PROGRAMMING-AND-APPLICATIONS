import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc dự án
import { collection, addDoc } from "firebase/firestore";

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
    const studentsCollection = collection(db, "Students");
    const newStudent = {
      ...student,
      BT1: -1,
      BT2: -1,
      BT3: -1,
      BT4: -1,
      BT5: -1,
    };

    const docRef = await addDoc(studentsCollection, newStudent);
    return { success: true, id: docRef.id, error: null };
  } catch (error: any) {
    return { success: false, id: null, error: error.message };
  }
};
