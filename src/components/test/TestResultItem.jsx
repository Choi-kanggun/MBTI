import useAuthStore from "../../stores/useAuthStore";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../../api/testResults";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const TestResultItem = ({ result }) => {
  // 로그인한 사용자 정보 가져오기
  const userId = useAuthStore((state) => state.userId);
  const queryClient = useQueryClient();
  // 로그인한 사용자 정보와 결과 소유자 정보 확인
  const isOwner = result.userId === userId;

  // 공개 / 비공개 상태 변경 mutation
  const onClickToggleVisibility = useMutation({
    mutationFn: (newVisibility) =>
      updateTestResultVisibility(result.id, newVisibility),
    onSuccess: () => {
      // 성공 시 캐시된 테스트 결과 목록을 무효화하고 새 데이터를 가져옴
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      // 에러 발생 시 alert 알림
      Swal.fire({
        icon: "error",
        title: error.message,
        confirmButtonColor: "#429f50",
      });
    },
  });

  // 결과 삭제 mutation
  const onClickDelete = useMutation({
    mutationFn: () => deleteTestResult(result.id),
    onSuccess: () => {
      // 성공 시 캐시된 테스트 결과 목록을 무효화하고 새 데이터를 가져옴
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      // 에러 발생 시 alert 알림
      Swal.fire({
        icon: "error",
        title: error.message,
        confirmButtonColor: "#429f50",
      });
    },
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg p-8 mb-10 rounded-xl bg-gradient-to-r from-blue-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between pb-4 border-b border-gray-300 mb-6 sm:flex-row sm:items-center">
          <h4 className="text-xl font-bold text-gray-700">{result.nickname}</h4>
          <p className="text-sm text-gray-500">{result.date}</p>
        </div>

        <p className="mb-6 text-lg font-semibold text-blue-700">
          {result.mbtiResult}
        </p>
        <p className="mb-6 text-gray-600 leading-relaxed">
          {result.description}
        </p>

        {isOwner && (
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => onClickToggleVisibility.mutate(!result.visibility)}
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-200"
            >
              {result.visibility ? "비공개하기" : "공개하기"}
            </button>

            <button
              onClick={() => onClickDelete.mutate(result.id)}
              className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-200"
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResultItem;
