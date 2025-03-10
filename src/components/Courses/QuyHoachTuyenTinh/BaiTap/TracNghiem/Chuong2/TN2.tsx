import { useState, useEffect } from 'react';
import { questions } from './questions';
import '../../../../../../styles/TN.css';
import { ArrowLeftOutlined } from "@ant-design/icons";
import useStudentByEmail from '../../../../../../hooks/useStudentByEmail';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../hooks/firebase";  // Nhớ import db từ firebase.ts

const TN2 = ({ setSelectedItem }: { setSelectedItem: (value: string | null) => void }) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Lấy email từ localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserEmail(parsedUser.email); // Lưu email để sử dụng
    }
  }, []);

  // Sử dụng hook để lấy thông tin sinh viên từ email
  const student = useStudentByEmail(userEmail || "");

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (answers[question.id] === question.answer) {
        return score + 0.5;
      }
      return score;
    }, 0);
  };

  const updateScoreInFirestore = async (userEmail: string, score: number) => {
    try {
      const userDocRef = doc(db, "Students", userEmail); // Giả sử bạn lưu thông tin sinh viên theo email
      await updateDoc(userDocRef, {
        TN2: score, // Cập nhật điểm thi TN1
      });
      console.log("Điểm thi đã được cập nhật");
    } catch (error) {
      console.error("Cập nhật điểm thi không thành công: ", error);
    }
  };
  
  const handleSubmit = () => {
    const score = calculateScore();
    updateScoreInFirestore(userEmail || "", score);
    setSubmitted(true);
  };
  
  // Nếu chưa có thông tin sinh viên thì hiển thị loading
  if (!student) return <p>Đang tải dữ liệu sinh viên...</p>;

  return (
    <div className="tn1-quiz-container">
      <ArrowLeftOutlined className="back-icon" onClick={() => setSelectedItem(null)} />
      <h1 className="tn1-quiz-title">Bài Thi Trắc Nghiệm Quy Hoạch Tuyến Tính Chương 2</h1>

      {student.TN2 !== -1 ? (
        <div className="tn1-result-container">
          <h2 className="tn1-result-title">Bạn đã hoàn thành bài thi</h2>
          <p className="tn1-result-text">
            Điểm số của bạn: <strong>{student.TN2}</strong> / {10}
          </p>
        </div>
      ) : (
        <form className="tn1-quiz-form">
          {questions.map((question, index) => (
            <div key={question.id} className="tn1-question-container">
              <p className="tn1-question-text">
                <strong>Câu {index + 1}:</strong> {question.question}
              </p>
              {question.image && <img src={question.image} alt="question" className="tn1-question-image" />}
              <div className="tn1-options-container">
                {question.options.map((option, optIndex) => {
                  const isCorrect = option === question.answer;
                  const isUserSelected = answers[question.id] === option;
                  const isIncorrect = isUserSelected && !isCorrect;

                  return (
                    <label
                      key={optIndex}
                      className={`tn1-option-label ${submitted ? (isCorrect ? "correct-answer" : isIncorrect ? "wrong-answer" : "") : ""}`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={isUserSelected}
                        onChange={() => handleAnswerChange(question.id, option)}
                        className="tn1-option-input"
                        disabled={submitted}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleSubmit}
            className="tn1-submit-button"
          >
            Nộp Bài
          </button>
        </form>
      )}

      {submitted && (
        <div className="tn1-result-container">
          <h2 className="tn1-result-title">Kết Quả</h2>
          <p className="tn1-result-text">
            Bạn đã trả lời đúng <strong>{calculateScore() * 2}</strong> / 20 câu hỏi.
          </p>
        </div>
      )}
    </div>
  );
};

export default TN2;
