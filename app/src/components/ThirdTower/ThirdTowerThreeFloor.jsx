import React from "react";
import Load from "../Load";

const ThirdTowerThreeFloor = () => {
  return (
    <div className={`h-100% mb-3`}>
      <Load room="3300" />
      <div className={`flex-row text-center`}>
        <div className={`w-[390px] h-[274px] border-2 border-black`}>
          <div className={`flex flex-row h-[90px] `}>
            <div
              className={`w-[105px] h-[60px] border-2 border-black m-0.5 px-2 py-[13px]`}
            >
              WC(男)
            </div>
            <div
              className={`w-[60px] h-[60px] border-2 border-black m-0.5 px-2 py-[13px]`}
            >
              EV
            </div>
            <div
              className={`w-[60px] h-[60px] border-2 border-black m-0.5 px-2 py-[13px]`}
            >
              EV
            </div>
            <div
              className={`w-[105px] h-[60px] border-2 border-black m-0.5 px-2 py-[13px]`}
            >
              WC(女)
            </div>
            <div className={`w-[60px] border-2 border-black m-0.5`}>
              <img
                className={`p-0.5`}
                src="./images/ThirdTower_stairs.png"
                alt="階段"
              />
            </div>
          </div>
          <div className={`flex flex-row align-middle h-[180px]`}>
            <div id="3301" className={`w-[130px]  border-2 border-black m-0.5 py-[40px]`}>
              <div>3301</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div id="3302" className={`w-[130px] border-2 border-black m-0.5 py-[40px]`}>
              <div>3302</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div id="3303" className={`w-[130px] border-2 border-black m-0.5 py-[40px]`}>
              <div>3303</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTowerThreeFloor;
