// src/hooks/useStudents.ts
import { useState, useEffect } from "react";
import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn
import { collection, getDocs } from "firebase/firestore";

interface Teacher {
  name: string;
  sex: string; 
  email: string;
  phone: string;
}

const useTeachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersCollection = collection(db, "Teachers");
        const teacherSnapshot = await getDocs(teachersCollection);
        const teacherList = teacherSnapshot.docs.map((doc) => doc.data() as Teacher);
        setTeachers(teacherList);
      } catch (err) {
        alert("Error fetching students data");
      }
    };

    fetchTeachers();
  }, []);

  return { teachers };
};

export default useTeachers;
