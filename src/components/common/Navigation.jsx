import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

const Navigation = () => {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const accessToken = useAuthStore((state) => state.accessToken);
  const onClickLogout = () => {
    if (!accessToken) {
      navigate("/login");
    } else {
      navigate("/");
      alert("로그아웃 완료!");
      clearAuth();
    }
  };
  return (
    <>
      <div className="w-full bg-white shadow-lg h-16 flex row justify-between px-40 items-center">
        <Link to={"/"}>
          <button className="cursor-pointer">홈</button>
        </Link>
        <ul className="flex row justify-center items-center ">
          {accessToken ? (
            <>
              {" "}
              <Link to={"/profile"}>
                <li className="p-4 cursor-pointer">프로필</li>
              </Link>
              <Link to={"/test"}>
                <li className="p-4 cursor-pointer">테스트</li>
              </Link>
              <Link to={"/results"}>
                <li className="p-4 cursor-pointer">결과보기</li>
              </Link>
              <button
                onClick={onClickLogout}
                className="cursor-pointer p-3 text-white bg-blue-500 rounded-md hover:bg-red-700"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button onClick={onClickLogout} className="cursor-pointer p-4">
                  로그인
                </button>
              </Link>
              <Link to={"/signup"}>
                <button onClick={onClickLogout} className="cursor-pointer p-4">
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
