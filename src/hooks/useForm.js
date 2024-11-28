import { useState } from "react";
import { validateForm } from "../utils/validation";

//로그인, 회원가입 폼 데이터와 에러 상태 관리 커스텀 훅
const useForm = () => {
  // 사용자 입력 값을 저장
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  //유효성 검사 에러 메세지 저장
  const [formErrors, setFormErrors] = useState({});

  // 입력 데이터를 저장하고 유효성 검사 메시지 저장
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 값이 비어있으면 에러 메시지 삭제
    setFormErrors((prev) => {
      if (value.length === 0) {
        const copiedErrors = { ...prev };
        delete copiedErrors[name];
        return copiedErrors;
      }
      return { ...prev, [name]: errorMsg }; // 새로운 에러 메시지 추가
    });
    // 유효성 검사 (id, password, nickname)
    const errorMsg = validateForm(name, value);
  };
  return { formData, onHandleChange, formErrors };
};

export default useForm;
