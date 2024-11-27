import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const PrivateRoute = () => {
  const { accessToken } = useAuthStore();

  if (!accessToken) {
    alert("로그인 먼저 해주세요.");
    return <Navigate to="/" replace />;
  } else
  return <Outlet />;
};

export default PrivateRoute;
