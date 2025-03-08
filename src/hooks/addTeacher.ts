import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc dự án
import { collection, addDoc } from "firebase/firestore";

interface Teacher {
  name: string;
  sex: string;
  email: string;
  phone: string;
}

export const addTeacher = async (teacher: Teacher) => {
  try {
    const teachersCollection = collection(db, "Teachers");

    const docRef = await addDoc(teachersCollection, teacher);
    return { success: true, id: docRef.id, error: null };
  } catch (error: any) {
    return { success: false, id: null, error: error.message };
  }
};
