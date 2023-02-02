import React from "react";
import { Link } from "react-router-dom";

const ReserveAgree = (props) => {
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
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 hover:bg-[#c6ecff] transform transition`}
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
            className={`mx-3 px-4 pt-2 border-b-2 border-[#81d5ff]`}
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
          予約承認
        </div>
        <div
          className={`flex flex-row text-2xl border-b-2 text-center border-[#7FD4FF] mt-6 h-[50px]`}
        >
          <div className={`w-1/3 text-3xl`}>3701</div>
          <div className={`w-1/3`}>2022/11/22(水)11:00～13:00</div>
          <div className={`w-1/3 flex flex-row justify-center`}>
            <div className={`rounded-lg mr-[20px]`}>
              <input
                type="radio"
                name="agree"
                id="ok"
                value="承認"
                class="hidden peer"
              />
              <label
                htmlFor="ok"
                class="border-2 text-sm rounded-2xl px-4 py-1 peer-checked:bg-[#c6ecff] bg-[#ffffff] cursor-pointer border-[#72bfe6]"
              >
                承認
              </label>
            </div>
            <div className={`rounded-lg `}>
              <input
                type="radio"
                name="agree"
                id="ng"
                value="拒否"
                class="hidden peer"
              />
              <label
                htmlFor="ng"
                class="border-2 text-sm rounded-2xl px-4 py-1 peer-checked:bg-[#ffc6c6] bg-[#ffffff] cursor-pointer border-[#e57272]"
              >
                拒否
              </label>
            </div>
          </div>
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

export default ReserveAgree;
