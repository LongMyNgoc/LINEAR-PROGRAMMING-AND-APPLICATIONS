import { useState, useEffect, useRef } from "react";
import { doc, updateDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../../../../hooks/firebase/firebase";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  image?: string;
}

export const useQuizLogic = (userEmail: string | null, questions: Question[]) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timeTN1, setTimeTN1] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchStartTime = async () => {
      if (!userEmail) return;

      try {
        const userDocRef = doc(db, "Students", userEmail);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();

          if (data.timeTN1?.seconds) {
            const savedTime = data.timeTN1.seconds * 1000; // Chuyển đổi về milliseconds
            setTimeTN1(savedTime);
            calculateTimeLeft(savedTime);
          } else {
            if(data.TN1 < 0)
            await saveStartTime(); // Nếu chưa có, lưu lần đầu
          }
        }
      } catch (error) {
        console.error("Lỗi lấy thời gian TN1:", error);
      }
    };

    fetchStartTime();
  }, [userEmail]);

  const calculateTimeLeft = (startTime: number) => {
    const now = Date.now();
    const totalTime = 0.5 * 60 * 1000; // 15 phút
    const elapsedTime = now - startTime;
    const remainingTime = Math.max(0, totalTime - elapsedTime);
    setTimeLeft(remainingTime);
  };

  const saveStartTime = async () => {
    if (!userEmail) return;

    const userDocRef = doc(db, "Students", userEmail);
    const currentTime = Timestamp.now(); // Lấy thời gian hiện tại

    try {
      await updateDoc(userDocRef, { timeTN1: currentTime });
      setTimeTN1(currentTime.seconds * 1000);
      calculateTimeLeft(currentTime.seconds * 1000);
    } catch (error) {
      console.error("Lỗi khi lưu thời gian bắt đầu:", error);
    }
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      return score + (answers[question.id] === question.answer ? 0.5 : 0);
    }, 0);
  };

  const updateScoreInFirestore = async (score: number) => {
    if (userEmail) {
      try {
        const userDocRef = doc(db, "Students", userEmail);
        await updateDoc(userDocRef, { TN1: score });
        console.log("Điểm thi đã được cập nhật");
      } catch (error) {
        console.error("Cập nhật điểm thi không thành công:", error);
      }
    }
  };

  const handleSubmit = () => {
    const score = calculateScore();
    updateScoreInFirestore(score);
    setSubmitted(true);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(0, prevTime - 1000));
      }, 1000);
    } else if (timeLeft <= 0 && !submitted) {
      handleSubmit();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft, submitted]);

  return {
    answers,
    submitted,
    timeLeft,
    timeTN1,
    handleAnswerChange,
    handleSubmit,
    calculateScore,
    setSubmitted
  };
};
