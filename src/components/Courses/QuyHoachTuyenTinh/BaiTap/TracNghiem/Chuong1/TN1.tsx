import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons"; // Import icon PDF
import "./TN1.css";

interface Question {
    id: number;
    type: "multiple-choice" | "fill-in-the-blank";
    question: string;
    options?: string[]; // Chỉ có nếu là trắc nghiệm A, B, C, D
    correctAnswer: string;
}

const questions: Question[] = [
    {
        id: 1,
        type: "multiple-choice",
        question: "Đâu là ngôn ngữ lập trình phổ biến nhất?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: "JavaScript",
    },
    {
        id: 2,
        type: "fill-in-the-blank",
        question: "Thủ đô của Việt Nam là?",
        correctAnswer: "Hà Nội",
    },
];

const TN1 = ({ setSelectedItem }: { setSelectedItem: (value: string | null) => void }) => {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (questionId: number, option: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: option }));
    };

    const handleInputChange = (questionId: number, event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers((prev) => ({ ...prev, [questionId]: event.target.value }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className="quiz-container">
            <ArrowLeftOutlined className="back-icon" onClick={() => setSelectedItem(null)} />
            {questions.map((q) => (
                <div key={q.id} className="question">
                    <h3>{q.id}. {q.question}</h3>
                    {q.type === "multiple-choice" ? (
                        <div className="options">
                            {q.options!.map((option) => (
                                <label key={option} className={`option ${submitted && option === q.correctAnswer ? "correct" : ""}`}>
                                    <input
                                        type="radio"
                                        name={`question-${q.id}`}
                                        value={option}
                                        onChange={() => handleSelect(q.id, option)}
                                        disabled={submitted}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ) : (
                        <input
                            type="text"
                            placeholder="Nhập câu trả lời..."
                            value={answers[q.id] || ""}
                            onChange={(e) => handleInputChange(q.id, e)}
                            disabled={submitted}
                        />
                    )}
                    {submitted && (
                        <p className={`result ${answers[q.id] === q.correctAnswer ? "correct" : "incorrect"}`}>
                            {answers[q.id] === q.correctAnswer ? "✅ Đúng" : `❌ Sai - Đáp án: ${q.correctAnswer}`}
                        </p>
                    )}
                </div>
            ))}
            {!submitted && <button onClick={handleSubmit}>Nộp bài</button>}
        </div>
    );
};

export default TN1;
