import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      userId: null,
      nickname: null,
      accessToken: null,

      setAuth: (userId, accessToken, nickname) => {
        set(() => ({ userId, accessToken, nickname }));
        localStorage.setItem("accessToken", accessToken);
      },

      clearAuth: () => {
        set(() => ({ userId: null, accessToken: null, nickname: null }));
        localStorage.clear();
      },

      setNickname: (nickname) => {
        set(() => ({ nickname }));
      },
    }),
    {
      name: "user",
    }
  )
);

export default useAuthStore;
