import React from "react";

const SecondTowerTwoFloor = () => {
  return (
    <div className={`w-[360px] h-100% pb-3`}>
      <div className={`flex flex-row text-center`}>
        <div
          className={`flex flex-row w-[280px] border-y-2 border-l-2 border-gray-400 text-lg`}
        >
          <div className={`flex-col `}>
            <div
              id="2203"
              className={`w-[120px] h-[120px] border-2 border-black hover:bg-gray-200 mt-0.5 ml-0.5 px-1 py-[30px]`}
            >
              <div>2203</div>
            <div>実習室</div>
            </div>
            <div
              id="2202"
              className={`w-[120px] h-[240px] border-x-2 border-b-2 border-black hover:bg-gray-200 mb-0.5 ml-0.5 px-1 py-[80px]`}
            >
              <div>2202</div>
            <div>実習室</div>
            </div>
          </div>
          <div className={`flex-col`}>
            <div className={`w-[40px] h-[240px] m-0.5 px-2 py-1`}></div>
            <div
              className={`w-[155px] h-[116px] border-2 border-gray-500 text-gray-700 text-base my-0.5 ml-0.5 absolute py-[45px]`}
            >
              撮影スタジオ
            </div>
          </div>
          <div
            id="2201"
            className={`w-[120px] h-[220px] border-2 border-black hover:bg-gray-200 m-0.5 px-2 py-[75px]`}
          >
            <div>2201</div>
            <div>実習室</div>
          </div>
        </div>
        <div className={`flex-col`}>
          <div
            className={`w-[80px] h-[120px] border-l-2 border-b-2 border-gray-400 px-2`}
          ></div>
          <div
            className={`w-[80px] h-[248px] border-r-2 border-b-2 border-gray-400 flex flex-col`}
          >
            <div className={`w-[80px] h-[100px] flex justify-between`}>
              <img
                className={`h-[103px] mt-0.5`}
                src="./images/SecondTower_stairs.png"
                alt="階段"
              />
              <div className={`flex-col mr-0.5`}>
                <div
                  className={`w-[33px] h-[51px] border-2 border-gray-500 text-gray-700 mt-0.5 `}
                >
                  WC (女)
                </div>
                <div
                  className={`w-[33px] h-[52px] border-x-2 border-gray-500 text-gray-700 mr-0.5`}
                >
                  WC (男)
                </div>
              </div>
            </div>
            <div className={`flex flex-row-reverse w-[80px]`}>
              <div
                className={`w-[33px] h-[28px] border-x-2 border-t-2 border-gray-500 text-gray-700 mr-1`}
              >
                EV
              </div>
            </div>

            <div
              className={`w-[76px] h-[117px] border-y-2 border-r-2 border-gray-500 text-gray-700 mr-0.5 mb-0.5 px-3 py-[20px] text-center whitespace-pre-line`}
            >
              マルチメディア工房
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTowerTwoFloor;
