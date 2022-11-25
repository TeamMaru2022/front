import React from "react";
import { Link } from "react-router-dom";

const ChangeTimetable = () => {
  let url = "http://localhost:4000/timetable/csv";
  const formData = new FormData();

  const SetTimetable = (e) => {
    console.log("変更");
    formData.append("timetable", e.target.files[0]);
  };

  const TimetableChange = () => {
    console.log("送信");
    const param = {
      method: "POST",
      body: formData,
    };
    fetch(url, param).then((response) => response.json());
  };

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
      <input type="file" onChange={(props) => SetTimetable(props)} />
      <button onClick={() => TimetableChange()}>送信</button>
    </>
  );
};

export default ChangeTimetable;
