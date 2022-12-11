import { useState, useEffect } from "react";

const Reserve = (props) => {
  const [reserve, setReserve] = useState([]);
  let url = "http://localhost:4000/reservation/rese/" + props.tower;

  // urlが変更されるたびにuseEffectの中の処理をする
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReserve(data));
  }, [url]);
  if (reserve["message"] === "0") {
    return <div className={`text-center text-2xl my-2`}>本日予約なし</div>;
  } else if (reserve.length > 0) {
    const items = [];
    for (let i = 0; i < reserve.length; i++) {
      items.push(
        <div
          key={i}
          className={`text-center text-2xl my-2 w-[360px]`}
        >
          【{reserve[i]["RoomNo"]}】{reserve[i]["Stime"].slice(0, 5)}～
          {reserve[i]["Etime"].slice(0, 5)}
        </div>
      );
    }
    return <>{items}</>;
  }
};

export default Reserve;
