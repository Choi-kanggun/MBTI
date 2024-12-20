export const validateForm = (name, value) => {
  // 회원가입, 로그인 유효성 검사
  switch (name) {
    case "id":
      if (value.length < 4 || value.length > 10) {
        return "아이디는 4~10글자로 입력해주세요.";
      }
      break;
    case "password":
      if (value.length < 4 || value.length > 12) {
        return "비밀번호는 4~12글자로 입력해주세요.";
      }
      break;
    case "nickname":
      if (value.length < 2 || value.length > 10) {
        return "닉네임은 2~10글자로 입력해주세요.";
      }
      break;
    default:
      return;
  }
  return;
};
