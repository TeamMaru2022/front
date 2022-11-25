import React from "react";
import DatePicker from "../../DatePicker";

const FirstTowerTwoFloor = () => {
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
          <div className={`w-[345px] h-100%`}>
            <div className={`flex-row text-center`}>
              <div className={`flex border-2 border-gray-400 text-lg`}>
                <div className={`flex-col w-[90px]`}>
                  <div
                    className={`h-[160px] border-x-2 border-t-2 border-gray-500 text-gray-700 mx-0.5 mt-0.5 text-center text-sm py-[30px] flex-col`}
                  >
                    <div>保健室/</div>
                    <div>学生相談室/</div>
                    <div>社会貢献・</div>
                    <div>国際交流</div>
                    <div>センター</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1204"
                    className={`cursor-pointer h-[96px] border-2 border-black hover:bg-gray-200 mx-0.5 py-[3px] flex-col`}
                  >
                    <div>1204</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1205"
                    className={`cursor-pointer h-[96px] border-x-2 border-b-2 border-black hover:bg-gray-200 mx-0.5 mb-0.5 py-[3px] flex-col`}
                  >
                    <div>1205</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
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
                    id="1206"
                    className={`cursor-pointer w-[90px] h-[90px] mx-auto border-2 border-black hover:bg-gray-200 mt-[40px] py-[1px] flex-col`}
                  >
                    <div>1206</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                </div>
                <div className={`flex-col w-[90px]`}>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1201"
                    className={`cursor-pointer h-[117px] border-2 border-black hover:bg-gray-200 mx-0.5 mt-0.5 py-[13px] flex-col`}
                  >
                    <div>1201</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1202"
                    className={`cursor-pointer h-[117px] border-x-2 border-black hover:bg-gray-200 mx-0.5 py-[13px] flex-col`}
                  >
                    <div>1202</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1203"
                    className={`cursor-pointer h-[117px] border-2 border-black hover:bg-gray-200 mx-0.5 mb-0.5 py-[13px] flex-col`}
                  >
                    <div>1203</div>
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
              src="./images/FirstTower_stairs.png"
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

export default FirstTowerTwoFloor;
