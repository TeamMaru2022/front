import React from "react";

const ReserveClass = (props) => {
  const rooms = [
    { room: "12", num: 6 },
    { room: "13", num: 9 },
    { room: "14", num: 5 },
    { room: "22", num: 3 },
    { room: "23", num: 3 },
    { room: "24", num: 5 },
    { room: "25", num: 5 },
    { room: "26", num: 3 },
    { room: "32", num: 3 },
    { room: "33", num: 3 },
    { room: "34", num: 3 },
    { room: "35", num: 2 },
    { room: "36", num: 2 },
    { room: "37", num: 3 },
  ];

  // 教室のプラス押したか押してないか判定
  const [openReserve, setOpenReserve] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const roomnum = rooms.filter((Room) => {
    return Room.room === props.room;
  });

  // start時間のhour
  const [startHour, setStartHour] = React.useState();

  const starthandleChange = (e) => {
    setStartHour(e.target.value);
  };

  // end時間のhour
  const [endHour, setEndHour] = React.useState();

  const endhandleChange = (e) => {
    setEndHour(e.target.value);
  };

  const items = [];
  for (let i = 1; i <= roomnum[0].num; i++) {
    items.push(
      <div key={i}>
        <li
          className={`border-black py-2 ${
            i === 1 ? `border-2` : `border-x-2 border-b-2`
          } ${i % 2 === 0 ? `bg-[#FCFCFC]` : `bg-[#B7E7FF]`}`}
          onClick={() => {
            setOpenReserve(
              openReserve.map((roomnum, index) =>
                index === i - 1 ? !openReserve[i - 1] : roomnum
              )
            );
          }}
        >
          <div className={`flex justify-between`}>
            <div className={`flex ml-[100px] mr-[60px]`}>
              {props.room + 0 + i}
            </div>
            <div className={`flex mx-2`}>
              {openReserve[i - 1] ? (
                <img
                  src="../images/minus.svg"
                  alt="minus"
                  className={`object-contain w-6`}
                />
              ) : (
                <img
                  src="../images/plus.svg"
                  alt="plus"
                  className={`object-contain w-6`}
                />
              )}
            </div>
          </div>
        </li>
        {openReserve[i - 1] && (
          <div
            className={`bg-white border-x-2 border-b-2 border-black text-sm h-[100px]`}
          >
            <div className={`flex flex-col`}>
              <div className={`flex justify-around p-2`}>
                <div className={`flex`}>開始時間</div>
                <div className={`flex`}>終了時間</div>
              </div>
              <div className={`flex justify-around px-2`}>
                <div className={`flex`}>
                  <select
                    className={`border-2 border-black`}
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
                    className={`border-2 border-black`}
                    name="start_min"
                    id="start_min"
                  >
                    <option value="00">00</option>
                    {startHour === "20" ? (
                      ``
                    ) : (
                      <>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </>
                    )}
                  </select>
                </div>

                <div>～</div>
                <div className={`flex`}>
                  <select
                    className={`border-2 border-black`}
                    name="end_hour"
                    id="end_hour"
                    onChange={(e) => endhandleChange(e)}
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
                    className={`border-2 border-black`}
                    name="end_min"
                    id="end_min"
                  >
                    <option value="00">00</option>
                    {endHour === "20" ? (
                      ``
                    ) : (
                      <>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              <div className={`flex flex-row-reverse`}>
                <div
                  className={`flex m-2 w-[50px] px-2 rounded-lg hover:translate-y-0.5 hover:bg-gray-300 border-2 border-gray-500 transform transition`}
                >
                  予約
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return <ul>{items}</ul>;
};

export default ReserveClass;
