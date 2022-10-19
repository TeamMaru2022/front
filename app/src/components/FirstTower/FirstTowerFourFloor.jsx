import React from "react";
import Load from "../Load";

const FirstTowerFourFloor = () => {
  return (
    <div>
      <div className={` w-[345px] h-100%`}>
        <Load room="1400" />
        <div className={`flex-row text-center`}>
          <div className={`flex justify-between border-2 border-black`}>
            <div className={`flex-col w-[100px]`}>
              <div
                id="1403"
                className={`h-[117px] border-2 border-black mx-0.5 mt-0.5 py-[15px] flex-col`}
              >
                <div>1403</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1404"
                className={`h-[117px] border-x-2 border-black mx-0.5 py-[15px] flex-col`}
              >
                <div>1404</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1405"
                className={`h-[117px] border-2 border-black mx-0.5 mb-0.5 py-[15px] flex-col`}
              >
                <div>1405</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
            </div>
            <div className={`flex-col w-[190px]`}>
              <div
                id="1401"
                className={`h-[125px] mx-0.5 border-x-2 border-t-2 border-black py-[45px]`}
              >
                1401実習室
              </div>
              <div
                id="1402"
                className={`h-[125px] mx-0.5 border-2 border-black py-[45px]`}
              >
                1402実習室
              </div>
              <div className={`flex justify-end h-[90px]`}>
                <div
                  className={`w-[65px] h-[80px] mt-[22px] mb-0.5 border-y-2 border-l-2 border-black flex-col`}
                >
                  <div>MTG</div>
                  <div>ﾙｰﾑ</div>
                  <div>1</div>
                </div>
                <div
                  className={`w-[65px] h-[100px] my-0.5 mr-0.5 border-2 border-black flex-col pt-[15px]`}
                >
                  <div>MTG</div>
                  <div>ﾙｰﾑ</div>
                  <div>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`pb-3`}>
        <img
          className={`w-[90px] ml-[90px]`}
          src="./images/FirstTower_stairs.png"
          alt="階段"
        />
      </div>
    </div>
  );
};

export default FirstTowerFourFloor;
