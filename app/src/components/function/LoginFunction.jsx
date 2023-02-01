const LoginFunction = (mail, pass) => {
  // postしたときにデータを入れるための変数
  // const [message, setMessage] = React.useState();

  let url = "http://localhost:4000/teacher/login";

  console.log(mail);
  console.log(pass);
  // postで送るデータ
  const param = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail: mail,
      password: pass,
    }),
  };
  // postで帰ってきたデータをsetMessageでmessageに入れてる
  // message  0: 入力したメールアドレスが登録されていない
  //          1: パスワードが違う
  //          2: ログイン成功
  fetch(url, param)
    .then((response) => response.json())
    .then((data) => {
      // setMessage(data["message"]);
    });
  // return message;
};

export default LoginFunction;
