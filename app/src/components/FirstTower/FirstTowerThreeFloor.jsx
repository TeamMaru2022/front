import React from "react";
import Load from "../Load";

const FirstTowerThreeFloor = () => {
  return (
    <div>
      <div className={`w-[345px] h-100%`}>
        <Load room="1300" />
        <div className={`flex-row text-center`}>
          <div className={`flex border-2 border-black`}>
            <div className={`flex-col w-[90px]`}>
              <div
                id="1305"
                className={`h-[88px] border-2 border-black mx-0.5 mt-0.5 py-[15px] flex-col`}
              >
                <div>1305</div>
                <div>教室</div>
              </div>
              <div
                id="1306"
                className={`h-[88px] border-x-2 border-b-2 border-black mx-0.5 py-[15px] flex-col`}
              >
                <div>1306</div>
                <div>教室</div>
              </div>
              <div
                id="1307"
                className={`h-[88px] border-x-2 border-black mx-0.5 py-[15px] flex-col`}
              >
                <div>1307</div>
                <div>教室</div>
              </div>
              <div
                id="1308"
                className={`h-[88px] border-2 border-black mx-0.5 mb-0.5 py-[15px] flex-col`}
              >
                <div>1308</div>
                <div>教室</div>
              </div>
            </div>
            <div className={`flex-col w-[160px]`}>
              <div
                className={`w-[90px] h-[90px] mx-auto border-2 border-black m-1 flex`}
              >
                <div className={`w-[44px]`}>WC（男）</div>
                <div
                  className={`w-[44px] h-[65px] border-l-2 border-b-2 border-black`}
                >
                  WC（女）
                </div>
              </div>
              <div
                id="1309"
                className={`w-[90px] h-[90px] mx-auto border-2 border-black mt-[40px] py-[15px] flex-col`}
              >
                <div>1309</div>
                <div>教室</div>
              </div>
            </div>

            <div className={`flex-col w-[90px]`}>
              <div
                id="1301"
                className={`h-[88px] border-2 border-black mx-0.5 mt-0.5 py-[10px] flex-col`}
              >
                <div>1301</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1302"
                className={`h-[88px] border-x-2 border-b-2 border-black mx-0.5 py-[10px] flex-col`}
              >
                <div>1302</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1303"
                className={`h-[88px] border-x-2 border-black mx-0.5 py-[10px] flex-col`}
              >
                <div>1303</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1304"
                className={`h-[88px] border-2 border-black mx-0.5 mb-0.5 py-[10px] flex-col`}
              >
                <div>1304</div>
                <div>ノートPC</div>
                <div>対応教室</div>
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

export default FirstTowerThreeFloor;
