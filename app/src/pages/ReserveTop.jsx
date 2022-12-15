import React from "react";
import { Link } from "react-router-dom";

const ReserveTop = (props) => {
  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div className={`p-3 border-b-2 text-xl font-medium flex bg-white `}>
          <a href="/" className={`w-[150px]`}>
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          <Link
            className={`mx-3 px-4 pt-2 border-b-2 border-[#81d5ff]`}
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

      <div className={`flex flex-col`}>
        <div className={`flex justify-around pt-[80px] px-[50px]`}>
          <Link className={`flex flex-col mx-auto w-[320px]`} to="../reserve">
            <img src="./images/reserve/reserve.png" alt="reserve1" />
            <div
              className={`text-2xl font-bold text-[#72bfe6] text-center pt-[30px]`}
            >
              予約申請
            </div>
          </Link>

          <Link
            className={`flex flex-col mx-auto w-[320px]`}
            to="../reserveConfirmation"
          >
            <img
              src="./images/reserve/reserve_confirmation.png"
              alt="reserve1"
            />
            <div
              className={`text-2xl font-bold text-[#72bfe6] text-center pt-[30px]`}
            >
              申請確認
            </div>
          </Link>

          <Link className={`flex flex-col mx-auto w-[320px]`} to="../mypage">
            <img src="./images/reserve/change_mypage.png" alt="reserve1" />
            <div
              className={`text-2xl font-bold text-[#72bfe6] text-center pt-[30px]`}
            >
              登録内容確認
            </div>
          </Link>
        </div>

        <div className={`flex justify-around pt-14 px-[120px]`}>
          <Link
            className={`flex flex-col mx-auto w-[320px]`}
            to="../reserveAgree"
          >
            <img src="./images/reserve/reserve_agree.png" alt="reserve2" />
            <div
              className={`text-2xl font-bold text-[#FF8093] text-center pt-[30px]`}
            >
              予約承認
            </div>
          </Link>

          <Link className={`flex flex-col mx-auto w-[320px]`} to="../timetable">
            <img src="./images/reserve/change_timetable.png" alt="reserve2" />
            <div
              className={`text-2xl font-bold text-[#FF8093] text-center pt-[30px]`}
            >
              時間割更新
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReserveTop;
