import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      // 초기 상태
      userId: null,
      nickname: null,
      accessToken: null,

      // 인증 정보 설정
      setAuth: (userId, accessToken, nickname) => {
        set(() => ({ userId, accessToken, nickname })); // 상태 업데이트
        localStorage.setItem("accessToken", accessToken); // 로컬스토리지에 토큰 저장
      },

      // 인증 정보 초기화
      clearAuth: () => {
        // 상태 초기화
        set(() => ({ userId: null, accessToken: null, nickname: null }));
        localStorage.clear(); // 로컬 스토리지 전체 초기화
      },

      // 닉네임 업데이트
      setNickname: (nickname) => {
        set(() => ({ nickname }));
      },
    }),
    {
      name: "user", // localStorage에 저장 될 키 이름
    }
  )
);

export default useAuthStore;
