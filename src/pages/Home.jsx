import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-row justify-center items-start min-h-screen bg-gray-50">
      <div className="w-full bg-gray-50 mt-40 flex-column justify-center px-40 items-center">
        <h1 className="text-center text-4xl font-bold">무료 성격 테스트</h1>
        <p className="text-center text-xl my-10">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
        <div className="flex justify-between">
          <div className="w-2/5 mr-8 bg-white shadow-lg rounded-lg p-8 space-y-8">
            <p className="text-2xl font-bold">성격 유형 검사</p>
            <p className="leading-relaxed">
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </p>
          </div>
          <div className="w-2/5 mr-8 bg-white shadow-lg rounded-lg p-8 space-y-8">
            <p className="text-2xl font-bold">성격 유형 이해</p>
            <p className="leading-relaxed">
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </p>
          </div>
          <div className="w-2/5  bg-white shadow-lg rounded-lg p-8 space-y-8">
            <p className="text-2xl font-bold">팀 평가</p>
            <p className="leading-relaxed">
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              배워보세요.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to={"/test"}>
            <button className="w-80 py-3 mt-10 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              내 성격 알아보러 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
