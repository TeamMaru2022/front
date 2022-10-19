import React from "react";
import Load from "../Load";

const SecondTowerTwoFloor = () => {
  return (
    <div className={`w-[360px] h-100% pb-3`}>
      <Load room="2200" />
      <div className={`flex flex-row text-center`}>
        {/*  */}
        <div
          className={`flex flex-row w-[280px] border-y-2 border-l-2 border-black`}
        >
          <div className={`flex-col `}>
            <div
              id="2203"
              className={`w-[120px] h-[120px] border-2 border-black mt-0.5 ml-0.5 px-1 py-[48px]`}
            >
              2203実習室
            </div>
            <div
              id="2202"
              className={`w-[120px] h-[240px] border-x-2 border-b-2 border-black mb-0.5 ml-0.5 px-1 py-[100px]`}
            >
              2202実習室
            </div>
          </div>
          <div className={`flex-col`}>
            <div className={`w-[40px] h-[240px] m-0.5 px-2 py-1`}></div>
            <div
              className={`w-[155px] h-[116px] border-2 border-black my-0.5 ml-0.5 absolute py-[45px]`}
            >
              撮影スタジオ
            </div>
          </div>
          <div
            id="2201"
            className={`w-[120px] h-[220px] border-2 border-black m-0.5 px-2 py-[90px]`}
          >
            2201実習室
          </div>
        </div>
        <div className={`flex-col`}>
          <div
            className={`w-[80px] h-[120px] border-l-2 border-b-2 border-black px-2`}
          ></div>
          <div
            className={`w-[80px] h-[248px] border-r-2 border-b-2 border-black flex flex-col`}
          >
            <div className={`w-[80px] h-[100px] flex justify-between`}>
              <img
                className={`h-[103px] mt-0.5`}
                src="./images/SecondTower_stairs.png"
                alt="階段"
              />
              <div className={`flex-col mr-0.5`}>
                <div
                  className={`w-[33px] h-[51px] border-2 border-black mt-0.5 `}
                >
                  WC (女)
                </div>
                <div
                  className={`w-[33px] h-[52px] border-x-2 border-black mr-0.5`}
                >
                  WC (男)
                </div>
              </div>
            </div>
            <div className={`flex flex-row-reverse w-[80px]`}>
              <div
                className={`w-[33px] h-[27.5px] border-x-2 border-t-2 border-black mr-1`}
              >
                EV
              </div>
            </div>

            <div
              className={`w-[76px] h-[117px] border-y-2 border-r-2 border-black mr-0.5 mb-0.5 px-3 py-[20px] text-center whitespace-pre-line`}
            >マルチメディア工房</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SecondTowerTwoFloor;
