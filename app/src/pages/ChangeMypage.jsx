import React from "react";
import { Link } from "react-router-dom";

const ChangeMypage = (props) => {
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
          <Link className={`mx-3 px-4 pt-2`} to="../timetable">
            時間割
          </Link>
        </div>
      </header>

      <div className={`flex flex-col mx-[70px]`}>
        <div
          className={`flex justify-around pt-[80px] text-[30px] font-bold pb-[30px] border-b-4 border-[#7FD4FF]`}
        >
          登録内容変更
        </div>
        <div
          className={`flex flex-row justify-between text-3xl font-bold my-[100px] mx-[150px]`}
        >
          <div className={`flex flex-row`}>
            メールアドレス：2190132@ecc.ac.jp
          </div>
          <div className={`flex text-[#7FD4FF] cursor-pointer text-right`}>
            変更
          </div>
        </div>
        <div
          className={`flex flex-row justify-between text-3xl font-bold mx-[150px]`}
        >
          <div className={`flex flex-row`}>
            パスワード：＊＊＊＊＊＊＊＊＊＊
          </div>
          <div className={`flex text-[#7FD4FF] cursor-pointer text-right`}>
            変更
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeMypage;
