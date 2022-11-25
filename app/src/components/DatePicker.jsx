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
  const [endHour, setEndHour] = React.useState(9);

  const endhandleChange = (e) => {
    setEndHour(e.target.value);
  };

  const SetEndHour = (run) => {
    return run();
  };

  // endt時間のminite
  const [endMin, setEndMin] = React.useState(0);

  const endMinhandleChange = (e) => {
    setEndMin(e.target.value);
  };

  // 申請ダイアログのmessage
  const [msg, setMsg] = React.useState("");

  // 申請内容確認画面ダイアログ
  const [dialog, setDialog] = React.useState(false);

  const dialoghandleChange = () => {
    setMsg("この内容で申請しますか？");
    setDialog(!dialog);
  };

  // 申請結果ダイアログ
  const [result, setResult] = React.useState(false);

  const resulthandleChange = (flg) => {
    setMsg("下記の内容で受け付けました。");
    setResult(flg);
  };

  // roomを保持して、変化したらダイアログを変える
  const [room, setRoom] = React.useState();
  if (room !== props.room) {
    // msgとdialog, resultのflagを初期化
    // setMsg("この内容で申請しますか？");
    setDialog(false);
    setResult(false);
    setRoom(props.room);
  }

  return (
    <>
      <div className={`absolute z-10 mx-[24px] mt-16 w-[300px] flex-col`}>
        <div className={`flex-col justify-center`}>
          {dialog ? (
            <>
              {/* 申請内容確認ダイアログ */}
              <div className={`flex flex-col`}>
                <div className={`text-center text-lg font-semibold pb-2`}>
                  {msg}
                </div>
                <div className={`flex flex-row pt-2 pb-2 pl-8 font-semibold`}>
                  <div className={`pt-[1px]`}>日時：</div>
                  <div className={`text-lg`}>
                    {format(startDate, "yyyy/MM/d")}　{startHour}:
                    {("0" + startMin).slice(-2)} - {endHour}:
                    {("0" + endMin).slice(-2)}
                  </div>
                </div>
                <div className={`flex flex-row py-2 pl-8 font-semibold`}>
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
                        onClick={() => resulthandleChange(true)}
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
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="start_hour"
                    id="start_hour"
                    onChange={(e) => starthandleChange(e)}
                  >
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                  <div className={`px-1`}>:</div>
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="start_min"
                    id="start_min"
                    onChange={(e) => startMinhandleChange(e)}
                  >
                    <option value="00">00</option>
                    {startHour !== "20" && (
                      <>
                        <option value="5">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                      </>
                    )}
                  </select>
                </div>

                <div>～</div>
                <div className={`flex`}>
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="end_hour"
                    id="end_hour"
                    onChange={(e) => endhandleChange(e)}
                  >
                    {SetEndHour(() => {
                      if (startHour > endHour) {
                        setEndHour(startHour);
                      }
                      const list = [];
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
                  <select
                    className={`border-2 border-black cursor-pointer rounded-md`}
                    name="end_min"
                    id="end_min"
                    onChange={(e) => endMinhandleChange(e)}
                  >
                    <option value="00">00</option>
                    {endHour !== "20" && (
                      <>
                        <option value="5">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              <div
                className={`flex justify-between mt-[25px] mr-[30px] ml-[10px]`}
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
                    dialoghandleChange();
                    resulthandleChange(false);
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
