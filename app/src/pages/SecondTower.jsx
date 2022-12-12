import React from "react";
import useMedia from "use-media";
import SecondTowerTwoFloor from "../components/SecondTower/SecondTowerTwoFloor";
import SecondTowerThreeFloor from "../components/SecondTower/SecondTowerThreeFloor";
import SecondTowerFourFloor from "../components/SecondTower/SecondTowerFourFloor";
import SecondTowerFiveFloor from "../components/SecondTower/SecondTowerFiveFloor";
import SecondTowerSixFloor from "../components/SecondTower/SecondTowerSixFloor";
import FloorMapMobile from "../components/FloorMapMobile";
import Reserve from "../components/function/Reserve";

const SecondTower = () => {
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
                className="mx-3 px-4 pt-1.5 rounded-lg bottom-0 hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
              >
                1号館
              </a>
              <a
                href="/second"
                className="mx-3 px-4 pt-1.5  rounded-lg bg-gray-300 border-b-2 border-gray-400"
              >
                2号館
              </a>
              <a
                href="/third"
                className="mx-3 px-4 pt-1.5 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
              >
                3号館
              </a>
            </>
          )}
        </div>
      </header>
      {max750 ? (
        <FloorMapMobile tower="2" />
      ) : (
        // mobileの時
        <>
          <div className={`flex flex-row justify-around`}>
            <div className={`flex-col mt-20`}>
              {floor === 2 && <SecondTowerTwoFloor />}
              {floor === 3 && <SecondTowerThreeFloor />}
              {floor === 4 && <SecondTowerFourFloor />}
              {floor === 5 && <SecondTowerFiveFloor />}
              {floor === 6 && <SecondTowerSixFloor />}
              <div className={`flex`}>
                <div
                  className={`h-[28px] w-[28px] bg-[#ffbfc8] ml-[60px]`}
                ></div>
                <div className={`text-lg`}>・・・予約・授業</div>
                <div
                  className={`h-[28px] w-[28px] bg-[#fff4bf] ml-[20px]`}
                ></div>
                <div className={`text-lg`}>・・・利用中</div>
              </div>
              <div className={` mt-8 flex-col place-content-center`}>
                <div
                  className={`text-[#FF8093] text-2xl font-bold border-b-2 border-[#FF8093] text-center`}
                >
                  ２号館の予約一覧
                </div>
                <Reserve tower="2" />
              </div>
            </div>
            <div className={`w-[425px] h-[542px] relative flex place-items-end justify-center mt-10`}>
              <img
                src="./images/school_buildings/SecondTower_bg.png"
                alt="2号館"
              />
              <div className={`absolute w-5/6 mb-[155px]`}>
                {/* 6階 */}
                <div
                  className={`${
                    max800 ? `my-[10px] text-4xl` : `my-[7px] text-5xl`
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black ${
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
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black ${
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
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black ${
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
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black ${
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
                  } font-bold rounded-xl border-2 text-center text-[#38D1F0] border-black ${
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

export default SecondTower;
