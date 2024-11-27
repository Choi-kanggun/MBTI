import useAuthStore from "../stores/useAuthStore";
import axios from "axios";

const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

const jsonApi = axios.create({
  baseURL: "https://scratch-assorted-repair.glitch.me",
});

authApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    console.log("여기 =============");
    alert(err.response.data.message);
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

authApi.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    alert(err.response.data.message);
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
