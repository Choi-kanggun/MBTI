import { updateProfile } from "../api/auth";
import useAuthStore from "../stores/useAuthStore";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const useProfile = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const setNickname = useAuthStore((state) => state.setNickname);
  const [newNickname, setNewNickname] = useState("");

  const onChangeNickname = (e) => {
    setNewNickname(e.target.value);
  };

  const mutation = useMutation({
    mutationFn: (newNickname) => updateProfile(accessToken, { newNickname }),
    onSuccess: async (res, newNickname) => {
      await setNickname(newNickname);
      Swal.fire({
        icon: "success",
        title: "닉네임이 변경되었습니다.",
        confirmButtonColor: "#429f50",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: error.message,
        confirmButtonColor: "#429f50",
      });
    },
  });

  const onSubmitChange = async (e) => {
    e.preventDefault();
    if (!newNickname) {
      Swal.fire({
        icon: "warning",
        title: "닉네임을 입력해주세요.",
        confirmButtonColor: "#429f50",
      });
      return;
    } else {
      mutation.mutate(newNickname);
    }
  };
  return { onSubmitChange, onChangeNickname, newNickname };
};

export default useProfile;
