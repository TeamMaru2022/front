import React from "react";
import useMedia from "use-media";
import FirstTowerFourFloor from "../components/FirstTower/FirstTowerFourFloor";
import FirstTowerThreeFloor from "../components/FirstTower/FirstTowerThreeFloor";
import FirstTowerTwoFloor from "../components/FirstTower/FirstTowerTwoFloor";
import FloorMapMobile from "../components/FloorMapMobile";

const FirstTower = () => {
  // floor：選択している階数を保持する変数（初期値：２）
  const [floor, setFloor] = React.useState(2);
  const max800 = useMedia({ maxWidth: "800px" });
  const max750 = useMedia({ maxWidth: "750px" });
  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div
          className={`${
            max750 ? `p-3` : `p-3`
          } border-b-2 text-xl font-medium flex bg-white `}
        >
          <a
            href="/"
            className={`${max750 ? `w-1/5` : `w-[150px]`}`}
          >
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          {max750 ? (
            ``
          ) : (
            <>
              <a
                href="/first"
                className="mx-3 px-4 pt-0.5  rounded-lg bg-gray-300 border-b-2 border-gray-400"
              >
                1号館
              </a>
              <a
                href="/second"
                className="mx-3 px-4 pt-0.5  rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
              >
                2号館
              </a>
              <a
                href="/third"
                className="mx-3 px-4 pt-0.5 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
              >
                3号館
              </a>
            </>
          )}
        </div>
      </header>
      {max750 ? (
        <FloorMapMobile tower="1" />
      ) : (
        // mobileの時
        <>
          <div className={`flex flex-row justify-around`}>
            <div className={`flex-col mt-20`}>
              {floor === 2 && <FirstTowerTwoFloor />}
              {floor === 3 && <FirstTowerThreeFloor />}
              {floor === 4 && <FirstTowerFourFloor />}
              <div className={`flex`}>
                <div
                  className={`h-[28px] w-[28px] bg-[#ff7f7f] ml-[60px]`}
                ></div>
                <div className={`text-lg`}>・・・予約・授業</div>
                <div
                  className={`h-[28px] w-[28px] bg-[#ffea7f] ml-[20px]`}
                ></div>
                <div className={`text-lg`}>・・・利用中</div>
              </div>
              <div className={` mt-8 flex place-content-center`}>
                <div
                  className={`text-[#FF8093] text-2xl font-bold border-b-2 border-[#FF8093]`}
                >
                  １号館の予約一覧
                </div>
              </div>
            </div>
            <div
              className={`w-[510px] h-auto mt-[20px] relative flex place-items-end justify-center`}
            >
              <img
                src="./images/FirstTower_bg.png"
                alt="1号館"
                className={``}
              />
              <div className={`absolute w-4/5`}>
                {/* 4階 */}
                <div
                  className={`${
                    max800 ? `my-[20px] text-4xl` : `my-[30px] text-5xl`
                  } font-bold rounded-xl border-2 text-center ${
                    floor === 4
                      ? `bg-[#ffffff] text-[#f4896e] border-white`
                      : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
                  }`}
                  onClick={() => setFloor((floor) => 4)}
                >
                  4F
                </div>

                {/* ３階 */}
                <div
                  className={`${
                    max800 ? `my-[20px] text-4xl` : `my-[30px] text-5xl`
                  } font-bold rounded-xl border-2 text-center ${
                    floor === 3
                      ? `bg-[#ffffff] text-[#f4896e] border-white`
                      : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
                  }`}
                  onClick={() => setFloor((floor) => 3)}
                >
                  3F
                </div>

                {/* 2階 */}
                <div
                  className={`${
                    max800 ? `my-[20px] text-4xl` : `my-[30px] text-5xl`
                  } font-bold rounded-xl  text-center border-2 border-white ${
                    floor === 2
                      ? `bg-[#ffffff] text-[#f4896e] border-white`
                      : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
                  }`}
                  onClick={() => setFloor((floor) => 2)}
                >
                  2F
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FirstTower;
