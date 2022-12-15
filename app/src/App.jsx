import React from "react";
import useMedia from "use-media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import TopPage from "./pages/TopPage";
import FirstTower from "./pages/FirstTower";
import SecondTower from "./pages/SecondTower";
import ThirdTower from "./pages/ThirdTower";
import Reserve from "./pages/Reserve";
import ReserveTop from "./pages/ReserveTop";
import Login from "./pages/Login";
import ChangeTimetable from "./pages/ChangeTimetable";
import ReserveConfirmation from "./pages/ReserveConfirmation";
import ChangeMypage from "./pages/ChangeMypage";
import ReserveAgree from "./pages/ReserveAgree";

const App = () => {
  const isWide = useMedia({ minWidth: "1300px" });
  return (
    <BrowserRouter>
        <div className={`${isWide ? `w-[1300px] mx-auto` : `w-auto`}`}>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="first" element={<FirstTower />} />
            <Route path="second" element={<SecondTower />} />
            <Route path="third" element={<ThirdTower />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="reservetop" element={<ReserveTop />} />
            <Route path="login" element={<Login />} />
            <Route path="timetable" element={<ChangeTimetable />} />
            <Route path="reserveConfirmation" element={<ReserveConfirmation />} />
            <Route path="mypage" element={<ChangeMypage />} />
            <Route path="reserveAgree" element={<ReserveAgree />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
