import React from "react";
import Load from "../Load";

const ThirdTowerFiveFloor = () => {
  return (
    <div className={`h-100% mb-3`}>
      <Load room="3500" />
      <div className={`flex-row text-center`}>
        <div className={`w-[390px] h-[274px] border-2 border-gray-400 text-lg`}>
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
            <div className={`w-[60px] border-2 border-gray-500 text-gray-700 m-0.5`}>
              <img
                className={`p-0.5`}
                src="./images/ThirdTower_stairs.png"
                alt="階段"
              />
            </div>
          </div>
          <div className={`flex flex-row align-middle h-[180px]`}>
            <div
              id="3501" className={`w-[195px]  border-2 border-black m-0.5 py-[40px]`}>
              <div>3501</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div id="3502" className={`w-[195px] border-2 border-black m-0.5 py-[40px]`}>
              <div>3502</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTowerFiveFloor;
