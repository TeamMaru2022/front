import React from "react";
import DatePicker from "../../DatePicker";

const ThirdTowerFourFloor = () => {
  const [room, setRoom] = React.useState("");

  // 教室をクリックしたときのイベント
  const Set_room = (e) => {
    var str = room;
    if (str.length !== 0) {
      document.getElementById(str).style.backgroundColor = "#ffffff";
    }
    var id;
    id = e.currentTarget.id;
    setRoom((room) => id);
    document.getElementById(id).style.backgroundColor = "#7fe5ff";
  };

  // 教室のhover時の動き
  const Hover_room = (e) => {
    var str = room;
    var id;
    id = e.currentTarget.id;
    if (str.length !== 0) {
      if (str !== id) {
        document.getElementById(id).style.backgroundColor = "#E5E7EB";
      }
    }
  };
  // 教室のhoverを外した時の動き
  const Leave_room = (e) => {
    var str = room;
    var id;
    id = e.currentTarget.id;
    if (str.length !== 0) {
      if (str !== id) {
        document.getElementById(id).style.backgroundColor = "#FFFFFF";
      }
    }
  };

  return (
    <>
      <div className={`flex place-content-center my-8 w-3/5`}>
        <div className={`flex flex-col`}>
          <div className={`h-100% mb-[100px]`}>
            <div className={`flex-row text-center`}>
              <div
                className={`w-[390px] h-[274px] border-2 border-gray-400 text-lg`}
              >
                <div className={`flex flex-row h-[90px] `}>
                  <div
                    className={`w-[105px] h-[60px] border-2 border-gray-500 text-gray-700 text-base m-0.5 px-2 py-[13px]`}
                  >
                    WC(男)
                  </div>
                  <div
                    className={`w-[60px] h-[60px] border-2 border-gray-500 text-gray-700 text-base m-0.5 px-2 py-[13px]`}
                  >
                    EV
                  </div>
                  <div
                    className={`w-[60px] h-[60px] border-2 border-gray-500 text-gray-700 text-base m-0.5 px-2 py-[13px]`}
                  >
                    EV
                  </div>
                  <div
                    className={`w-[105px] h-[60px] border-2 border-gray-500 text-gray-700 text-base m-0.5 px-2 py-[13px]`}
                  >
                    WC(女)
                  </div>
                  <div
                    className={`w-[60px] border-2 border-gray-500 text-gray-700 m-0.5`}
                  >
                    <img
                      className={`p-0.5`}
                      src="./images/ThirdTower_stairs.png"
                      alt="階段"
                    />
                  </div>
                </div>
                <div className={`flex flex-row align-middle h-[180px]`}>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="3401"
                    className={`cursor-pointer w-[130px]  border-2 border-black hover:bg-gray-200 m-0.5 py-[40px]`}
                  >
                    <div>3401</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="3402"
                    className={`cursor-pointer w-[130px] border-2 border-black hover:bg-gray-200 m-0.5 py-[40px]`}
                  >
                    <div>3402</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="3403"
                    className={`cursor-pointer w-[130px] border-2 border-black hover:bg-gray-200 m-0.5 py-[40px]`}
                  >
                    <div>3403</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-1/3 pr-[30px] mr-[80px] pt-[20px] flex-col`}>
        <div
          className={`flex text-[40px] font-bold h-[60px] mb-[10px] ml-[130px]`}
        >
          {room}
        </div>

        {/* プロジェクター */}
        <div className={`w-[350px] text-lg`}>
          {room && <DatePicker room={room} />}
          <img
            src="../../images/projector.png"
            alt="projector"
            className={`object-contain relative`}
          />
        </div>
      </div>
    </>
  );
};

export default ThirdTowerFourFloor;
