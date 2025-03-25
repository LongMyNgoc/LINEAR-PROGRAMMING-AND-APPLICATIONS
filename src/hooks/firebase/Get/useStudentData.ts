// src/hooks/useStudentData.ts

import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";  // Import từ firebase.ts

const useStudentData = (email: string | null) => {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      if (email) {
        const userDocRef = doc(db, "Students", email);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setStudent(userDocSnap.data());
        }
      }
    };

    fetchStudentData();
  }, [email]);

  return student;
};

export default useStudentData;
