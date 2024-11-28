import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const PrivateRoute = () => {
  // 전역 저장소의 사용자 토큰을 가져옴
  const accessToken = useAuthStore((state) => state.accessToken);

  // 토큰이 없다면 홈으로 이동
  if (!accessToken) {
    return <Navigate to="/" replace />;
  }
  // 토큰이 있다면 해당 페이지 이동
  return <Outlet />;
};

export default PrivateRoute;
