import { useState, useEffect } from "react";
import { questions } from "./questions";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../hooks/firebase/firebase";
import useStudentByEmail from "../../../../../../hooks/firebase/Get/useStudentByEmail";

export const useTN1Quiz = (userEmail: string | null) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(900); // 15 phút (900 giây)
  const student = useStudentByEmail(userEmail || "");

  useEffect(() => {
    if (!userEmail) return;
    
    const storedStartTime = localStorage.getItem("tn1_start_time");
    let startTime = storedStartTime ? new Date(storedStartTime) : new Date();
    if (!storedStartTime) localStorage.setItem("tn1_start_time", startTime.toISOString());
    
    const endTime = new Date(startTime.getTime() + 900 * 1000);
    
    const updateTimer = () => {
      const remainingTime = Math.max(Math.floor((endTime.getTime() - Date.now()) / 1000), 0);
      setTimeLeft(remainingTime);
      if (remainingTime === 0) {
        clearInterval(timer);
        handleSubmit();
      }
    };
    
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [userEmail]);

  const handleAnswerChange = (questionId: number, answer: string) => 
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

  const calculateScore = () => 
    questions.reduce((score, q) => (answers[q.id] === q.answer ? score + 0.5 : score), 0);

  const handleSubmit = async () => {
    if (!userEmail || submitted) return;
    setSubmitted(true);
    try {
      await updateDoc(doc(db, "Students", userEmail), { TN1: calculateScore() });
    } catch (error) {
      console.error("Cập nhật điểm thi không thành công: ", error);
    }
  };

  return { student, answers, handleAnswerChange, calculateScore, handleSubmit, submitted, timeLeft };
};
