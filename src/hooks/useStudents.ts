// src/hooks/useStudents.ts
import { useState, useEffect } from "react";
import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn
import { collection, getDocs } from "firebase/firestore";

interface Student {
  mssv: string;
  name: string;
  class: string;
  sex: string; 
  email: string;
}

const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsCollection = collection(db, "Students");
        const studentSnapshot = await getDocs(studentsCollection);
        const studentList = studentSnapshot.docs.map((doc) => doc.data() as Student);
        setStudents(studentList);
      } catch (err) {
        setError("Error fetching students data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return { students, loading, error };
};

export default useStudents;
