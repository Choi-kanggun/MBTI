import { updateProfile } from "../api/auth";
import useAuthStore from "../stores/useAuthStore";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const useProfile = () => {
    // 닉네임 상태 관리 함수와 토큰을 전역 저장소에서 가져옴
  const accessToken = useAuthStore((state) => state.accessToken);
  const setNickname = useAuthStore((state) => state.setNickname);
  const [newNickname, setNewNickname] = useState("");

  // 새로운 닉네임 입력받아 상태 변경
  const onChangeNickname = (e) => {
    setNewNickname(e.target.value);
  };

  // 닉네임 변경 API 요청 처리 mutation
  const mutation = useMutation({
    // updateProfile API를 호출
    mutationFn: (newNickname) => updateProfile(accessToken, { newNickname }),
    onSuccess: async (res, newNickname) => {
        // 성공 시 전역 상태의 닉네임 변경
      await setNickname(newNickname);
      Swal.fire({
        icon: "success",
        title: "닉네임이 변경되었습니다.",
        confirmButtonColor: "#429f50",
      });
    },
    onError: (error) => {
        // 에러 발생 시 알림 창
      Swal.fire({
        icon: "error",
        title: error.message,
        confirmButtonColor: "#429f50",
      });
    },
  });

  // 닉네임 변경 제출
  const onSubmitChange = async (e) => {
    e.preventDefault();
    if (!newNickname) {
        // 닉네임을 입력하지 않았을 때
      Swal.fire({
        icon: "warning",
        title: "닉네임을 입력해주세요.",
        confirmButtonColor: "#429f50",
      });
      return;
    } else {
        // 닉네임 변경 API 호출
      mutation.mutate(newNickname);
    }
  };
  return { onSubmitChange, onChangeNickname, newNickname };
};

export default useProfile;
