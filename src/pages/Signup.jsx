import React from "react";
import SignupForm from "../components/auth/SignupForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: async () => {
      alert("회원가입 완료!");
      navigate("/login");
    },
    onError: (error) => {
      alert(error.message);
    },
  });
  return (
    <>
      <SignupForm signup={mutation.mutate} />
    </>
  );
};

export default Signup;
