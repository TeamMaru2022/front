import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);

const Com_DatePicker = (props) => {
  // DatePicker
  const [startDate, setStartDate] = React.useState(new Date());
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const [imageUrl, setImageUrl] = React.useState("../../images/calendar.svg");

  // timePicker
  // start時間のhour
  const [startHour, setStartHour] = React.useState(8);

  const starthandleChange = (e) => {
    setStartHour(e.target.value);
  };

  // start時間のminite
  const [startMin, setStartMin] = React.useState(0);

  const startMinhandleChange = (e) => {
    setStartMin(e.target.value);
  };

  // end時間のhour
  const [endHour, setEndHour] = React.useState(8);

  const endhandleChange = (e) => {
    setEndHour(e.target.value);
  };

  // endt時間のminite
  const [endMin, setEndMin] = React.useState(0);

  const endMinhandleChange = (e) => {
    setEndMin(e.target.value);
  };

  // 開始時間、終了時間のドロップダウンを表示するためのfunction
  const runFunction = (run) => {
    if (startHour > endHour) {
      setEndHour(startHour);
    }

    return run();
  };

  // 申請ダイアログのmessage
  const [msg, setMsg] = React.useState("");

  // 申請内容確認画面ダイアログ
  const [dialog, setDialog] = React.useState(false);

  const dialoghandleChange = () => {
    setDialog(!dialog);
  };

  // 申請ダイアログで時間表示用の変数
  const [showstart, setShowStart] = React.useState();
  const [showend, setShowEnd] = React.useState();

  // 時間設定があってるか判定
  const [time, setTime] = React.useState();
  const checktime = () => {
    setTime(
      ("0" + startHour).slice(-2) + ("0" + startMin).slice(-2) >=
        ("0" + endHour).slice(-2) + ("0" + endMin).slice(-2)
    );
    setShowStart(
      ("0" + startHour).slice(-2) + ":" + ("0" + startMin).slice(-2)
    );
    setShowEnd(("0" + endHour).slice(-2) + ":" + ("0" + endMin).slice(-2));
    setMsg("下記の内容で受け付けました。");
  };

  // 申請結果ダイアログ
  const [result, setResult] = React.useState(false);

  // 予約データをサーバに送る処理
  const resulthandleChange = async (flg) => {
    let url = "http://localhost:4000/reservation/rese";

    // postで送るデータ
    const param = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        room_no: room,
        rese_date: format(startDate, "yyyy-MM-dd"),
        s_time: showstart,
        e_time: showend,
      }),
    };
    // postで帰ってきたデータをsetMessageでmessageに入れてる
    const reseresult = await fetch(url, param)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return reseresult;
  };

  // "はい(申請する)"ボタンを押した時
  // back-endにpost送信
  const postReservation = async () => {
    // messageが0：時間にかぶりがある
    // messageが1：予約完了
    const reseresult = await resulthandleChange();
    console.log(reseresult);
    if (reseresult["message"] === "1") {
      setMsg("下記の内容で受け付けました。");
    } else if (reseresult["message"] === "0") {
      setMsg("下記の時間に予約が入っています。");
      setShowStart(reseresult["startTime"].slice(0, 5));
      setShowEnd(reseresult["endTime"].slice(0, 5));
    }
    setResult(true);
  };

  // roomを保持して、変化したらダイアログを変える
  const [room, setRoom] = React.useState();
  if (room !== props.room) {
    // msgとdialog, resultのflagを初期化
    setDialog(false);
    setResult(false);
    setRoom(props.room);
  }

  // サークルかそれ以外かを判定する変数
  const [club, SetClub] = React.useState(false);

  return (
    <>
      <div className={`absolute z-10 mx-[24px] mt-16 w-[300px] flex-col`}>
        <div className={`flex-col justify-center`}>
          {dialog ? (
            <>
              {/* {() => console.log(time)} */}
              {/* 時間設定があってるか判定 */}
              {time ? (
                <>
                  {/* 時間設定が間違っているときのダイアログ */}
                  <div className={`flex flex-col my-[30px]`}>
                    <div className={`text-center text-lg font-semibold pb-2`}>
                      時間指定が間違っています。
                    </div>
                    <div
                      className={`flex flex-row-reverse text-sm font-bold py-9 px-9`}
                    >
                      <div
                        className={`flex w-[80px] px-6 cursor-pointer rounded-md drop-shadow-lg border-black border-2 bg-[#FFFFFF] hover:bg-[#E5E7EB]`}
                        onClick={() => {
                          dialoghandleChange();
                        }}
                      >
                        戻る
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* 申請内容確認ダイアログ */}
                  <div className={`flex flex-col`}>
                    <div className={`text-center text-lg font-semibold pb-2`}>
                      {msg}
                    </div>
                    <div
                      className={`flex flex-row pt-2 pb-2 pl-5 font-semibold`}
                    >
                      <div className={`pt-[1px]`}>日時：</div>
                      <div className={`text-lg`}>
                        {format(startDate, "yyyy/MM/dd")} {showstart} -{" "}
                        {showend}
                      </div>
                    </div>
                    <div className={`flex flex-row py-2 pl-5 font-semibold`}>
                      <div className={`pt-[1px]`}>教室：</div>
                      <div className={`text-lg`}>{props.room}</div>
                    </div>
                    <div
                      className={`flex flex-row justify-around text-sm font-bold py-3 px-9`}
                    >
                      {result ? (
                        <>
                          <Link
                            className={`flex px-6 cursor-pointer rounded-md drop-shadow-lg border-black bg-[#c6ecff] hover:bg-[#a5e1ff] border-2`}
                            to="../reserveTop"
                          >
                            Top
                          </Link>
                        </>
                      ) : (
                        <>
                          <div
                            className={`flex px-6 cursor-pointer rounded-md drop-shadow-lg border-black bg-[#c6ecff] hover:bg-[#a5e1ff] border-2`}
                            onClick={() => {
                              postReservation();
                            }}
                          >
                            はい
                          </div>
                        </>
                      )}

                      <div
                        className={`flex px-6 cursor-pointer rounded-md drop-shadow-lg border-black border-2 bg-[#FFFFFF] hover:bg-[#E5E7EB]`}
                        onClick={() => {
                          dialoghandleChange();
                        }}
                      >
                        戻る
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {/* 日付指定 */}
              <div
                className={`flex border-b-2 border-[#FF8093] justify-center text-xl font-bold`}
              >
                {format(startDate, "yyyy/MM/d")}
                <img
                  onClick={handleClick}
                  onMouseEnter={() =>
                    setImageUrl("../../images/calendar_hover.svg")
                  }
                  onMouseLeave={() => setImageUrl("../../images/calendar.svg")}
                  src={imageUrl}
                  alt="calendar"
                  className={`object-contain w-5 flex ml-6 cursor-pointer`}
                />
              </div>
              {isOpen && (
                <div className={`absolute z-10`}>
                  <DatePicker
                    locale="ja"
                    selected={startDate}
                    onChange={handleChange}
                    minDate={new Date()}
                    inline
                  />
                </div>
              )}

              {/* 時間指定 */}
              <div className={`flex flex-row justify-around mt-[10px]`}>
                <div className={`flex`}>開始時間</div>
                <div className={`flex`}>終了時間</div>
              </div>
              <div className={`flex justify-around mt-[10px] px-2`}>
                <div className={`flex`}>
                  {/*
                    開始時間：時
                    19時まで選択可能
                  */}
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="start_hour"
                    id="start_hour"
                    onChange={(e) => starthandleChange(e)}
                    value={startHour}
                  >
                    {runFunction(() => {
                      const list = [];
                      for (let i = 8; i < 20; i++) {
                        list.push(
                          <option value={i} key={i}>
                            {("0" + i).slice(-2)}
                          </option>
                        );
                      }
                      return list;
                    })}
                  </select>
                  <div className={`px-1`}>:</div>

                  {/*
                    開始時間：分
                  */}
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="start_min"
                    id="start_min"
                    onChange={(e) => startMinhandleChange(e)}
                    value={startMin}
                  >
                    {runFunction(() => {
                      const list = [];
                      for (let i = 0; i <= 55; i = i + 5) {
                        list.push(
                          <option value={i} key={i}>
                            {("0" + i).slice(-2)}
                          </option>
                        );
                      }
                      return list;
                    })}
                  </select>
                </div>

                <div>～</div>
                <div className={`flex`}>
                  {/* 終了時間：時 */}
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="end_hour"
                    id="end_hour"
                    onChange={(e) => endhandleChange(e)}
                    value={endHour}
                  >
                    {runFunction(() => {
                      const list = [];
                      // 開始時間：時から20時まで選択可能
                      for (let i = startHour; i <= 20; i++) {
                        list.push(
                          <option value={i} key={i}>
                            {("0" + i).slice(-2)}
                          </option>
                        );
                      }
                      return list;
                    })}
                  </select>
                  <div className={`px-1`}>:</div>

                  {/* 終了時間：分 */}
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="end_min"
                    id="end_min"
                    onChange={(e) => endMinhandleChange(e)}
                    value={endMin}
                  >
                    {runFunction(() => {
                      if (endHour === "20") {
                        return <option value="00">00</option>;
                      }
                      const list = [];
                      for (let i = 0; i <= 55; i = i + 5) {
                        list.push(
                          <option value={i} key={i}>
                            {("0" + i).slice(-2)}
                          </option>
                        );
                      }

                      return list;
                    })}
                  </select>
                </div>
              </div>

              {/* 使用目的 or サークル名をいれる */}
              {club ? (
                // サークルの場合
                <div className={`justify-around`}>
                  <div className={`text-base mt-2 font-semibold ml-[30px]`}>
                    サークル名
                  </div>
                  <input
                    className={`ml-[30px] border-2 border-black text-base py-0.5 px-2 rounded-lg`}
                    type="text"
                    placeholder="例：e-sportsサークル"
                  />
                </div>
              ) : (
                // サークル以外の場合
                <>
                  <div className={`text-base mt-2 font-semibold ml-[30px]`}>
                    使用目的
                  </div>
                  <div className={`justify-around flex flex-row mx-[30px]`}>
                    <div className={`w-1/3`}>
                      <input
                        type="radio"
                        name="useing"
                        id="kaigi"
                        value="会議"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="kaigi"
                        className="border-2 text-sm rounded-2xl px-4 py-1 peer-checked:bg-[#72d2ff] bg-[#bfe9ff] cursor-pointer border-black hover:bg-[#a5e1ff]"
                      >
                        会議
                      </label>
                    </div>
                    <div className={`w-1/3`}>
                      <input
                        type="radio"
                        name="useing"
                        id="mendan"
                        value="面談"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="mendan"
                        className="border-2 text-sm rounded-2xl px-4 py-1 peer-checked:bg-[#72d2ff] bg-[#bfe9ff] cursor-pointer border-black hover:bg-[#a5e1ff]"
                      >
                        面談
                      </label>
                    </div>
                    <div className={`w-1/3`}>
                      <input
                        type="radio"
                        name="useing"
                        id="sonota"
                        value="その他"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="sonota"
                        className="border-2 text-sm rounded-2xl px-4 py-1 peer-checked:bg-[#72d2ff] bg-[#bfe9ff] cursor-pointer border-black hover:bg-[#a5e1ff]"
                      >
                        その他
                      </label>
                    </div>
                  </div>
                </>
              )}
              <div
                className={`flex justify-between mt-[15px] mr-[30px] ml-[10px]`}
              >
                <div
                  className={`flex flex-row rounded-md bg-gray-200 border-[2px] border-black text-sm`}
                  x-data="app"
                >
                  <div>
                    <input
                      type="radio"
                      name="option"
                      id="1"
                      className="peer hidden"
                      defaultChecked
                      onChange={() => SetClub(false)}
                    />
                    <label
                      htmlFor="1"
                      className={`my-[2px] ml-[2px] peer-checked:shadow-lg peer-checked:border-[1px] peer-checked:border-black block cursor-pointer select-none rounded-md w-[75px] text-center peer-checked:bg-white peer-checked:font-bold`}
                    >
                      会議
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="option"
                      id="2"
                      className={`peer hidden`}
                      onChange={() => SetClub(true)}
                    />
                    <label
                      htmlFor="2"
                      className={`my-[2px] mr-[2px] block peer-checked:shadow-lg peer-checked:border-[1px] peer-checked:border-black cursor-pointer select-none rounded-md w-[80px] text-center peer-checked:bg-white peer-checked:font-bold`}
                    >
                      サークル
                    </label>
                  </div>
                </div>
                <div
                  className={`flex px-4 pt-1 cursor-pointer font-bold text-sm rounded-md drop-shadow-lg border-black bg-[#c6ecff] hover:bg-[#a5e1ff] border-2`}
                  onClick={() => {
                    checktime();
                    dialoghandleChange();
                    setResult(false);
                    setMsg("この内容で申請しますか？");
                  }}
                >
                  申請
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Com_DatePicker;
