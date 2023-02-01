import React from "react";
import { Link } from "react-router-dom";

const ChangeTimetable = () => {
  let url = "http://localhost:4000/timetable/csv";
  const formData = new FormData();

  const SetTimetable = (e) => {
    console.log("変更");
    console.log(e.target.files[0]["name"]);
    console.log(e.target.files.length);
    formData.append("timetable", e.target.files[0]);
  };

  const TimetableChange = () => {
    SetMsg([]);
    console.log("送信");
    console.log(msg);
    const param = {
      method: "POST",
      body: formData,
    };
    fetch(url, param).then((response) => response.json());
  };

  // for文を動かすためのfunction
  const runFunction = (run) => {
    return run();
  };

  // ファイル名を表示するための変数
  const [msg, SetMsg] = React.useState([]);

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
            className={`mx-3 px-4 pt-2 rounded-lg hover:translate-y-0.5 hover:bg-[#c6ecff] transform transition`}
            to="../reserveAgree"
          >
            予約承認
          </Link>
          <Link
            className={`mx-3 px-4 pt-2 border-b-2 border-[#81d5ff]`}
            to="../timetable"
          >
            時間割更新
          </Link>
        </div>
      </header>
      <div className={`flex flex-col`}>
        <div
          className={`flex justify-around pt-[40px] pb-[30px] text-[30px] font-bold`}
        >
          時間割更新
        </div>
        <div className={`relative w-[850px] ml-[335px]`}>
          <img
            src="../../images/ipad.png"
            alt="ipad"
            className={`object-contain`}
          />
          <div
            className={`absolute flex flex-col w-[550px] h-[500px] mx-[50px] top-[70px] text-2xl text-center font-bold`}
          >
            {runFunction(() => {
              const items = [];
              for (let i = 0; i < 5; i++) {
                items.push(
                  <div
                    key={i}
                    className={`border-b-2 border-[#7FD4FF] h-[50px] pt-[15px]`}
                  >
                    {msg[i]}
                  </div>
                );
              }
              return items;
            })}
            <label
              className={`mt-[20px] cursor-pointer text-[#192a33] w-1/3 mt-[25px] mx-auto border-[#192a33] font-extrabold border-b-[2px]`}
            >
              <input
                type="file"
                multiple
                className={`hidden`}
                onChange={(props) => SetTimetable(props)}
              />
              ファイル選択
            </label>
            <div className={`text-[#47555c] text-base mt-[5px]`}>
              複数選択可能
            </div>
            <div className={`text-[#a00101] text-base mt-[70px]`}>
              以前のデータは更新すると、自動で削除されます。
            </div>
            <div
              className={`text-[30px] mt-[20px] cursor-pointer`}
              onClick={() => TimetableChange()}
            >
              更新
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeTimetable;
