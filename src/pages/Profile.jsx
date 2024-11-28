import useProfile from "../hooks/useProfile";

const Profile = () => {
  const { onSubmitChange, onChangeNickname, newNickname } = useProfile();

  return (
    <div className="flex flex-row justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white mt-40 h-60 shadow-lg rounded-lg p-8 space-y-8">
        <label className="text-2xl font-bold text-gray-600">프로필 수정</label>
        <form onSubmit={onSubmitChange}>
          <input
            className="w-full mt-1 pl-3 py-2 border rounded-md border-gray-300"
            type="text"
            value={newNickname}
            onChange={onChangeNickname}
            placeholder="변경할 닉네임 입력"
          />
          <button
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            type="submit"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
