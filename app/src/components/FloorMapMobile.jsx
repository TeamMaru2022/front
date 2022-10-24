import React from "react";
import FirstTowerFourFloor from "../components/FirstTower/FirstTowerFourFloor";
import FirstTowerThreeFloor from "../components/FirstTower/FirstTowerThreeFloor";
import FirstTowerTwoFloor from "../components/FirstTower/FirstTowerTwoFloor";
import SecondTowerTwoFloor from "../components/SecondTower/SecondTowerTwoFloor";
import SecondTowerThreeFloor from "../components/SecondTower/SecondTowerThreeFloor";
import SecondTowerFourFloor from "../components/SecondTower/SecondTowerFourFloor";
import SecondTowerFiveFloor from "../components/SecondTower/SecondTowerFiveFloor";
import SecondTowerSixFloor from "../components/SecondTower/SecondTowerSixFloor";
import ThirdTowerTwoFloor from "../components/ThirdTower/ThirdTowerTwoFloor";
import ThirdTowerThreeFloor from "../components/ThirdTower/ThirdTowerThreeFloor";
import ThirdTowerFourFloor from "../components/ThirdTower/ThirdTowerFourFloor";
import ThirdTowerFiveFloor from "../components/ThirdTower/ThirdTowerFiveFloor";
import ThirdTowerSixFloor from "../components/ThirdTower/ThirdTowerSixFloor";
import ThirdTowerSevenFloor from "../components/ThirdTower/ThirdTowerSevenFloor";

const FloorMapMobile = (props) => {
  // floor: 何号館何階かを保持する変数
  const [floor, setFloor] = React.useState(props.tower + "2");

  // tower: 何号館かを保持する変数
  const [tower, setTower] = React.useState(props.tower);

  return (
    <>
      <div className={`p-6 pt-6 pb-4 font-bold`}>空き教室を探す</div>

      {/* １号館 */}
      <div className={`flex flex-col border-2 m-3 text-center bg-[#F4F5F5] `}>
        <div
          className={`w-100% border-2 border-black m-1 text-xl font-bold ${
            tower === "1"
              ? "text-[#FFFFFF] bg-[#7FD4FF]"
              : "text-[#7FD4FF] bg-[#FFFFFF]"
          } `}
        >
          １号館
        </div>
        <div className={`flex`}>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "12"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "12");
              setTower((tower) => "1");
            }}
          >
            2F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "13"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "13");
              setTower((tower) => "1");
            }}
          >
            3F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "14"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "14");
              setTower((tower) => "1");
            }}
          >
            4F
          </div>
        </div>
      </div>

      {/* ２号館 */}
      <div className={`flex flex-col border-2 m-3 text-center bg-[#F4F5F5] `}>
        <div
          className={`w-100% border-2 border-black m-1 text-xl font-bold ${
            tower === "2"
              ? "text-[#FFFFFF] bg-[#7FD4FF]"
              : "text-[#7FD4FF] bg-[#FFFFFF]"
          } `}
        >
          ２号館
        </div>
        <div className={`flex`}>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "22"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "22");
              setTower((tower) => "2");
            }}
          >
            2F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "23"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "23");
              setTower((tower) => "2");
            }}
          >
            3F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "24"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "24");
              setTower((tower) => "2");
            }}
          >
            4F
          </div>
        </div>
        <div className={`flex`}>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "25"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "25");
              setTower((tower) => "2");
            }}
          >
            5F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "26"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "26");
              setTower((tower) => "2");
            }}
          >
            6F
          </div>
          <div className={`w-1/3 m-1 text-2xl font-bold`}></div>
        </div>
      </div>
      {/* ３号館 */}
      <div className={`flex flex-col border-2 m-3 text-center bg-[#F4F5F5] `}>
        <div
          className={`w-100% border-2 border-black m-1 text-xl font-bold ${
            tower === "3"
              ? "text-[#FFFFFF] bg-[#7FD4FF]"
              : "text-[#7FD4FF] bg-[#FFFFFF]"
          } `}
        >
          ３号館
        </div>
        <div className={`flex`}>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "32"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "32");
              setTower((tower) => "3");
            }}
          >
            2F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "33"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "33");
              setTower((tower) => "3");
            }}
          >
            3F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "34"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "34");
              setTower((tower) => "3");
            }}
          >
            4F
          </div>
        </div>
        <div className={`flex`}>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "35"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "35");
              setTower((tower) => "3");
            }}
          >
            5F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "36"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "36");
              setTower((tower) => "3");
            }}
          >
            6F
          </div>
          <div
            className={`w-1/3 border-2 border-black m-1 text-2xl font-bold ${
              floor === "37"
                ? "text-[#FFFFFF] bg-[#7FD4FF]"
                : "text-[#7FD4FF] bg-[#FFFFFF]"
            }`}
            onClick={() => {
              setFloor((floor) => "37");
              setTower((tower) => "3");
            }}
          >
            7F
          </div>
        </div>
      </div>
      <div className={`flex place-content-center mt-10`}>
        {floor === "12" && <FirstTowerTwoFloor />}
        {floor === "13" && <FirstTowerThreeFloor />}
        {floor === "14" && <FirstTowerFourFloor />}
        {floor === "22" && <SecondTowerTwoFloor />}
        {floor === "23" && <SecondTowerThreeFloor />}
        {floor === "24" && <SecondTowerFourFloor />}
        {floor === "25" && <SecondTowerFiveFloor />}
        {floor === "26" && <SecondTowerSixFloor />}
        {floor === "32" && <ThirdTowerTwoFloor />}
        {floor === "33" && <ThirdTowerThreeFloor />}
        {floor === "34" && <ThirdTowerFourFloor />}
        {floor === "35" && <ThirdTowerFiveFloor />}
        {floor === "36" && <ThirdTowerSixFloor />}
        {floor === "37" && <ThirdTowerSevenFloor />}
      </div>
      <div className={`flex mb-10`}>
        <div className={`h-[28px] w-[28px] bg-[#ffbfc8] ml-[60px]`}></div>
        <div className={`text-lg`}>・・・予約・授業</div>
        <div className={`h-[28px] w-[28px] bg-[#fff4bf] ml-[20px]`}></div>
        <div className={`text-lg`}>・・・利用中</div>
      </div>
      <div className={` mb-10 flex place-content-center text-center flex-col mx-10`}>
        <div
          className={`text-[#FF8093] text-2xl font-bold border-b-2 border-[#FF8093]`}
        >
          {tower}号館の予約一覧
        </div>
        <div className={`text-center text-2xl my-2`}>【2301】 17:30～18:30</div>
        <div className={`text-center text-2xl my-2`}>【2404】 18:30～19:30</div>
        <div className={`text-center text-2xl my-2`}>【2302】 9:30～10:30</div>
      </div>
    </>
  );
};

export default FloorMapMobile;
