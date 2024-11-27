import LoginForm from "../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: ({ userId, accessToken, nickname }) => {
      setAuth(userId, accessToken, nickname);
      Swal.fire({
        icon: "success",
        title: "로그인 성공",
        confirmButtonColor: "#429f50",
      });
      navigate("/");
    },
    onError: (error) => {
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
