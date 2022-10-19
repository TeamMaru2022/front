import React from "react";
import Load from "../Load";

const SecondTowerSixFloor = () => {
  return (
    <div className={`w-[360px] h-100% pb-3`}>
      <Load room="2600" />
      <div className={`flex flex-row text-center`}>
        {/*  */}
        <div
          className={`flex flex-row w-[280px] border-y-2 border-l-2 border-black`}
        >
          <div className={`flex-col`}>
            <div className={`flex h-[200px]`}>
              <div
                id="2601"
                className={`w-[118px] h-[220px] border-2 border-black m-0.5 px-2 py-[70px] flex-col`}
              >
                <div>2601</div>
                <div>開放実習室</div>
              </div>
              <div className={`w-[30px] h-[200px] m-0.5 px-2 py-1`}></div>
              <div className={`flex-col mr-0.5`}>
                <div
                  id="2602"
                  className={`w-[120px] h-[110px] border-2 border-black mt-0.5 px-1 py-[25px] flex-col`}
                >
                  <div>2602</div>
                  <div>実習室</div>
                </div>
                <div
                  id="2603"
                  className={`w-[120px] h-[110px] border-x-2 border-b-2 border-black mb-0.5 px-1 py-[25px] flex-col`}
                >
                  <div>2603</div>
                  <div>実習室</div>
                </div>
              </div>
            </div>
            <div className={`w-[280] h-[164px] px-auto pt-[90px]`}>休憩室</div>
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

export default SecondTowerSixFloor;
