import React from "react";
import Load from "../Load";

const SecondTowerThreeFloor = () => {
  return (
    <div className={`w-[360px] h-100% pb-3`}>
      <Load room="2300" />
      <div className={`flex flex-row text-center`}>
        {/*  */}
        <div
          className={`flex flex-row w-[280px] border-y-2 border-l-2 border-black`}
        >
          <div className={`flex-col `}>
            <div
              id="2302"
              className={`w-[120px] h-[122px] border-2 border-black mt-0.5 ml-0.5 px-1 py-[32px]`}
            >
              <div>2302</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div
              id="2303"
              className={`w-[120px] h-[122px] border-x-2 border-black ml-0.5 px-1 py-[32px]`}
            >
              <div>2303</div>
              <div>ノートPC</div>
              <div>対応教室</div>
            </div>
            <div
              id="powder_room"
              className={`w-[120px] h-[116px] border-2 border-black mb-0.5 mx-0.5 px-1 py-[32px]`}
            >
              女子学生専用パウダールーム
            </div>
          </div>
          <div className={`flex-col`}>
            <div className={`w-[40px] h-[240px] m-0.5 px-2 py-1`}></div>
            <div
              id="library"
              className={`w-[153px] h-[116px] border-2 border-black my-0.5 absolute py-[45px]`}
            >
              図書室
            </div>
          </div>
          <div
            id="2301"
            className={`w-[120px] h-[220px] border-2 border-black m-0.5 px-2 py-[70px]`}
          >
            <div>2301</div>
            <div>ノートPC</div>
            <div>対応教室</div>
          </div>
        </div>
        <div className={`flex-col`}>
          <div
            className={`w-[80px] h-[120px] border-l-2 border-b-2 border-black px-2`}
          ></div>
          <div
            className={`w-[80px] h-[248px] border-r-2 border-b-2 border-black flex justify-between`}
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
                className={`w-[33px] h-[51px] border-2 border-black mt-0.5 mr-0.5`}
              >
                WC (女)
              </div>
              <div
                className={`w-[33px] h-[47px] border-x-2 border-black mr-0.5`}
              >
                WC (男)
              </div>
              <div
                className={`w-[33px] h-[29.5px] border-2 border-black mr-0.5`}
              >
                EV
              </div>
              <div
                className={`w-[33px] h-[115px] border-x-2 border-b-2 border-black mr-0.5 mb-0.5`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTowerThreeFloor;
