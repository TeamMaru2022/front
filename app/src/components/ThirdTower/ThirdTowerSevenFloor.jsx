import React from "react";
import Load from "../Load";

const ThirdTowerSevenFloor = () => {
  return (
    <div className={`h-100% mb-3`}>
      <Load room="3700" />
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
            <div id="3701" className={`w-[130px]  border-2 border-black m-0.5 py-[40px]`}>
              <div>3701</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div id="3702" className={`w-[130px] border-2 border-black m-0.5 py-[40px]`}>
              <div>3702</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div id="3703" className={`w-[130px] border-2 border-black m-0.5 py-[40px]`}>
              <div>3703</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTowerSevenFloor;
