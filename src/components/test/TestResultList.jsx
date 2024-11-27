import TestResultItem from "./TestResultItem";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../../api/testResults";
import useAuthStore from "../../stores/useAuthStore";

export default function TestResultList() {
  const userId = useAuthStore((state) => state.userId);

  const { data, isPending, isError } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>에러 발생!</div>;
  }

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-50">
      <div className="my-12 bg-gray-50">
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
