import React from "react";

const SecondTowerFourFloor = () => {
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
        <div className={`flex flex-col`}></div>
        <div className={`w-[360px] h-100% pb-3`}>
          <div className={`flex flex-row text-center`}>
            <div
              className={`flex flex-row w-[280px] border-y-2 border-l-2 border-gray-400 text-lg`}
            >
              <div className={`flex-col `}>
                <div
                  onClick={Set_room}
                  id="2403"
                  className={`w-[120px] h-[115px] border-2 border-black hover:bg-gray-200 mt-0.5 ml-0.5 px-1 py-[30px]`}
                >
                  <div>2403</div>
                  <div>実習室</div>
                </div>
                <div
                  onClick={Set_room}
                  id="2404"
                  className={`w-[120px] h-[115px] border-x-2 border-black hover:bg-gray-200 ml-0.5 px-1 py-[30px]`}
                >
                  <div>2404</div>
                  <div>実習室</div>
                </div>
                <div
                  onClick={Set_room}
                  id="2405"
                  className={`w-[120px] h-[130px] border-2 border-black hover:bg-gray-200 mb-0.5 ml-0.5 px-2 py-[20px]`}
                >
                  <div>2405</div>
                  <div>ノートPC</div>
                  <div>対応教室</div>
                </div>
              </div>
              <div className={`flex-col`}>
                <div className={`w-[40px] h-[240px] m-0.5 px-2 py-1`}></div>
                <div
                  onClick={Set_room}
                  id="2402"
                  className={`w-[153px] h-[116px] border-2 border-black hover:bg-gray-200 m-0.5 absolute py-[30px]`}
                >
                  <div>2402</div>
                  <div>実習室</div>
                </div>
              </div>
              <div
                onClick={Set_room}
                id="2401"
                className={`w-[120px] h-[220px] border-2 border-black hover:bg-gray-200 m-0.5 px-2 py-[80px]`}
              >
                <div>2401</div>
                <div>実習室</div>
              </div>
            </div>
            <div className={`flex-col`}>
              <div
                className={`w-[80px] h-[120px] border-l-2 border-b-2 border-gray-400 px-2`}
              ></div>
              <div
                className={`w-[80px] h-[248px] border-r-2 border-b-2 border-gray-400 flex justify-between`}
              >
                <div className={`w-[40px] h-[252px]`}>
                  <img
                    className={`h-[103px] mt-0.5`}
                    src="./images/SecondTower_stairs.png"
                    alt="階段"
                  />
                </div>
                <div className={`w-[33px] flex-col mr-0.5`}>
                  <div
                    className={`w-[33px] h-[51px] border-2 border-gray-500 text-gray-700 mt-0.5 mr-0.5`}
                  >
                    WC (女)
                  </div>
                  <div
                    className={`w-[33px] h-[47px] border-x-2 border-gray-500 text-gray-700 mr-0.5`}
                  >
                    WC (男)
                  </div>
                  <div
                    className={`w-[33px] h-[29.5px] border-2 border-gray-500 text-gray-700 mr-0.5`}
                  >
                    EV
                  </div>
                  <div
                    className={`w-[33px] h-[115px] border-x-2 border-b-2 border-gray-500 text-gray-700 mr-0.5 mb-0.5`}
                  ></div>
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

export default SecondTowerFourFloor;