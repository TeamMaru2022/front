import React from "react";
import useMedia from "use-media";
import { Link } from "react-router-dom";

const TopPage = () => {
  const max1300 = useMedia({ maxWidth: "1300px" });
  const max750 = useMedia({ maxWidth: "750px" });
  // ハンバーガーメニュー表示するかしないかの変数
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  // ハンバーガーメニューのプラス押したか押してないか判定
  const [openTower, setOpenTower] = React.useState(false);

  return (
    <>
      <header className={`sticky z-50 top-0`}>
        {max750 ? (
          <div>
            <div
              className={`p-2 border-b-2 text-xl font-medium flex bg-white justify-between`}
            >
              <a href="http://localhost:3000/" className={`w-1/5`}>
                <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[#7FD4FF] flex justify-end`}
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={menuFunction}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`p-3 border-b-2 text-xl font-medium flex bg-white justify-between`}
            >
              <div className={`flex`}>
                <a href="http://localhost:3000/" className={`w-[150px]`}>
                  <img
                    src="./images/logo.png"
                    alt="KitAru"
                    className={`px-3`}
                  />
                </a>
                <a href="#aki" className="px-4 pt-1 mt-1 mx-3 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition">
                  空き教室
                </a>
                <a href="#setubi" className="px-4 pt-1 mt-1 mx-3 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition">
                  設備
                </a>
              </div>
              <Link to="login">
                <div className={`flex mx-2 px-2 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition`}>
                  <img
                    src="./images/reserve_page.png"
                    alt="職員ページ"
                    className={`w-9 h-9`}
                  />
                </div>
              </Link>
            </div>
          </>
        )}
        {/* </div> */}
        {/* ハンバーガーメニュー */}
        {openMenu && (
          <div
            className={`flex flex-row absolute w-full bg-[#C6ECFF] text-white py-3`}
          >
            <ul className={`w-full`}>
              <li>
                <div
                  className={`px-5 flex justify-between border-b-2 border-[#80D4FF] text-shadow`}
                >
                  <a
                    href="#aki"
                    onClick={() => {
                      menuFunction();
                      setOpenTower(false);
                    }}
                  >
                    空き教室
                  </a>
                  {/*
                      plusボタンが押された時(openmenuがtrue)minus.pngに変更
                      逆も同じ動作
                  */}
                  {openTower ? (
                    <img
                      src="../images/minus.png"
                      alt="minus"
                      className={`object-contain w-4`}
                      onClick={() => setOpenTower(!openTower)}
                    />
                  ) : (
                    <img
                      src="../images/plus.png"
                      alt="plus"
                      className={`object-contain w-4`}
                      onClick={() => setOpenTower(!openTower)}
                    />
                  )}
                </div>
                {/* plusボタンが押された時、号館を表示、
                    minusボタンが押された時は非表示
                */}
                {openTower && (
                  <>
                    <ul>
                      <li className={`mx-10 border-b-2 border-[#80D4FF]`}>
                        <a
                          href="/first"
                          className="text-shadow"
                          onClick={menuFunction}
                        >
                          １号館
                        </a>
                      </li>
                      <li className={`mx-10 border-b-2 border-[#80D4FF]`}>
                        <a
                          href="/second"
                          className="text-shadow"
                          onClick={menuFunction}
                        >
                          ２号館
                        </a>
                      </li>
                      <li className={`mx-10 border-b-2 border-[#80D4FF]`}>
                        <a
                          href="/third"
                          className="text-shadow"
                          onClick={menuFunction}
                        >
                          ３号館
                        </a>
                      </li>
                    </ul>
                  </>
                )}
              </li>
              <li>
                <a
                  href="#setubi"
                  className="px-5 block text-shadow border-b-2 border-[#80D4FF]"
                  onClick={() => {
                    menuFunction();
                    setOpenTower(false);
                  }}
                >
                  設備
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <div
        id="top"
        className={`${
          max750 ? `pt-[60px]` : `pt-[150px]`
        } bg-gradient-to-b from-[#7FD4FF] to-[#fff]`}
      >
        <img
          src="./images/logo.png"
          alt="KitAru"
          className={`w-2/5 mx-auto drop-shadow-xl`}
        />
      </div>
      <div className={`p-5`}>
        <div
          id="aki"
          className={`${
            max750 ? `pt-[20px]` : `pt-20`
          } text-2xl px-2 font-bold mt-4`}
        >
          空き教室を探す
        </div>
        {/* 号館 */}
        <div className={`flex-col ${max750 ? `mt-5 mb-10` : `mt-10 mb-20`}`}>
          <div
            className={`h-[10px] rounded-t bg-gradient-to-b from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
          <div className={`relative`}>
            <div
              className={`absolute w-[10px] h-full bg-gradient-to-r from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`right-0 absolute w-[10px] h-full bg-gradient-to-l from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`${
                max1300 ? `p-2` : `p-10`
              } bg-[#F4F5F5] text-xl font-medium flex`}
            >
              <Link to="first" className={`h-30% w-33% mx-5`}>
                <div className={`flex-col`}>
                  <img src="./images/FirstTower.png" alt="1号館" />
                  <div className={`text-center ${max1300 ? `my-2` : `mt-10`}`}>
                    1号館
                  </div>
                </div>
              </Link>
              <Link to="second" className={`h-30% mx-5`}>
                <div className={`flex-col`}>
                  <img src="./images/SecondTower.png" alt="2号館" />
                  <div className={`text-center ${max1300 ? `my-2` : `mt-10`}`}>
                    2号館
                  </div>
                </div>
              </Link>
              <Link to="third" className={`h-30% mx-5`}>
                <div className={`flex-col`}>
                  <img src="./images/ThirdTower.png" alt="3号館" className="" />
                  <div className={`text-center ${max1300 ? `my-2` : `mt-10`}`}>
                    3号館
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={`h-[10px] rounded-b bg-gradient-to-t from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
        </div>

        <div id="setubi" className={`text-2xl px-2 font-bold`}>
          設備
        </div>
        <div className={`flex-col ${max750 ? `mt-5 mb-10` : `mt-10 mb-20`} `}>
          <div
            className={`h-[10px] rounded-t bg-gradient-to-b from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
          <div className={`relative`}>
            <div
              className={`absolute w-[10px] h-full bg-gradient-to-r from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`right-0 absolute w-[10px] h-full bg-gradient-to-l from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`${
                max750 ? `px-1` : `p-5`
              } bg-[#F4F5F5] text-3xl font-bold flex flex-col`}
            >
              <div className={`text-[#7FD4FF] font-bold text-4xl pl-4 pb-3`}>
                １号館
              </div>
              <div className={`flex justify-between flex-wrap`}>
                <div
                  className={`flex flex-col ${
                    max750 ? `w-1/2 p-2` : `w-[300px] p-4`
                  }`}
                >
                  <img src="./images/1206.png" alt="1号館" />
                  <div className={`text-center`}>1206 1309</div>
                </div>

                <div
                  className={`flex flex-col ${
                    max750 ? `w-1/2 p-2` : `w-[300px] p-4`
                  }`}
                >
                  <img src="./images/1301.png" alt="1号館" />
                  <div className={`text-center`}>1301 1302</div>
                  <div className={`text-center`}>1303 1304</div>
                </div>
                <div
                  className={`flex flex-col ${
                    max750 ? `w-1/2 p-2` : `w-[300px] p-4`
                  }`}
                >
                  <img src="./images/1305.png" alt="1号館" />
                  <div className={`text-center`}>1305 1306</div>
                  <div className={`text-center`}>1307 1308</div>
                </div>
              </div>

              <div className={`text-[#7FD4FF] font-bold text-4xl pl-4 py-4`}>
                ２号館
              </div>
              <div className={`flex justify-between flex-wrap`}>
                <div
                  className={`flex flex-col ${
                    max750 ? `w-1/2 p-2` : `w-[300px] p-4`
                  }`}
                >
                  <img src="./images/1206.png" alt="1号館" />
                  <div className={`text-center`}>1206 1309</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`h-[10px] rounded-b bg-gradient-to-t from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
