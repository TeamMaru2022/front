const Load = (props) => {
  let roomurl = "http://localhost:4000/room/" + props.room;

  // 教室の色を変更
  const Usage_situation = (room) => {
    document.getElementById(room).style.backgroundColor = "#ffbfc8";
  };

  // 授業中の教室
  fetch(roomurl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var period = String(data["TimerInfo"]); //今何限目か示す変数

      // n号館n階の教室数をlenに代入
      var len = Object.keys(data["NormalInfo"]).length;

      // i : 教室数
      for (let i = 0; i < len; i++) {
        // 教室番号
        let room_num = Object.keys(data["NormalInfo"])[i];

        // period_sum : 何限まであるか
        let period_sum = Object.keys(data["NormalInfo"][room_num]).length;

        // n限目に授業があれば、教室の色を変える
        for (let j = 0; j < period_sum; j++) {
          if (data["NormalInfo"][room_num][j]["TimeNo"] === period) {
            if (!(data["NormalInfo"][room_num][j]["SubjectName"] === "")) {
              // 教室の色を変更
              Usage_situation(room_num);
            }
          }
        }
      }
    });

  // 予約の教室を調べるurl
  // let reseurl = "http://localhost:4000/reservation/rese/room/" + props.room;

  // // 予約の教室
  // fetch(reseurl)
  //   .then((response) => response.json())
  //   .then((data) => {

  //     // message 0 : 今の時間の予約なし
  //     //         1 : 予約あり
  //     if (data["message"] === "1") {
  //       const len = data["NormalInfo"].length;
  //       for (let i = 0; i < len; i++) {
  //         // 予約のある教室の色を変更
  //         Usage_situation(data["NormalInfo"][i]["RoomNo"]);
  //       }
  //     }
  //   });
};

export default Load;
