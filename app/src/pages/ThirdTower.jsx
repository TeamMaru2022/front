import React from "react";
import useMedia from "use-media";
import ThirdTowerTwoFloor from "../components/ThirdTower/ThirdTowerTwoFloor";
import ThirdTowerThreeFloor from "../components/ThirdTower/ThirdTowerThreeFloor";
import ThirdTowerFourFloor from "../components/ThirdTower/ThirdTowerFourFloor";
import ThirdTowerFiveFloor from "../components/ThirdTower/ThirdTowerFiveFloor";
import ThirdTowerSixFloor from "../components/ThirdTower/ThirdTowerSixFloor";
import ThirdTowerSevenFloor from "../components/ThirdTower/ThirdTowerSevenFloor";
import FloorMapMobile from "../components/FloorMapMobile";

const ThirdTower = () => {
  const [floor, setFloor] = React.useState(2);
  const max750 = useMedia({ maxWidth: "750px" });
  const max800 = useMedia({ maxWidth: "800px" });
  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div
          className={`${
            max750 ? `p-3` : `p-3`
          } border-b-2 text-xl font-medium flex bg-white `}
        >
          <a href="/" className={`${max750 ? `w-1/5` : `w-[150px]`}`}>
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          {max750 ? (
            ``
          ) : (
            <>
              <a
                href="/first"
                className="mx-3 px-4 pt-0.5  rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
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
                className="mx-3 px-4 pt-0.5 rounded-lg bg-gray-300 border-b-2 border-gray-400"
              >
                3号館
              </a>
            </>
          )}
        </div>
      </header>
      {max750 ? (
        <FloorMapMobile tower="3" />
      ) : (
        // mobileの時
        <>
          <div className={`flex flex-row justify-around`}>
            <div className={`flex-col mt-[100px]`}>
              {floor === 2 && <ThirdTowerTwoFloor />}
              {floor === 3 && <ThirdTowerThreeFloor />}
              {floor === 4 && <ThirdTowerFourFloor />}
              {floor === 5 && <ThirdTowerFiveFloor />}
              {floor === 6 && <ThirdTowerSixFloor />}
              {floor === 7 && <ThirdTowerSevenFloor />}
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
                  ３号館の予約一覧
                </div>
              </div>
            </div>

            <div
              className={`w-[400px] mt-[20px] h-auto relative flex place-items-end justify-center`}
            >
              <img src="./images/ThirdTower_bg.png" alt="3号館" />
              <div className={`absolute w-5/6 mb-[180px]`}>
                {/* 7階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black bg-[#ffffff] ${
                    floor === 7
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 7)}
                >
                  7F
                </div>

                {/* 6階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black bg-[#ffffff] ${
                    floor === 6
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 6)}
                >
                  6F
                </div>

                {/* 5階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black bg-[#ffffff] ${
                    floor === 5
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 5)}
                >
                  5F
                </div>

                {/* 4階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black bg-[#ffffff] ${
                    floor === 4
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 4)}
                >
                  4F
                </div>

                {/* ３階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black bg-[#ffffff] ${
                    floor === 3
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 3)}
                >
                  3F
                </div>

                {/* 2階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black bg-[#ffffff]  ${
                    floor === 2
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
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

export default ThirdTower;
