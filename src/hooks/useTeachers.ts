// src/hooks/useTeachers.ts
import { useState, useEffect } from "react";
import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn
import { collection, onSnapshot } from "firebase/firestore";

interface Teacher {
  name: string;
  sex: string; 
  email: string;
  phone: string;
}

const useTeachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "Teachers"),
      (snapshot) => {
        try {
          const teacherList = snapshot.docs.map((doc) => doc.data() as Teacher);
          setTeachers(teacherList); // Cập nhật danh sách giáo viên
          setLoading(false); // Đặt loading là false khi đã có dữ liệu
        } catch (err) {
          setError("Error fetching teachers data");
          setLoading(false); // Đặt loading là false khi có lỗi
        }
      },
      (err) => {
        console.log(err);
        setError("Error fetching teachers data");
        setLoading(false); // Đặt loading là false khi có lỗi
      }
    );

    // Trả về một hàm unsubscribe khi component bị unmount để ngừng lắng nghe
    return () => unsubscribe();
  }, []);

  return { teachers, loading, error };
};

export default useTeachers;
