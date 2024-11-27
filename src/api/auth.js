import { authApi } from "../instance/axiosInstance";

export const register = async ({ id, password, nickname }) => {
  try {
    const { data } = await authApi.post("/register", {
      id,
      password,
      nickname,
    });
    return data;
  } catch (error) {
    console.error("회원가입 오류 : ", error);
    throw new Error("회원가입 실패");
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await authApi.post("/login?expiresIn=10m", {
      id,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("로그인 오류 : ", error);
    throw new Error("로그인 실패");
  }
};

export const getUserProfile = async (token) => {
  try {
    const { data } = await authApi.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("프로필 가져오기 실패");
  }
};

export const updateProfile = async (token, userData) => {
  try {
    const formData = new FormData();
    // avatar와 nickname 중 하나 또는 모두 변경 가능
    formData.append("avatar", userData.avatar);
    formData.append("nickname", userData.newNickname);
    const { data } = await authApi.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("성공");
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("프로필 업데이트 실패");
  }
};
