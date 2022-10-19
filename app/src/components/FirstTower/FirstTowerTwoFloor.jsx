import React from "react";
import Load from "../Load";

const FirstTowerTwoFloor = () => {
  return (
    <div className={`flex flex-col`}>
      <div className={`w-[345px] h-100%`}>
        <Load room="1200" />
        <div className={`flex-row text-center`}>
          <div className={`flex border-2 border-black`}>
            <div className={`flex-col w-[90px]`}>
              <div
                className={`h-[160px] border-2 border-black mx-0.5 mt-0.5 text-center text-sm py-[30px] flex-col`}
              >
                <div>保健室/</div>
                <div>学生相談室/</div>
                <div>社会貢献・</div>
                <div>国際交流</div>
                <div>センター</div>
              </div>
              <div
                id="1204"
                className={`h-[96px] border-x-2 border-black mx-0.5 py-[10px] flex-col`}
              >
                <div>1204</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1205"
                className={`h-[96px] border-2 border-black mx-0.5 mb-0.5 py-[10px] flex-col`}
              >
                <div>1205</div>
                <div>ノートPC</div>
                <div>対応教室</div>
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
                id="1206"
                className={`w-[90px] h-[90px] mx-auto border-2 border-black mt-[40px] py-[5px] flex-col`}
              >
                <div>1206</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
            </div>
            <div className={`flex-col w-[90px]`}>
              <div
                id="1201"
                className={`h-[117px] border-2 border-black mx-0.5 mt-0.5 py-[20px] flex-col`}
              >
                <div>1201</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1202"
                className={`h-[117px] border-x-2 border-black mx-0.5 py-[20px] flex-col`}
              >
                <div>1202</div>
                <div>ノートPC</div>
                <div>対応教室</div>
              </div>
              <div
                id="1203"
                className={`h-[117px] border-2 border-black mx-0.5 mb-0.5 py-[20px] flex-col`}
              >
                <div>1203</div>
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

export default FirstTowerTwoFloor;
