import LoginForm from "../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  // 로그인 mutation
  const mutation = useMutation({
    mutationFn: login, // 로그인 API 호출
    onSuccess: ({ userId, accessToken, nickname }) => {
      // 로그인 성공 시, 전역 상태에 정보 저장
      setAuth(userId, accessToken, nickname);
      Swal.fire({
        icon: "success",
        title: "로그인 성공",
        confirmButtonColor: "#429f50",
      });
      navigate("/");
    },
    onError: (error) => {
      // 로그인 실패 시, 에러 알림
      Swal.fire({
        icon: "error",
        title: error.message,
        confirmButtonColor: "#429f50",
      });
    },
  });
  return (
    <>
      <LoginForm login={mutation.mutate} />;
    </>
  );
};

export default Login;
