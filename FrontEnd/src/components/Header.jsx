import { logo } from "../assets";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Center from "./Center";
import NavLink from "./NavLink";
import ArrowUp from "./icons/ArrowUp";
import ArrowDown from "./icons/ArrowDown";
import BarsIcon from "./icons/Bar";
import User from "./icons/User";

export default function Header({
  setOpenLinkPopup1 = () => {},
  setOpenLinkPopup2 = () => {},
  setOpenLinkPopup3 = () => {},

  openLinkPopup1,
  openLinkPopup2,
  openLinkPopup3,

  isLogin,
  userName,
}) {
  const navigate = useNavigate();

  const [openToggle, setOpenToggle] = useState(false);

  function openNavPopup1() {
    setOpenLinkPopup1(!openLinkPopup1);
    setOpenLinkPopup2(false);
    setOpenLinkPopup3(false);
  }

  function openNavPopup2() {
    setOpenLinkPopup2(!openLinkPopup2);
    setOpenLinkPopup1(false);
    setOpenLinkPopup3(false);
  }

  function openNavPopup3() {
    setOpenLinkPopup3(!openLinkPopup3);
    setOpenLinkPopup1(false);
    setOpenLinkPopup2(false);
  }

  function backToHome() {
    navigate("/");
    setOpenToggle(false);
  }

  function goToStaffLoginPage() {
    navigate("/staff-login");
    setOpenToggle(false);
  }

  function goToFolder(num) {
    navigate("/folder/" + num);
    setOpenToggle(false);
  }

  return (
    <>
      <nav className="bg-[#006794] py-5 sticky top-0 z-10">
        <Center>
          <div className="flex justify-between items-center py-[7.2px]">
            <button
              onClick={backToHome}
              className="flex text-white no-underline relative z-3 items-center gap-[7.2px] font-semibold cursor-pointer select-none"
            >
              <img
                src={logo}
                alt="logo"
                className="w-[74.358px] h-[28.431px] mb-[4px]"
              />
              <p className="text-white text-[17.82px] font-semibold mt-[4px]">
                x
              </p>
              <h1 className="text-white text-[25.92px] font-semibold">
                NXT7交通安全網
              </h1>
            </button>

            {/* 原 NavBar */}
            <div className="gap-[20px] hidden top-0 bottom-0 left-0 right-0  pt-[70px] pl-[20px] pb-[20px] bg-[#006794] sm:flex sm:static sm:p-0 mt-[1px] sm:mt-0  ">
              <div className="mr-[4px]">
                <NavLink onClick={backToHome}>首頁</NavLink>
              </div>
              <NavLink onClick={openNavPopup1}>
                交通法規
                {!openLinkPopup1 && <ArrowUp />}
                {openLinkPopup1 && <ArrowDown />}
              </NavLink>
              <NavLink onClick={openNavPopup2}>
                車禍防治
                {!openLinkPopup2 && <ArrowUp />}
                {openLinkPopup2 && <ArrowDown />}
              </NavLink>
              <NavLink onClick={openNavPopup3}>
                交安推動 {!openLinkPopup3 && <ArrowUp />}
                {openLinkPopup3 && <ArrowDown />}
              </NavLink>
              {!isLogin && (
                <NavLink onClick={goToStaffLoginPage}>同仁登入</NavLink>
              )}
              {isLogin && (
                <div className="flex text-[16px] gap-[2px] items-center block text-white no-underline font-semibold py-[10px] px-0 sm:p-0 select-none">
                  {userName} <User />
                </div>
              )}
            </div>

            {/* 如果當 width < sm => 以下的 Header 會取代舊 Header 並覆蓋整個頁面 */}
            {/* 以下是原 NavBar 的變體， NavLink 會連結到與原 NavBar 不同的頁面 */}
            <div
              className={`${
                openToggle ? "fixed" : "hidden"
              } gap-[20px] top-0 bottom-0 left-0 right-0  pt-[70px] px-[25px] pb-[20px] bg-[#006794] sm:hidden mt-[1px] `}
            >
              <div className="mr-[4px]">
                <NavLink onClick={backToHome}>首頁</NavLink>
              </div>
              <NavLink
                onClick={() => {
                  goToFolder(1);
                }}
              >
                交通法規
              </NavLink>
              <NavLink
                onClick={() => {
                  goToFolder(2);
                }}
              >
                車禍防治
              </NavLink>
              <NavLink
                onClick={() => {
                  goToFolder(3);
                }}
              >
                交安推動
              </NavLink>
              {!isLogin && (
                <NavLink onClick={goToStaffLoginPage}>同仁登入</NavLink>
              )}
            </div>

            <div
              onClick={() => {
                setOpenToggle(!openToggle);
              }}
              className="relative block sm:hidden cursor-pointer z-[10]"
            >
              <BarsIcon />
            </div>
          </div>
        </Center>
      </nav>
    </>
  );
}

Header.propTypes = {
  setOpenLinkPopup1: PropTypes.func,
  setOpenLinkPopup2: PropTypes.func,
  setOpenLinkPopup3: PropTypes.func,
  openLinkPopup1: PropTypes.bool,
  openLinkPopup2: PropTypes.bool,
  openLinkPopup3: PropTypes.bool,
  isLogin: PropTypes.bool,
  userName: PropTypes.string,
};
