import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  // パスワード表示制御用のstate
  const [isRevealPassword, setIsRevealPassword] = React.useState(false);

  // inputの値を保持する
  const [mail, setMail] = React.useState("");
  const [pass, setPass] = React.useState("");

  // メールアドレス、パスワードがあっているかを保持する
  const [loginstate, setLoginState] = React.useState("");

  var test = "0";

  // ログインできるかサーバに確認
  const LoginFunction = async (mail, pass) => {
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
    const message = await fetch(url, param);
    // .then((response) => response.json())
    // .then((data) => {
    //   const message = data["message"];
    //   setLoginState(message);

    // });
    return message.json();
    // console.log("loginstate====" + message);
  };

  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div className={`p-3 border-b-2 text-xl font-medium flex bg-white `}>
          <a href="/" className={`w-[150px]`}>
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          <div className="mx-3 px-4 pt-2">予約申請ページ</div>
        </div>
      </header>
      <div className={`flex flex-col`}>
        <img
          src="./images/login.png"
          alt="login"
          className={`w-[250px] mx-auto mt-[100px]`}
        />
        <input
          type="address"
          name="mail"
          placeholder="メールアドレス"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          className={`mx-auto mt-[50px] px-[30px] p-3 w-[450px] border-[#FF8093] border-b-4 text-xl outline-0`}
        />
        <div className="mx-auto mt-[50px] px-[30px] p-3 w-[450px] border-[#FF8093] border-b-4 text-xl flex justify-between">
          <input
            type={isRevealPassword ? "text" : "password"}
            name="pass"
            placeholder="パスワード"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
            className={` outline-0 w-full`}
          />
          <div
            className="flex"
            onClick={() => {
              setIsRevealPassword(!isRevealPassword);
            }}
          >
            {isRevealPassword ? (
              <img
                src="./images/eye_off.svg"
                alt="login"
                className={`object-contain w-6`}
              />
            ) : (
              <img src="./images/eye_on.svg" alt="login" className={`w-6`} />
            )}
          </div>
        </div>

        <div
          className={`w-[200px] m-10 px-7 py-3 mx-auto rounded-lg hover:translate-y-0.5 bg-gray-300 hover:border-b-2 border-gray-400 transform transition`}
          onClick={() => {
            // message  0: 入力したメールアドレスが登録されていない
            //          1: パスワードが違う
            //          2: ログイン成功
            LoginFunction(mail, pass).then((data) => {
              console.log(data["message"]);
              test = data["message"];
              setLoginState(data["message"]);
            });
            console.log(test);
          }}
        >
          <Link to="../reserveTop">
          <img
            src="./images/loginButton.png"
            alt="login"
            className="w-[70px] mx-auto"
          />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
