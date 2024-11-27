import SignupForm from "../components/auth/SignupForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: async () => {
      await Swal.fire({
        icon: "success",
        title: "회원가입 완료!",
        confirmButtonColor: "#429f50",
      });
      navigate("/login");
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
      <SignupForm signup={mutation.mutate} />
    </>
  );
};

export default Signup;
