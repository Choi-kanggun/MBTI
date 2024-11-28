import TestResultItem from "./TestResultItem";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../../api/testResults";
import useAuthStore from "../../stores/useAuthStore";

export default function TestResultList() {
  // 로그인한 사용자 정보 가져오기
  const userId = useAuthStore((state) => state.userId);
 //tanstack query를 이용하여 json-server에 저장된 테스트 결과 데이터를 가져옴
  const { data, isPending, isError } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isPending) {
    return <div className="mt-28 mb-12 text-center">로딩중입니다...</div>;
  }
  if (isError) {
    return <div className="mt-28 mb-12 text-center">에러 발생!</div>;
  }

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-50">
      <div className="mt-28 mb-12 bg-gray-50">
        <h1 className="text-center text-3xl font-bold">모든 테스트 결과</h1>
      </div>
      {data
        .filter((result) => result.visibility || result.userId === userId)
        .map((result, index) => (
          <TestResultItem key={result.id || index} result={result} />
        ))}
    </div>
  );
}
