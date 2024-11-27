import React from "react";
import useAuthStore from "../../stores/useAuthStore";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../../api/testResults";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TestResultItem = ({ result }) => {
  const userId = useAuthStore((state) => state.userId);
  const queryClient = useQueryClient();
  const isOwner = result.userId === userId;

  const onClickToggleVisibility = useMutation({
    mutationFn: (newVisibility) =>
      updateTestResultVisibility(result.id, newVisibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.error("공개여부 에러", error);
      alert("공개여부 에러");
    },
  });

  const onClickDelete = useMutation({
    mutationFn: () => deleteTestResult(result.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.error("삭제 오류", error);
      alert("삭제 오류");
    },
  });

  return (
    <div className="flex justify-center">
      <div className="w-5/12 p-10 mb-10 bg-white rounded-lg shadow-md hover:shadow-lg">
        <div className="flex justify-between pb-3 mb-3 sm:flex-row sm:items-center">
          <h4 className="text-2xl font-medium ">닉네임 : {result.nickname}</h4>
          <p className="text-sm text-black ">{result.date}</p>
        </div>

        <p className="mb-4 text-2xl">{result.mbtiResult}</p>
        <p className="mb-4 text-black leading-loose">{result.description}</p>

        {isOwner && (
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => onClickToggleVisibility.mutate(!result.visibility)}
              className="w-36 py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-800"
            >
              {result.visibility ? "비공개하기" : "공개하기"}
            </button>

            <button
              onClick={() => onClickDelete.mutate(result.id)}
              className="w-20 py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-red-600"
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
