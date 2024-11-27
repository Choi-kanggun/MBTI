import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

const SignupForm = ({ signup }) => {
  const { formErrors, formData, onHandleChange } = useForm();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          회원가입
        </h2>

        <form className="space-y-6" onSubmit={onHandleSubmit}>
          <div>
            <label className="block text-base font-medium text-gray-600">
              아이디
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={onHandleChange}
              placeholder="아이디를 입력해주세요"
              className="w-full mt-1 pl-3 py-2 border rounded-md border-gray-300"
            />
            {formErrors.id && (
              <p className="pt-2 text-center text-red-500">{formErrors.id}</p>
            )}
          </div>

          <div>
            <label className="text-base font-medium text-gray-600">
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onHandleChange}
              placeholder="비밀번호를 입력해주세요"
              className="w-full mt-1 pl-3 py-2 border rounded-md border-gray-300"
            />
            {formErrors.password && (
              <p className="pt-2 text-center text-red-500">
                {formErrors.password}
              </p>
            )}
          </div>

          <div>
            <label className="text-base font-medium text-gray-600">
              닉네임
            </label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={onHandleChange}
              placeholder="닉네임을 입력해주세요"
              className="w-full mt-1 pl-3 py-2 border rounded-md border-gray-300"
            />
            {formErrors.nickname && (
              <p className="pt-2 text-center text-red-500">
                {formErrors.nickname}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            회원가입
          </button>
          <Link to={"/login"}>
            <button
              type="button"
              className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              취소
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
