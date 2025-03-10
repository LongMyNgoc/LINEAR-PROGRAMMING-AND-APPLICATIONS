// src/hooks/useStudents.ts
import { useState, useEffect } from "react";
import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn
import { collection, onSnapshot } from "firebase/firestore"; // Sử dụng onSnapshot thay vì getDocs

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
  TN1: number;
  TN2: number;
  TN3: number;
  TN4: number;
  TN5: number;
}

const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Sử dụng onSnapshot để lắng nghe sự thay đổi trong collection Students
    const unsubscribe = onSnapshot(
      collection(db, "Students"),
      (snapshot) => {
        try {
          const studentList = snapshot.docs.map((doc) => doc.data() as Student);
          setStudents(studentList); // Cập nhật danh sách sinh viên
        } catch (err) {
          setError("Error fetching students data");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.log(err);
        setError("Error fetching students data");
        setLoading(false);
      }
    );

    // Cleanup function để hủy bỏ việc lắng nghe khi component bị unmount hoặc hook thay đổi
    return () => unsubscribe();
  }, []); // Giữ [] để chỉ gọi một lần khi component mount

  return { students, loading, error };
};

export default useStudents;
