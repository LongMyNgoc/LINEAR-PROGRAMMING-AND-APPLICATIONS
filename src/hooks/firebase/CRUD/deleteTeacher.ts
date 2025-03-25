import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteTeacher = async (teacherId: string) => {
  try {
    const teacherDocRef = doc(db, "Teachers", teacherId);
    await deleteDoc(teacherDocRef);
    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
