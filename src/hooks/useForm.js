import { useState } from "react";
import { validateForm } from "../utils/validation";

const useForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => {
      if (value.length === 0) {
        const copiedErrors = { ...prev };
        delete copiedErrors[name];
        return copiedErrors;
      }
      return { ...prev, [name]: errorMsg };
    });
    // 유효성 검사
    const errorMsg = validateForm(name, value);
  };
  return { formData, onHandleChange, formErrors };
};

export default useForm;
