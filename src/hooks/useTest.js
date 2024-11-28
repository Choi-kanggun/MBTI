import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";

const useTest = () => {
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
  return { result, handleTestSubmit };
};

export default useTest;
