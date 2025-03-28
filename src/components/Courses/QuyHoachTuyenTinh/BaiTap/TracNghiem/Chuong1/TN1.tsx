import { questions } from "./questions";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../../../../styles/TN.css";
import { useTN1Quiz } from "./useTN1Quiz";

const TN1 = ({ setSelectedItem }: { setSelectedItem: (value: string | null) => void }) => {
  const storedUser = localStorage.getItem("user");
  const userEmail = storedUser ? JSON.parse(storedUser).email : null;

  const { student, answers, handleAnswerChange, calculateScore, handleSubmit, submitted, timeLeft } = useTN1Quiz(userEmail);

  if (!student) return <p>Đang tải dữ liệu sinh viên...</p>;

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="tn1-quiz-container">
      <ArrowLeftOutlined className="back-icon" onClick={() => setSelectedItem(null)} />
      <h1 className="tn1-quiz-title">Bài Thi Trắc Nghiệm Quy Hoạch Tuyến Tính Chương 1</h1>

      {student.TN1 === -1 &&
      <div className="tn1-time-container">
        <p>Hết thời gian làm bài mà chưa nộp hệ thống sẽ tính 0 điểm</p>
        <p className="tn1-countdown">⏳ Thời gian còn lại: <strong>{formatTime(timeLeft)}</strong></p>
      </div>
}

      {student.TN1 !== -1 ? (
        <div className="tn1-result-container">
          <h2 className="tn1-result-title">Bạn đã hoàn thành bài thi</h2>
          <p className="tn1-result-text">
            Điểm số của bạn: <strong>{student.TN1}</strong> / 10
          </p>
        </div>
      ) : (
        <form className="tn1-quiz-form">
          {questions.map(({ id, question, options, answer, image }, index) => (
            <div key={id} className="tn1-question-container">
              <p className="tn1-question-text">
                <strong>Câu {index + 1}:</strong> {question}
              </p>
              {image && <img src={image} alt="question" className="tn1-question-image" />}
              <div className="tn1-options-container">
                {options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className={`tn1-option-label ${submitted ? (option === answer ? "correct-answer" : answers[id] === option ? "wrong-answer" : "") : ""}`}
                  >
                    <input
                      type="radio"
                      name={`question-${id}`}
                      value={option}
                      checked={answers[id] === option}
                      onChange={() => handleAnswerChange(id, option)}
                      className="tn1-option-input"
                      disabled={submitted}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="button" onClick={handleSubmit} className="tn1-submit-button" disabled={submitted}>
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

export default TN1;
