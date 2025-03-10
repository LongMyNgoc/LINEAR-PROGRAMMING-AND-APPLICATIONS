// src/hooks/useStudentByEmail.ts
import { useState, useEffect } from "react";
import { db } from "./firebase"; // Đảm bảo đường dẫn đúng với cấu trúc của bạn
import { doc, getDoc } from "firebase/firestore"; // Sử dụng getDoc để lấy document theo ID

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

const useStudentByEmail = (email: string) => {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    if (!email) {
      setStudent(null);
      return;
    }

    // Lấy document theo email (là ID của document)
    const studentDocRef = doc(db, "Students", email);

    // Sử dụng getDoc để lấy dữ liệu document
    const fetchStudent = async () => {
      try {
        const docSnap = await getDoc(studentDocRef);
        if (docSnap.exists()) {
          setStudent(docSnap.data() as Student); // Cập nhật thông tin sinh viên
        } else {
          setStudent(null); // Không tìm thấy sinh viên với email đó
        }
      } catch (err) {
        console.log(err);
        setStudent(null); // Trong trường hợp có lỗi, không tìm thấy sinh viên
      }
    };

    fetchStudent();
  }, [email]); // Chạy lại khi email thay đổi

  return student;
};

export default useStudentByEmail;
