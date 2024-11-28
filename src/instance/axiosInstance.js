import Swal from "sweetalert2";
import useAuthStore from "../stores/useAuthStore";
import axios from "axios";

// 인증,인가를 위한 api instance 설정
const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

// 테스트 결과를 관리 할 api instance 설정
const jsonApi = axios.create({
  baseURL: "https://scratch-assorted-repair.glitch.me",
});

// 서버에 요청 시, 중간에서 토큰 유효성 검사
authApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    Swal.fire({
      icon: "warning",
      title: err.response.data.message,
      confirmButtonColor: "#429f50",
    });
    if (
      err.response.data.message ===
      "토큰이 만료되었습니다. 다시 로그인 해주세요."
    ) {
      // 로그아웃처리
      // return store.dispatch(logout());
      return useAuthStore.getState().clearAuth();
    }
    return Promise.reject(err);
  }
);

// 서버에서 응답 시, 중간에서 토큰 유효성 검사
authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    Swal.fire({
      icon: "warning",
      title: err.response.data.message,
      confirmButtonColor: "#429f50",
    });
    if (
      err.response.data.message ===
      "토큰이 만료되었습니다. 다시 로그인 해주세요."
    ) {
      // 로그아웃처리
      // return store.dispatch(logout());
      return useAuthStore.getState().clearAuth();
    }
    return Promise.reject(err);
  }
);

jsonApi.interceptors.request.use(
  async (config) => {
    const { data } = await authApi.get("/user");
    if (data?.success) return config;
    return Promise.reject(new Error("사용자 정보 조회에 실패 했습니다."));
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { authApi, jsonApi };
