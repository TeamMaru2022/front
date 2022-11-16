import React from "react";

const SecondTowerSixFloor = () => {
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
          <div className={`w-[360px] h-100% pb-3`}>
            <div className={`flex flex-row text-center`}>
              <div
                className={`flex flex-row w-[280px] border-y-2 border-l-2 border-gray-400 text-lg`}
              >
                <div className={`flex-col`}>
                  <div className={`flex h-[200px]`}>
                    <div
                      onClick={Set_room}
                      onMouseEnter={Hover_room}
                      onMouseLeave={Leave_room}
                      id="2601"
                      className={`w-[118px] h-[220px] border-2 border-black hover:bg-gray-200 m-0.5 px-2 py-[70px] flex-col`}
                    >
                      <div>2601</div>
                      <div>開放実習室</div>
                    </div>
                    <div className={`w-[30px] h-[200px] m-0.5 px-2 py-1`}></div>
                    <div className={`flex-col mr-0.5`}>
                      <div
                        onClick={Set_room}
                        onMouseEnter={Hover_room}
                        onMouseLeave={Leave_room}
                        id="2602"
                        className={`w-[120px] h-[110px] border-2 border-black hover:bg-gray-200 mt-0.5 px-1 py-[25px] flex-col`}
                      >
                        <div>2602</div>
                        <div>実習室</div>
                      </div>
                      <div
                        onClick={Set_room}
                        onMouseEnter={Hover_room}
                        onMouseLeave={Leave_room}
                        id="2603"
                        className={`w-[120px] h-[110px] border-x-2 border-b-2 border-black hover:bg-gray-200 mb-0.5 px-1 py-[25px] flex-col`}
                      >
                        <div>2603</div>
                        <div>実習室</div>
                      </div>
                    </div>
                  </div>
                  <div className={`w-[280] h-[164px] px-auto pt-[90px]`}>
                    休憩室
                  </div>
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
                      className={`w-[33px] h-[51px] border-2 border-gray-500 mt-0.5 mr-0.5`}
                    >
                      WC (女)
                    </div>
                    <div
                      className={`w-[33px] h-[47px] border-x-2 border-gray-500 mr-0.5`}
                    >
                      WC (男)
                    </div>
                    <div
                      className={`w-[33px] h-[29.5px] border-2 border-gray-500 mr-0.5`}
                    >
                      EV
                    </div>
                    <div
                      className={`w-[33px] h-[115px] border-x-2 border-b-2 border-gray-500 mr-0.5 mb-0.5`}
                    ></div>
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

export default SecondTowerSixFloor;
