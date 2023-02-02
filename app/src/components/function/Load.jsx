const Load = (props) => {
  let roomurl = "http://localhost:4000/room/" + props.room;

  // 教室の色を変更（予約、授業：赤）
  const Usage_situation = (room) => {
    document.getElementById(room).style.backgroundColor = "#ffbfc8";
  };

  // 教室の色を変更（利用中：黄）
  const sensor_situation = (room) => {
    document.getElementById(room).style.backgroundColor = "#fff4bf";
  };

  // 授業中の教室
  fetch(roomurl)
    .then((response) => response.json())
    .then((data) => {
      // 利用中の色を変更
      var UsingLen = Object.keys(data["DetectingInfo"]).length;
      // i : 教室数
      for (let i = 0; i < UsingLen; i++) {
        // 教室番号
        let room_num = Object.keys(data["DetectingInfo"])[i];
        // 教室がtrueなら色を変更
        if (data["DetectingInfo"][room_num]) {
          sensor_situation(room_num);
        }
      }

      //今何限目か示す変数
      var period = String(data["TimerInfo"]);

      // 授業中の色を変更
      // n号館n階の教室数をNormalLenに代入
      var NormalLen = Object.keys(data["NormalInfo"]).length;

      // i : 教室数
      for (let i = 0; i < NormalLen; i++) {
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

      // 予約中の色を変更
      var ReseLen = Object.keys(data["ReservationInfo"]).length;
      const now = new Date();
      const nowTime =
        now.getHours() + ":" + now.getMinutes() + ":" + now.getHours();

      // i : 教室数
      for (let i = 0; i < ReseLen; i++) {
        // 教室番号
        let room_num = Object.keys(data["ReservationInfo"])[i];

        // 予約があるか
        if (room_num.length !== 0) {
          // "1201"に予約が2件あれば2回まわる
          for (let j = 0; j < data["ReservationInfo"][room_num].length; j++) {
            // 予約中なら色を変更する
            if (
              data["ReservationInfo"][room_num][j]["STime"] <= nowTime &&
              nowTime <= data["ReservationInfo"][room_num][j]["ETime"]
            ) {
              // 教室の色を変更
              Usage_situation(room_num);
            }
          }
        }
      }
    });
};

export default Load;
