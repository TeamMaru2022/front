import { useState, useEffect } from "react";

const Reserve = (props) => {
  // この書き方で1回だけ回す
  const [reserve, setReserve] = useState([]);
  let url = "http://localhost:4000/reservation/rese/" + props.tower;
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
        <div key={i} className={`text-center text-2xl my-2 absolute w-[360px]`}>
          <div>
            【{reserve[0]["RoomNo"]}】{reserve[0]["Stime"].slice(0, 5)}～
            {reserve[0]["Etime"].slice(0, 5)}
          </div>
        </div>
      );
    }
    return <>{items}</>;
  }
};

export default Reserve;
