import React from "react";

const SecondTowerFiveFloor = () => {
  return (
    <div className={`w-[360px] h-100% pb-3`}>
      <div className={`flex flex-row text-center`}>
        <div
          className={`flex flex-row w-[280px] border-y-2 border-l-2 border-gray-400 text-lg`}
        >
          <div className={`flex-col `}>
            <div
              id="2503"
              className={`w-[120px] h-[115px] border-2 border-black hover:bg-gray-200 mt-0.5 ml-0.5 flex-col`}
            >
              <div>2503</div>
              <div>デッサン教室</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div
              id="2504"
              className={`w-[120px] h-[115px] border-x-2 border-black hover:bg-gray-200 ml-0.5 flex-col`}
            >
              <div>2504</div>
              <div>デッサン教室</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div
              id="2505"
              className={`w-[120px] h-[130px] border-2 border-black hover:bg-gray-200 mb-0.5 ml-0.5 px-2 py-[20px]`}
            >
              <div>2505</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
          </div>
          <div className={`flex-col`}>
            <div className={`w-[40px] h-[240px] m-0.5 px-2 py-1`}></div>
            <div
              id="2502"
              className={`w-[153px] h-[116px] border-2 border-black hover:bg-gray-200 m-0.5 absolute py-[25px]`}
            >
              <div>2502</div>
              <div>実習室</div>
            </div>
          </div>
          <div
            id="2501"
            className={`w-[120px] h-[220px] border-2 border-black hover:bg-gray-200 m-0.5 px-2 py-[70px]`}
          >
            <div>2501</div>
            <div>ノートPC</div>
            <div>対応教室</div>
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
                className={`w-[33px] h-[51px] border-2 border-gray-500 text-gray-700 text-base mt-0.5 mr-0.5`}
              >
                WC (女)
              </div>
              <div
                className={`w-[33px] h-[47px] border-x-2 border-gray-500 text-gray-700 text-base mr-0.5`}
              >
                WC (男)
              </div>
              <div
                className={`w-[33px] h-[29.5px] border-2 border-gray-500 text-gray-700 text-base mr-0.5`}
              >
                EV
              </div>
              <div
                className={`w-[33px] h-[115px] border-x-2 border-b-2 border-gray-500 text-gray-700 text-base mr-0.5 mb-0.5`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTowerFiveFloor;
