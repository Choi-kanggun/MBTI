import SignupForm from "../components/auth/SignupForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  // 회원가입 mutation
  const mutation = useMutation({
    mutationFn: register, // register API 호출
    onSuccess: async () => {
      // 성공 시 알림 후, login 페이지로 이동
      await Swal.fire({
        icon: "success",
        title: "회원가입 완료!",
        confirmButtonColor: "#429f50",
      });
      navigate("/login");
    },
    onError: (error) => {
      // 실패 시, 알림
      Swal.fire({
        icon: "error",
        title: error.message,
        confirmButtonColor: "#429f50",
      });
    },
  });
  return (
    <>
      <SignupForm signup={mutation.mutate} />
    </>
  );
};

export default Signup;
