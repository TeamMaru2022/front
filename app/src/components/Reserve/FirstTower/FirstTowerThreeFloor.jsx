import React from "react";
import DatePicker from "../../DatePicker";

const FirstTowerThreeFloor = () => {
  const [room, setRoom] = React.useState("");

  // 教室をクリックしたときのイベント
  const Set_room = (e) => {
    var str = room;
    if (str.length !== 0) {
      document.getElementById(str).style.backgroundColor = "#FFFFFF";
    }
    var id;
    id = e.currentTarget.id;
    setRoom((room) => id);
    document.getElementById(id).style.backgroundColor = "#7FE5FF";
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
          <div className={`w-[345px] h-100%`}>
            <div className={`flex-row text-center`}>
              <div className={`flex border-2 border-gray-400 text-lg`}>
                <div className={`flex-col w-[90px]`}>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1305"
                    className={`cursor-pointer h-[88px] border-2 border-black mx-0.5 mt-0.5 py-[15px] flex-col`}
                  >
                    <div>1305</div>
                    <div>教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1306"
                    className={`cursor-pointer h-[88px] border-x-2 border-b-2 border-black mx-0.5 py-[15px] flex-col`}
                  >
                    <div>1306</div>
                    <div>教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1307"
                    className={`cursor-pointer h-[88px] border-x-2 border-black  mx-0.5 py-[15px] flex-col`}
                  >
                    <div>1307</div>
                    <div>教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1308"
                    className={`cursor-pointer h-[88px] border-2 border-black  mx-0.5 mb-0.5 py-[15px] flex-col`}
                  >
                    <div>1308</div>
                    <div>教室</div>
                  </div>
                </div>
                <div className={`flex-col w-[160px]`}>
                  <div
                    className={`w-[90px] h-[90px] mx-auto border-2 border-gray-500 text-gray-700 text-base m-1 flex`}
                  >
                    <div className={`w-[44px]`}>WC（男）</div>
                    <div
                      className={`w-[44px] h-[65px] border-l-2 border-b-2 border-gray-500 text-gray-700 text-base`}
                    >
                      WC（女）
                    </div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1309"
                    className={`cursor-pointer w-[90px] h-[90px] mx-auto border-2 border-black  mt-[40px] py-[15px] flex-col`}
                  >
                    <div>1309</div>
                    <div>教室</div>
                  </div>
                </div>

                <div className={`flex-col w-[90px]`}>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1301"
                    className={`cursor-pointer h-[88px] border-2 border-black  mx-0.5 mt-0.5 flex-col`}
                  >
                    <div>1301</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1302"
                    className={`cursor-pointer h-[88px] border-x-2 border-b-2 border-black  mx-0.5 flex-col`}
                  >
                    <div>1302</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1303"
                    className={`cursor-pointer h-[88px] border-x-2 border-black  mx-0.5 flex-col`}
                  >
                    <div>1303</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1304"
                    className={`cursor-pointer h-[88px] border-2 border-black  mx-0.5 mb-0.5 flex-col`}
                  >
                    <div>1304</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`pb-3`}>
            <img
              className={`w-[90px] ml-[90px]`}
              src="./images/school_buildings/FirstTower_stairs.png"
              alt="階段"
            />
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

export default FirstTowerThreeFloor;
