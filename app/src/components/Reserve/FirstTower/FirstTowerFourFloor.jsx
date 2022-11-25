import React from "react";
import DatePicker from "../../DatePicker";

const FirstTowerFourFloor = () => {
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
          <div className={` w-[345px] h-100%`}>
            <div className={`flex-row text-center text-lg`}>
              <div className={`flex justify-between border-2 border-gray-400`}>
                <div className={`flex-col w-[100px]`}>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1403"
                    className={`cursor-pointer h-[117px] border-2 border-black mx-0.5 mt-0.5 py-[15px] flex-col hover:bg-[#e5e7eb]`}
                  >
                    <div>1403</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1404"
                    className={`cursor-pointer h-[117px] border-x-2 border-black mx-0.5 py-[15px] flex-col hover:bg-[#e5e7eb]`}
                  >
                    <div>1404</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1405"
                    className={`cursor-pointer h-[117px] border-2 border-black mx-0.5 mb-0.5 py-[15px] flex-col hover:bg-[#e5e7eb]`}
                  >
                    <div>1405</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                </div>
                <div className={`flex-col w-[190px]`}>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1401"
                    className={`cursor-pointer h-[125px] mx-0.5 mt-0.5 border-x-2 border-t-2 border-black py-[45px] hover:bg-[#e5e7eb]`}
                  >
                    1401実習室
                  </div>
                  <div
                    onClick={Set_room}
                    onMouseEnter={Hover_room}
                    onMouseLeave={Leave_room}
                    id="1402"
                    className={`cursor-pointer h-[125px] mx-0.5 border-2 border-black py-[45px] hover:bg-[#e5e7eb]`}
                  >
                    1402実習室
                  </div>
                  <div className={`flex justify-end h-[90px]`}>
                    <div
                      className={`w-[65px] h-[80px] mt-[22px] mb-0.5 border-y-2 border-l-2 border-gray-500 text-base text-gray-700 flex-col`}
                    >
                      <div>MTG</div>
                      <div>ﾙｰﾑ</div>
                      <div>1</div>
                    </div>
                    <div
                      className={`w-[65px] h-[100px] my-0.5 mr-0.5 border-2 border-gray-500 text-gray-700 text-base flex-col pt-[15px]`}
                    >
                      <div>MTG</div>
                      <div>ﾙｰﾑ</div>
                      <div>2</div>
                    </div>
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

export default FirstTowerFourFloor;
