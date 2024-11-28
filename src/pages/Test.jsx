import TestForm from "../components/test/TestForm";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";

import useTest from "../hooks/useTest";

const Test = () => {
  const navigate = useNavigate();
  const { result, handleTestSubmit } = useTest();

  // 결과 페이지로 이동
  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-gray-50 rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="mt-20 text-3xl font-bold mb-6 text-center">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="mt-20 text-3xl font-bold mb-6 text-center">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full  bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:bg-green-600"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
