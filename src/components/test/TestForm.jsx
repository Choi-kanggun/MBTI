import { useState } from "react";
import { questions } from "../../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  // 각 문항의 답변 저장
  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  const isComplete = answers.every((a) => a.answer.trim() !== "");

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === q.type.split("/")[i]
                    ? "bg-gray-100"
                    : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split("/")[i]}
                  checked={answers[index]?.answer === q.type.split("/")[i]}
                  onChange={() => handleChange(index, q.type.split("/")[i])}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        disabled={!isComplete}
        className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
          isComplete
            ? "bg-blue-500 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
