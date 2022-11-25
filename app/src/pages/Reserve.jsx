import React from "react";
import { Link } from "react-router-dom";

import FirstTowerFourFloor from "../components/Reserve/FirstTower/FirstTowerFourFloor";
import FirstTowerThreeFloor from "../components/Reserve/FirstTower/FirstTowerThreeFloor";
import FirstTowerTwoFloor from "../components/Reserve/FirstTower/FirstTowerTwoFloor";
import SecondTowerTwoFloor from "../components/Reserve/SecondTower/SecondTowerTwoFloor";
import SecondTowerThreeFloor from "../components/Reserve/SecondTower/SecondTowerThreeFloor";
import SecondTowerFourFloor from "../components/Reserve/SecondTower/SecondTowerFourFloor";
import SecondTowerFiveFloor from "../components/Reserve/SecondTower/SecondTowerFiveFloor";
import SecondTowerSixFloor from "../components/Reserve/SecondTower/SecondTowerSixFloor";
import ThirdTowerTwoFloor from "../components/Reserve/ThirdTower/ThirdTowerTwoFloor";
import ThirdTowerThreeFloor from "../components/Reserve/ThirdTower/ThirdTowerThreeFloor";
import ThirdTowerFourFloor from "../components/Reserve/ThirdTower/ThirdTowerFourFloor";
import ThirdTowerFiveFloor from "../components/Reserve/ThirdTower/ThirdTowerFiveFloor";
import ThirdTowerSixFloor from "../components/Reserve/ThirdTower/ThirdTowerSixFloor";
import ThirdTowerSevenFloor from "../components/Reserve/ThirdTower/ThirdTowerSevenFloor";

const Reserve = (props) => {
  // floor: 何号館何階かを保持する変数
  const [floor, setFloor] = React.useState("12");

  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div className={`p-3 border-b-2 text-xl font-medium flex bg-white `}>
          <a href="/" className={`w-[150px]`}>
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          <Link className={`mx-3 px-4 pt-2`} to="../reserveTop">
            予約Topページ
          </Link>
          <Link className={`mx-3 px-4 pt-2`} to="../reserve">
            予約申請
          </Link>
          {/* <Link className={`mx-3 px-4 pt-2`} to="../timetable">
            時間割
          </Link> */}
        </div>
      </header>

      <div className={`flex justify-around pt-10`}>
        {/* １号館 */}
        <div
          className={`flex flex-col border-2 m-3 mx-4 text-center bg-[#F4F5F5] w-1/3 p-2`}
        >
          <div
            className={`w-100% border-[#F4F5F5] text-[#66aacc] text-2xl font-bold`}
          >
            １号館
          </div>
          <div className={`flex`}>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "12"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "12");
              }}
            >
              2F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "13"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "13");
              }}
            >
              3F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "14"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "14");
              }}
            >
              4F
            </div>
          </div>
        </div>

        {/* ２号館 */}
        <div
          className={`flex flex-col border-2 m-3 mx-4 text-center bg-[#F4F5F5] w-1/3 p-2`}
        >
          <div className={`w-100% text-[#66aacc] text-2xl font-bold`}>
            ２号館
          </div>
          <div className={`flex`}>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "22"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "22");
              }}
            >
              2F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "23"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "23");
              }}
            >
              3F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "24"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "24");
              }}
            >
              4F
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "25"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "25");
              }}
            >
              5F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "26"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "26");
              }}
            >
              6F
            </div>
            <div className={`w-1/3 m-1 text-2xl font-bold`}></div>
          </div>
        </div>
        {/* ３号館 */}
        <div
          className={`flex flex-col border-2 m-3 mx-4 text-center bg-[#F4F5F5] w-1/3 p-2`}
        >
          <div
            className={`w-100% text-[#66aacc] text-2xl font-bold`}
          >
            ３号館
          </div>
          <div className={`flex`}>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "32"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "32");
              }}
            >
              2F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "33"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "33");
              }}
            >
              3F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "34"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "34");
              }}
            >
              4F
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "35"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "35");
              }}
            >
              5F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "36"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "36");
              }}
            >
              6F
            </div>
            <div
              className={`w-1/3 border-2 border-black drop-shadow-lg m-1 text-3xl font-bold ${
                floor === "37"
                  ? "text-[#FFFFFF] bg-[#7FD4FF]"
                  : "text-[#7FD4FF] bg-[#FFFFFF] hover:translate-y-0.5 hover:bg-gray-100 transform transition"
              }`}
              onClick={() => {
                setFloor((floor) => "37");
              }}
            >
              7F
            </div>
          </div>
        </div>
      </div>
      <div className={`flex justify-around pt-10`}>
        {/* <div className={`flex place-content-center my-8 w-3/5`}> */}
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
        {/* </div>
        <div className={`w-1/3 pr-[100px] pt-[30px]`}>
          <img
            src="../../images/projector.png"
            alt="projector"
            className={`object-contain`}
          />
        </div> */}
      </div>
    </>
  );
};

export default Reserve;
