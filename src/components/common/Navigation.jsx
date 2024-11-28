import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import Swal from "sweetalert2";

const Navigation = () => {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const accessToken = useAuthStore((state) => state.accessToken);

  const onClickLogout = async () => {
    if (!accessToken) {
      navigate("/login");
    } else {
      clearAuth();

      await Swal.fire({
        icon: "success",
        title: "로그아웃 성공",
        confirmButtonColor: "#429f50",
      });
      navigate("/");
    }
  };
  return (
    <>
      <div className="w-full bg-white shadow-md fixed top-0 z-10 h-16 flex justify-between px-40 items-center">
        <Link to={"/"}>
          <span className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition duration-200">
            홈
          </span>
        </Link>

        <ul className="flex space-x-6 items-center">
          {accessToken ? (
            <>
              <Link to={"/profile"}>
                <li className="text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  프로필
                </li>
              </Link>
              <Link to={"/test"}>
                <li className="text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  테스트
                </li>
              </Link>
              <Link to={"/results"}>
                <li className="text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  결과보기
                </li>
              </Link>
              <button
                onClick={onClickLogout}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="text-gray-700 px-4 py-2 hover:text-blue-500 transition duration-200 cursor-pointer">
                  로그인
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="text-gray-700 px-4 py-2 hover:text-blue-500 transition duration-200 cursor-pointer">
                  회원가입
                </button>
              </Link>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
