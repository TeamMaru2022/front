const Load = (props) => {
  let url = "http://localhost:4000/room/" + props.room;

  // 教室の色を変更
  const Usage_situation = (room) => {
    document.getElementById(room).style.backgroundColor = "#ffbfc8";
  };

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      var period = String(data["TimerInfo"]); //今何限目か示す変数
      console.log(data);

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
              Usage_situation(room_num);
            }
          }
        }
      }
    });
};

export default Load;
