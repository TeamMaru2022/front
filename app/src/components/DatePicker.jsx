import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { format } from "date-fns";

import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);

const Com_DatePicker = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // start時間のhour
  const [startHour, setStartHour] = React.useState();

  const starthandleChange = (e) => {
    setStartHour(e.target.value);
  };

  // end時間のhour
  const [endHour, setEndHour] = React.useState();

  const endhandleChange = (e) => {
    setEndHour(e.target.value);
  };

  return (
    <>
      <div className={`absolute z-10 mx-[24px] mt-16 w-[300px] flex-col`}>
        <div className={`flex-col justify-center`}>
          {/* 日付指定 */}
          <div
            className={`flex border-b-2 border-[#FF8093] justify-center text-xl font-bold`}
          >
            {format(startDate, "yyyy/MM/dd")}
            <img
              onClick={handleClick}
              src="../../images/calendar.svg"
              alt="calendar"
              className={`object-contain w-5 flex ml-6`}
            />
          </div>
          {isOpen && (
            <div className={`absolute`}>
              <DatePicker
                locale="ja"
                selected={startDate}
                onChange={handleChange}
                minDate={new Date()}
                inline
              />
            </div>
          )}

          {/* 時間指定 */}
          <div className={`flex flex-row justify-around mt-[15px]`}>
            <div className={`flex`}>開始時間</div>
            <div className={`flex`}>終了時間</div>
          </div>
          <div className={`flex justify-around mt-[10px] px-2`}>
            <div className={`flex`}>
              <select
                className={`border-2 border-black`}
                name="start_hour"
                id="start_hour"
                onChange={(e) => starthandleChange(e)}
              >
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
              <div className={`px-1`}>:</div>
              <select
                className={`border-2 border-black`}
                name="start_min"
                id="start_min"
              >
                <option value="00">00</option>
                {startHour === "20" ? (
                  ``
                ) : (
                  <>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                  </>
                )}
              </select>
            </div>

            <div>～</div>
            <div className={`flex`}>
              <select
                className={`border-2 border-black`}
                name="end_hour"
                id="end_hour"
                onChange={(e) => endhandleChange(e)}
              >
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
              <div className={`px-1`}>:</div>
              <select
                className={`border-2 border-black`}
                name="end_min"
                id="end_min"
              >
                <option value="00">00</option>
                {endHour === "20" ? (
                  ``
                ) : (
                  <>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className={`flex flex-row-reverse mt-[25px] mr-[30px] text-base`}>
            <div
              className={`flex px-4 rounded-md drop-shadow-lg border-black bg-gray-300 border-2`}
            >
              申請
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Com_DatePicker;
