import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: ({ userId, accessToken, nickname }) => {
      setAuth(userId, accessToken, nickname);
      alert("로그인 성공!");
      navigate("/");
    },
    onError: (error) => {
      alert(error.message);
    },
  });
  return (
    <>
      <LoginForm login={mutation.mutate} />;
    </>
  );
};

export default Login;
