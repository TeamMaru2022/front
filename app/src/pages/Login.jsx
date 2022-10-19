import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  // パスワード表示制御ようのstate
  const [isRevealPassword, setIsRevealPassword] = React.useState(false);

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
          type="text"
          name="name"
          placeholder="ユーザ名"
          className={`mx-auto mt-[50px] px-[30px] p-3 w-[450px] border-[#FF8093] border-b-4 text-xl outline-0`}
        />
        <div className="mx-auto mt-[50px] px-[30px] p-3 w-[450px] border-[#FF8093] border-b-4 text-xl flex justify-between">
          <input
            type={isRevealPassword ? "text" : "password"}
            name="pass"
            placeholder="パスワード"
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
        <Link to="../reserve">
          <div
            className={`w-[200px] m-10 px-7 py-3 mx-auto rounded-lg hover:translate-y-0.5 bg-gray-300 hover:border-b-2 border-gray-400 transform transition`}
          >
            <img
              src="./images/loginButton.png"
              alt="login"
              className="w-[70px] mx-auto"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Login;
