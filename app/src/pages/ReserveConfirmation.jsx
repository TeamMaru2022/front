import React from "react";
import { Link } from "react-router-dom";

const ReserveConfirmation = (props) => {
  // for文を動かすためのfunction
  const runFunction = (run) => {
    return run();
  };

  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div className={`p-3 border-b-2 text-xl font-medium flex bg-white `}>
          <a href="/" className={`w-[150px]`}>
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          <Link
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 hover:bg-[#c6ecff] transform transition`}
            to="../reserveTop"
          >
            予約Topページ
          </Link>
          <Link
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 transform transition hover:bg-[#c6ecff]`}
            to="../reserve"
          >
            予約申請
          </Link>
          <Link
            className={`mx-3 px-4 pt-2 border-b-2 border-[#81d5ff]`}
            to="../reserveConfirmation"
          >
            申請確認
          </Link>
          <Link
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 hover:bg-[#c6ecff] transform transition`}
            to="../mypage"
          >
            登録内容確認
          </Link>
          <Link
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 hover:bg-[#c6ecff] transform transition`}
            to="../reserveAgree"
          >
            予約承認
          </Link>
          <Link
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 hover:bg-[#c6ecff] transform transition`}
            to="../timetable"
          >
            時間割更新
          </Link>
        </div>
      </header>

      <div className={`flex flex-col mx-[70px]`}>
        <div
          className={`flex justify-around pt-[80px] text-[30px] font-bold pb-[30px] border-b-4 border-[#7FD4FF]`}
        >
          申請確認
        </div>
        <div
          className={`flex flex-row font-bold text-2xl border-b-2 text-center py-[10px] border-gray-400`}
        >
          <div className={`w-1/3`}>教室</div>
          <div className={`border-x-2 border-gray-400 w-1/3`}>日時</div>
          <div className={`w-1/3`}>申請状況</div>
        </div>
        <div
          className={`flex flex-row text-2xl border-b-2 text-center border-[#7FD4FF] mt-6 h-[50px]`}
        >
          <div className={`w-1/3 text-3xl`}>3701</div>
          <div className={`w-1/3`}>2022/11/22(水)11:00～13:00</div>
          <div className={`w-1/3`}>承認待ち</div>
        </div>
        {runFunction(() => {
          const items = [];
          for (let i = 0; i < 5; i++) {
            items.push(
              <div
                key={i}
                className={`flex flex-row text-2xl border-b-2 text-center border-[#7FD4FF] mt-6 h-[50px]`}
              >
                <div className={`w-1/3 text-3xl`}></div>
                <div className={`w-1/3`}></div>
                <div className={`w-1/3`}></div>
              </div>
            );
          }
          return items;
        })}
      </div>
    </>
  );
};

export default ReserveConfirmation;
