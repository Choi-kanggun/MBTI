import React, { useState } from "react";
import TestForm from "../components/test/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const Test = () => {
  const navigate = useNavigate();
  // MBTI 가 무엇인지 딱 MBTI 단어만 넣어주시면 됩니다!
  const [result, setResult] = useState(null);
  const nickname = useAuthStore((store) => store.nickname);
  const userId = useAuthStore((store) => store.userId);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
    /* 처리하신 후에는 MBTI 결과를 setResult 로 넣어주도록 합시다!*/
    setResult(mbtiResult);
    const description = mbtiDescriptions[mbtiResult];
    await createTestResult({
      userId,
      nickname,
      mbtiResult,
      description,
      visibility: true,
      date: new Date().toLocaleString(),
    });
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-gray-50 rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="mt-10 text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
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
