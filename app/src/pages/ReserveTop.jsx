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
          <Link className={`mx-3 px-4 pt-2`} to="../reserveTop">
            予約Topページ
          </Link>
          <Link className={`mx-3 px-4 pt-2`} to="../reserve">
            予約申請
          </Link>
          {/* <Link className={`mx-3 px-4 pt-2`} to="../timetable">
            時間割
          </Link> */}
        </div>
      </header>

      <div className={`flex flex-col`}>
        <div className={`flex justify-around pt-[80px] px-[50px]`}>
          <Link className={`flex flex-col mx-auto w-[320px]`} to="../reserve">
            <img src="./images/reserve/reserve1.png" alt="reserve1" />
            <div
              className={`text-2xl font-bold text-[#72bfe6] text-center pt-[30px]`}
            >
              予約申請
            </div>
          </Link>

          <Link className={`flex flex-col mx-auto w-[320px]`}>
            <img src="./images/reserve/reserve1.png" alt="reserve1" />
            <div
              className={`text-2xl font-bold text-[#72bfe6] text-center pt-[30px]`}
            >
              申請確認
            </div>
          </Link>

          <Link className={`flex flex-col mx-auto w-[320px]`}>
            <img src="./images/reserve/reserve1.png" alt="reserve1" />
            <div
              className={`text-2xl font-bold text-[#72bfe6] text-center pt-[30px]`}
            >
              登録内容確認
            </div>
          </Link>
        </div>

        <div className={`flex justify-around pt-14 px-[120px]`}>
          <Link className={`flex flex-col mx-auto w-[320px]`}>
            <img src="./images/reserve/reserve2.png" alt="reserve2" />
            <div
              className={`text-2xl font-bold text-[#FF8093] text-center pt-[30px]`}
            >
              予約承認
            </div>
          </Link>

          <Link className={`flex flex-col mx-auto w-[320px]`}>
            <img src="./images/reserve/reserve2.png" alt="reserve2" />
            <div
              className={`text-2xl font-bold text-[#FF8093] text-center pt-[30px]`}
            >
              時間割変更
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReserveTop;
