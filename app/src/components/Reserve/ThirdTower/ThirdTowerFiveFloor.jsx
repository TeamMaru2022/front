import React from "react";

const ThirdTowerFiveFloor = () => {
  const [room, setRoom] = React.useState("");

  // 教室をクリックしたときのイベント
  const Set_room = (e) => {
    var id;
    id = e.currentTarget.id;
    setRoom((room) => id);
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
                    id="3501"
                    className={`w-[195px]  border-2 border-black hover:bg-gray-200 m-0.5 py-[40px]`}
                  >
                    <div>3501</div>
                    <div>ノートPC</div>
                    <div>対応教室</div>
                  </div>
                  <div
                    onClick={Set_room}
                    id="3502"
                    className={`w-[195px] border-2 border-black hover:bg-gray-200 m-0.5 py-[40px]`}
                  >
                    <div>3502</div>
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
          className={`flex text-[40px] font-bold place-content-center h-[60px] mb-[10px]`}
        >
          {room}
        </div>
        <img
          src="../../images/projector.png"
          alt="projector"
          className={`object-contain flex`}
        />
      </div>
    </>
  );
};

export default ThirdTowerFiveFloor;
