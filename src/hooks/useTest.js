import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";

const useTest = () => {
  // MBTI 가 무엇인지 딱 MBTI 단어만 넣어주시면 됩니다!

  // 테스트 결과 저장 상태
  const [result, setResult] = useState(null);
  // 사용자 정보를 전역 스토어에서 가져옴
  const nickname = useAuthStore((store) => store.nickname);
  const userId = useAuthStore((store) => store.userId);

  // 테스트를 제출했을 때
  const handleTestSubmit = async (answers) => {
    // 답변을 계산 후, 결과를 저장
    const mbtiResult = calculateMBTI(answers);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
    /* 처리하신 후에는 MBTI 결과를 setResult 로 넣어주도록 합시다!*/
    setResult(mbtiResult);

    // 결과의 설명을 가져옴
    const description = mbtiDescriptions[mbtiResult];
    // API를 호출하여 서버에 결과를 저장
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
