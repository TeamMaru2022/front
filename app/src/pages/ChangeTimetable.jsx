import React from "react";

const ChangeTimetable = () => {
  let url = "http://localhost:4000/timetable/csv";
  const formData = new FormData();

  const SetTimetable = (e) => {
    console.log("変更");
    formData.append("timetable", e.target.files[0]);
  };

  const TimetableChange = () => {
    console.log("送信");
    const param = {
      method: "POST",
      body: formData,
    };
    fetch(url, param).then((response) => response.json());
  };

  return (
    <>
      <input type="file" onChange={(props) => SetTimetable(props)} />
      <button onClick={() => TimetableChange()} >送信</button>
    </>
  );
};

export default ChangeTimetable;
